// Shared script for GameNest pages
// Features:
// - products list (normalized prices)
// - filter / sort / render on catalog page
// - cart stored as [{id, qty}], persisted to localStorage
// - safe DOM access so script can be used on index/about pages as well

(() => {
  // Versioned key for localStorage
  const STORAGE_KEY = 'gamenest_cart_v1';

  // Products data (kept inline for simplicity)
  const products = [
    { id: 1, title: 'Counter-Strike 2, Premium', price: 17, category: 'FPS', inStock: true, discount: false, isTop: true, feedback: "Mostly Positive", description: "A fast, competitive shooter where every round demands precision and strategy.", age_limit: 18, image: "images/cs2.jpg", region: "World-Wide", release_date: "2023" },
    { id: 2, title: 'Minecraft', price: 25, category: 'Sandbox', inStock: true, discount: false, isTop: true, feedback: "Very positive", description: "A creative sandbox world where you can build, explore, and survive however you want.", age_limit: false, image: "images/minecraft.png", region: "World-Wide", release_date: "2011" },
    { id: 3, title: 'Fortnite, Battle Pass', price: 15, category: 'Game Pass', inStock: true, discount: false, isTop: false, feedback: "Mostly positive", description: "A fast-paced battle royale where you fight, build, and outlast 100 players.", age_limit: 12, image: "images/fortnite.jpg", region: "World-Wide", release_date: "2017" },
    { id: 4, title: 'Grand Theft Auto V', price: 14, category: 'Action', inStock: true, discount: true, isTop: true, feedback: "Overwhelmingly positive", description: "A huge open world full of action, crime, and endless ways to explore Los Santos.", age_limit: 18, image: "images/gta5.avif", region: "World-Wide", release_date: "2013" },
    { id: 5, title: 'The Witcher 3: Wild Hunt', price: 20, category: 'RPG', inStock: true, discount: true, isTop: true, feedback: "Overwhelmingly positive", description: "A story-rich RPG with deep combat, a massive world, and unforgettable quests.", age_limit: 18, image: "images/witcher3.jpg", region: "World-Wide", release_date: "2015" },
    { id: 6, title: 'FIFA 24', price: 45, category: 'Sports', inStock: true, discount: false, isTop: false, feedback: "Mixed", description: "A realistic football experience with new animations and improved gameplay.", age_limit: 3, image: "images/ff24.jpg", region: "World-Wide", release_date: "2023" },
    { id: 7, title: 'Roblox, 1000 Robux', price: 0, category: 'V-Currency', inStock: true, discount: false, isTop: false, feedback: "Very positive", description: "A massive online universe where you can play, create, and share thousands of games.", age_limit: 10, image: "images/roblox.jpg", region: "World-Wide", release_date: "2006" },
    { id: 8, title: 'Elden Ring', price: 40, category: 'Action RPG', inStock: true, discount: false, isTop: true, feedback: "Overwhelmingly positive", description: "A challenging action RPG set in a dark fantasy world full of powerful enemies.", age_limit: 16, image: "images/elder-ring.jpg", region: "World-Wide", release_date: "2022" },
    { id: 9, title: 'Cyberpunk 2077', price: 30, category: 'RPG', inStock: true, discount: true, isTop: false, feedback: "Mostly positive", description: "A futuristic open-world RPG filled with choices, fast combat, and a deep story.", age_limit: 18, image: "images/cyber.avif", region: "World-Wide", release_date: "2020" },
    { id: 10, title: 'Valorant', price: 0, category: 'FPS', inStock: true, discount: false, isTop: false, feedback: "Very positive", description: "A tactical 5v5 shooter focused on accuracy, teamwork, and unique agent abilities.", age_limit: 16, image: "images/valorant.jpg", region: "World-Wide", release_date: "2020" },
    { id: 11, title: 'Red Dead Redemption 2', price: 30, category: 'Open World', inStock: true, discount: false, isTop: true, feedback: "Overwhelmingly positive", description: "A cinematic open-world western with a deep story and incredibly detailed world.", age_limit: 18, image: "images/red-dead-redemption-2r.jpg", region: "World-Wide", release_date: "2018" },
    { id: 12, title: 'Terraria', price: 10, category: 'Sandbox', inStock: true, discount: false, isTop: false, feedback: "Overwhelmingly positive", description: "A 2D adventure sandbox with crafting, bosses, and endless exploration.", age_limit: 12, image: "images/Terraria.jpg", region: "World-Wide", release_date: "2011" },
  ];

  // Normalize product prices (ensure numbers)
  products.forEach(p => { p.price = Number(p.price) || 0; });

  // Cart structure: array of { id, qty }
  let cart = [];

  // Safe element references (some pages may not have these)
  const cartInfoEl = document.getElementById('cart-info');
  const productsContainer = document.getElementById('products-container');
  const searchInput = document.getElementById('search-input');
  const categoryFilter = document.getElementById('category-filter');
  const minPriceInput = document.getElementById('min-price-input');
  const sortSelect = document.getElementById('sort-select');
  const resultsInfo = document.getElementById('results-info');
  const clearCartBtn = document.getElementById('clear-cart-btn');

  // Load cart from localStorage
  function loadCart() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) { cart = []; return; }
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        // validate entries: {id, qty}
        cart = parsed.map(item => ({ id: Number(item.id) || 0, qty: Math.max(0, Number(item.qty) || 0) }))
                     .filter(i => i.id > 0 && i.qty > 0);
      } else {
        cart = [];
      }
    } catch (err) {
      console.warn('Failed to parse cart from localStorage:', err);
      cart = [];
    }
  }

  // Save cart
  function saveCart() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch (err) {
      console.warn('Failed to save cart:', err);
    }
  }

  // Add product to cart (increments qty)
  function addToCart(productId, amount = 1) {
    const id = Number(productId);
    if (!id) return;
    const existing = cart.find(i => i.id === id);
    if (existing) {
      existing.qty += amount;
    } else {
      cart.push({ id, qty: amount });
    }
    saveCart();
    updateCartCount();
  }

  // Clear cart
  function clearCart() {
    cart = [];
    localStorage.removeItem(STORAGE_KEY);
    updateCartCount();
    renderProductsIfPresent(); // keep UI in sync
  }

  // Return total items and total price
  function cartSummary() {
    let totalItems = 0;
    let totalPrice = 0;
    for (const item of cart) {
      const prod = products.find(p => p.id === item.id);
      if (!prod) continue;
      totalItems += item.qty;
      totalPrice += (prod.price || 0) * item.qty;
    }
    return { totalItems, totalPrice };
  }

  function updateCartCount() {
    if (!cartInfoEl) return;
    const { totalItems, totalPrice } = cartSummary();
    cartInfoEl.textContent = `Items: ${totalItems} — Total: $${totalPrice.toFixed(2)}`;
  }

  // Render helpers
  function createProductCard(product) {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.setAttribute('data-id', product.id);

    const img = document.createElement('img');
    img.className = 'product-image';
    img.src = product.image || 'images/placeholder.svg';
    img.alt = product.title || 'Game image';
    img.loading = 'lazy';
    img.decoding = 'async';
    // fallback to an inline placeholder SVG file in repository
    img.onerror = function () { this.onerror = null; this.src = 'images/placeholder.svg'; };

    const title = document.createElement('h3');
    title.className = 'product-title';
    title.textContent = product.title;

    const meta = document.createElement('div');
    meta.className = 'product-meta';
    const price = document.createElement('div');
    price.className = 'product-price';
    price.textContent = product.price ? `$${product.price}` : 'Free';

    const badges = document.createElement('div');
    badges.className = 'product-badges';
    if (product.discount) {
      const d = document.createElement('span'); d.className = 'badge'; d.textContent = 'Discount';
      badges.appendChild(d);
    }
    if (product.isTop) {
      const t = document.createElement('span'); t.className = 'badge'; t.textContent = 'Top';
      badges.appendChild(t);
    }

    meta.appendChild(badges);
    meta.appendChild(price);

    const desc = document.createElement('p');
    desc.className = 'product-description';
    desc.textContent = product.description;

    const feedback = document.createElement('div');
    feedback.className = 'product-feedback';
    feedback.textContent = `Feedback: ${product.feedback}`;

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'add-to-basket-btn';
    btn.setAttribute('aria-label', `Add ${product.title} to cart`);
    btn.textContent = 'Add to Basket';
    btn.dataset.productId = product.id;

    // Assemble
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(meta);
    card.appendChild(desc);
    card.appendChild(feedback);
    card.appendChild(btn);

    return card;
  }

  // Render products into container (safe)
  function renderProductsIfPresent(productsArray = products) {
    if (!productsContainer) return;
    productsContainer.innerHTML = '';
    if (!productsArray || productsArray.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'empty-state';
      empty.textContent = 'No products match your search/filters.';
      productsContainer.appendChild(empty);
      updateResultsInfo(0);
      return;
    }

    const fragment = document.createDocumentFragment();
    productsArray.forEach(p => fragment.appendChild(createProductCard(p)));
    productsContainer.appendChild(fragment);
    updateResultsInfo(productsArray.length);
  }

  // Update results info element if present
  function updateResultsInfo(count) {
    if (!resultsInfo) return;
    if (count > 0) resultsInfo.textContent = `Found products: ${count}`;
    else resultsInfo.textContent = 'No products found for your request.';
  }

  // Filtering and sorting
  function filterAndRender() {
    if (!productsContainer) return;
    const searchText = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const selectedCategory = categoryFilter ? categoryFilter.value : 'All';
    const minPriceValue = minPriceInput ? Number(minPriceInput.value) : NaN;
    const sortValue = sortSelect ? sortSelect.value : 'relevance';

    let filtered = products.filter(product => {
      const title = (product.title || '').toLowerCase();
      const description = (product.description || '').toLowerCase();
      const matchesText = !searchText || title.includes(searchText) || description.includes(searchText);
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesMinPrice = Number.isNaN(minPriceValue) || (Number(product.price) >= minPriceValue);
      return matchesText && matchesCategory && matchesMinPrice;
    });

    // Sorting
    if (sortValue === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortValue === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortValue === 'name-asc') {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    }

    renderProductsIfPresent(filtered);
  }

  // Event listeners & delegation
  function attachEventListeners() {
    // Add to basket (event delegation)
    if (productsContainer) {
      productsContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('.add-to-basket-btn');
        if (!btn) return;
        const id = btn.dataset.productId;
        addToCart(id, 1);
      });
    }

    // Filter controls
    if (searchInput) searchInput.addEventListener('input', debounce(filterAndRender, 200));
    if (categoryFilter) categoryFilter.addEventListener('change', filterAndRender);
    if (minPriceInput) minPriceInput.addEventListener('input', debounce(filterAndRender, 250));
    if (sortSelect) sortSelect.addEventListener('change', filterAndRender);

    // Clear cart button
    if (clearCartBtn) {
      clearCartBtn.addEventListener('click', () => {
        if (!confirm('Clear all items from the cart?')) return;
        clearCart();
      });
    }
  }

  // Simple debounce
  function debounce(fn, wait = 150) {
    let t;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn(...args), wait);
    };
  }

  // Initialize on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    updateCartCount();
    attachEventListeners();
    // If catalog page, render
    filterAndRender();
  });

  // Expose a small API to console for debugging (optional)
  window.__GameNest = {
    products,
    getCart: () => cart,
    addToCart,
    clearCart,
    cartSummary
  };
})();
