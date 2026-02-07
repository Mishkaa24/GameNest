// ===== GAMENEST ENHANCED SCRIPT.JS =====

// PRODUCT DATA
const products = [
	{
		id: 1,
		title: 'Counter-Strike 2, Premium',
		price: 17,
		category: 'FPS',
		pc_platform: true,
		ps_platform: false,
		xbox_platform: false,
		inStock: true,
		discount: 36,
		isTop: true,
		feedback: "Mostly Positive",
		description: "A fast, competitive shooter where every round demands precision and strategy.",
		age_limit: 18,
		image: "images/cs2.jpg",
		images: ["images/cs2.jpg", "images/cs2-screenshot1.jpg", "images/cs2-screenshot2.jpg"],
		OS_windows: true,
		OS_macos: false,
		OS_linux: false,
		region: "World-Wide",
		release_date: "2023",
	},
	{
		id: 2,
		title: 'Minecraft',
		price: 25,
		category: 'Sandbox',
		pc_platform: true,
		ps_platform: true,
		xbox_platform: true,
		inStock: true,
		discount: 0,
		isTop: true,
		feedback: "Very Positive",
		description: "A creative sandbox world where you can build, explore, and survive however you want.",
		age_limit: 0,
		image: "images/minecraft.png",
		images: ["images/minecraft.png", "images/PDP-US-Bundle-Screenshot-2.jpeg", "images/PDP-Gallery_OV_5_16x9.jpg"],
		OS_windows: true,
		OS_macos: true,
		OS_linux: true,
		region: "World-Wide",
		release_date: "2011",
	},
	{
		id: 3,
		title: 'Fortnite, Battle Pass',
		price: 15,
		category: 'Game Pass',
		pc_platform: true,
		ps_platform: true,
		xbox_platform: true,
		inStock: true,
		discount: 0,
		isTop: false,
		feedback: "Mostly Positive",
		description: "A fast-paced battle royale where you fight, build, and outlast 100 players.",
		age_limit: 12,
		image: "images/fortnite.jpg",
		images: ["images/fortnite.jpg", "images/Fortnite0.webp", "images/Xbox-One-Fortnite.avif"],
		OS_windows: true,
		OS_macos: false,
		OS_linux: false,
		region: "World-Wide",
		release_date: "2017",
	},
	{
		id: 4,
		title: 'Grand Theft Auto V',
		price: 14,
		category: 'Action',
		pc_platform: true,
		ps_platform: true,
		xbox_platform: true,
		inStock: true,
		discount: 40,
		isTop: true,
		feedback: "Overwhelmingly Positive",
		description: "A huge open world full of action, crime, and endless ways to explore Los Santos.",
		age_limit: 18,
		image: "images/gta5.avif",
		images: ["images/gta5.avif", "images/ss_d61184a98c1cf2db2b08b2999c04b0519e3615bb.1920x1080.jpg", "images/ss_cf15774bb38c9b74f9e98c985228510c97df80b6.1920x1080.jpg"],
		OS_windows: true,
		OS_macos: false,
		OS_linux: false,
		region: "World-Wide",
		release_date: "2013",
	},
	{
		id: 5,
		title: 'The Witcher 3: Wild Hunt',
		price: 20,
		category: 'RPG',
		pc_platform: true,
		ps_platform: true,
		xbox_platform: true,
		inStock: true,
		discount: 23,
		isTop: true,
		feedback: "Overwhelmingly Positive",
		description: "A story-rich RPG with deep combat, a massive world, and unforgettable quests.",
		age_limit: 18,
		image: "images/witcher3.jpg",
		images: ["images/witcher3.jpg", "images/ss_0901e64e9d4b8ebaea8348c194e7a3644d2d832d.1920x1080.jpg", "images/ss_112b1e176c1bd271d8a565eacb6feaf90f240bb2.1920x1080.jpg"],
		OS_windows: true,
		OS_macos: true,
		OS_linux: false,
		region: "World-Wide",
		release_date: "2015",
	},
	{
		id: 6,
		title: 'FIFA 24',
		price: 45,
		category: 'Sports',
		pc_platform: true,
		ps_platform: true,
		xbox_platform: true,
		inStock: true,
		discount: 0,
		isTop: false,
		feedback: "Mixed",
		description: "A realistic football experience with new animations and improved gameplay.",
		age_limit: 3,
		image: "images/ff24.jpg",
		images: ["images/ff24.jpg", "images/ss_857b4aaf3c10b2a886d60f029f32b2f86d968311.1920x1080.jpg", "images/ss_ee0be94a0a8e1325050481bcf351d736e6d2982d.1920x1080.jpg"],
		OS_windows: true,
		OS_macos: false,
		OS_linux: false,
		region: "World-Wide",
		release_date: "2023",
	},
	{
		id: 7,
		title: 'Roblox, 1000 Robux',
		price: 9.99,
		category: 'V-Currency',
		pc_platform: true,
		ps_platform: true,
		xbox_platform: true,
		inStock: true,
		discount: 0,
		isTop: false,
		feedback: "Very Positive",
		description: "A massive online universe where you can play, create, and share thousands of games.",
		age_limit: 10,
		image: "images/roblox.jpg",
		images: ["images/roblox.jpg", "images/1ebb066e6ffe1e6fd20c5850795efc65526552991f494193.avif", "images/Roblox-Key.png"],
		OS_windows: true,
		OS_macos: true,
		OS_linux: false,
		region: "World-Wide",
		release_date: "2006",
	},
	{
		id: 8,
		title: 'Elden Ring',
		price: 40,
		category: 'Action RPG',
		pc_platform: true,
		ps_platform: true,
		xbox_platform: true,
		inStock: true,
		discount: 0,
		isTop: true,
		feedback: "Overwhelmingly Positive",
		description: "A challenging action RPG set in a dark fantasy world full of powerful enemies.",
		age_limit: 16,
		image: "images/elder-ring.jpg",
		images: ["images/elder-ring.jpg", "images/ss_943bf6fe62352757d9070c1d33e50b92fe8539f1.1920x1080.jpg", "images/ss_e0316c76f8197405c1312d072b84331dd735d60b.1920x1080.jpg"],
		OS_windows: true,
		OS_macos: false,
		OS_linux: false,
		region: "World-Wide",
		release_date: "2022",
	},
	{
		id: 9,
		title: 'Cyberpunk 2077',
		price: 30,
		category: 'RPG',
		pc_platform: true,
		ps_platform: true,
		xbox_platform: true,
		inStock: true,
		discount: 31,
		isTop: false,
		feedback: "Mostly Positive",
		description: "A futuristic open-world RPG filled with choices, fast combat, and a deep story.",
		age_limit: 18,
		image: "images/cyber.avif",
		images: ["images/cyber.avif", "images/ss_7924f64b6e5d586a80418c9896a1c92881a7905b.1920x1080.jpg", "images/ss_b529b0abc43f55fc23fe8058eddb6e37c9629a6a.1920x1080.jpg"],
		OS_windows: true,
		OS_macos: false,
		OS_linux: false,
		region: "World-Wide",
		release_date: "2020",
	},
	{
		id: 10,
		title: 'Valorant',
		price: 0,
		category: 'FPS',
		pc_platform: true,
		ps_platform: false,
		xbox_platform: false,
		inStock: true,
		discount: 0,
		isTop: false,
		feedback: "Very Positive",
		description: "A tactical 5v5 shooter focused on accuracy, teamwork, and unique agent abilities.",
		age_limit: 16,
		image: "images/valorant.jpg",
		images: ["images/valorant.jpg", "images/f657721a7eb06acae52a29ad3a951f20c1e5fc60-1920x1080.jpg", "images/YHdtAs36hSJUL56Lq2nxFi.jpg"],
		OS_windows: true,
		OS_macos: false,
		OS_linux: false,
		region: "World-Wide",
		release_date: "2020",
	},
	{
		id: 11,
		title: 'Red Dead Redemption 2',
		price: 30,
		category: 'Open World',
		pc_platform: true,
		ps_platform: true,
		xbox_platform: true,
		inStock: true,
		discount: 0,
		isTop: true,
		feedback: "Overwhelmingly Positive",
		description: "A cinematic open-world western with a deep story and incredibly detailed world.",
		age_limit: 18,
		image: "images/red-dead-redemption-2r.jpg",
		images: ["images/red-dead-redemption-2r.jpg", "images/ss_66b553f4c209476d3e4ce25fa4714002cc914c4f.1920x1080.jpg", "images/ss_bac60bacbf5da8945103648c08d27d5e202444ca.1920x1080.jpg"],
		OS_windows: true,
		OS_macos: false,
		OS_linux: false,
		region: "World-Wide",
		release_date: "2018",
	},
	{
		id: 12,
		title: 'Terraria',
		price: 10,
		category: 'Sandbox',
		pc_platform: true,
		ps_platform: false,
		xbox_platform: false,
		inStock: true,
		discount: 0,
		isTop: false,
		feedback: "Very Positive",
		description: "A 2D adventure sandbox with crafting, bosses, and endless exploration.",
		age_limit: 12,
		image: "images/Terraria.jpg",
		images: ["images/Terraria.jpg", "images/ss_8c03886f214d2108cafca13845533eaa3d87d83f.1920x1080.jpg", "images/ss_9edd98caaf9357c2f40758f354475a56e356e8b0.1920x1080.jpg"],
		OS_windows: true,
		OS_macos: true,
		OS_linux: true,
		region: "World-Wide",
		release_date: "2011",
	},
];

// ===== THEME MANAGEMENT =====
function initTheme() {
	const savedTheme = localStorage.getItem('theme') || 'dark';
	document.documentElement.setAttribute('data-theme', savedTheme);
	updateThemeIcon(savedTheme);
}

function toggleTheme() {
	const currentTheme = document.documentElement.getAttribute('data-theme');
	const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
	document.documentElement.setAttribute('data-theme', newTheme);
	localStorage.setItem('theme', newTheme);
	updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
	const themeToggle = document.getElementById('theme-toggle');
	if (themeToggle) {
		themeToggle.innerHTML = theme === 'dark' ? '☀️' : '🌙';
		themeToggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
	}
}

// ===== CART MANAGEMENT =====
let cart = {};

function loadCart() {
	const savedCart = localStorage.getItem("cart");
	if (savedCart) {
		try {
			const parsed = JSON.parse(savedCart);
			cart = typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : {};
		} catch(error) {
			cart = {};
		}
	}
}

function saveCart() {
	localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(productId) {
	if (!cart[productId]) {
		cart[productId] = 1;
	} else {
		cart[productId]++;
	}
	saveCart();
	updateCartCount();
	updateCartModal();
	showNotification('Item added to cart!');
}

function removeFromCart(productId) {
	if (cart[productId]) {
		cart[productId]--;
		if (cart[productId] <= 0) {
			delete cart[productId];
		}
		saveCart();
		updateCartCount();
		updateCartModal();
	}
}

function deleteFromCart(productId) {
	delete cart[productId];
	saveCart();
	updateCartCount();
	updateCartModal();
}

function clearCart() {
	if (Object.keys(cart).length === 0) {
		showNotification('Cart is already empty!');
		return;
	}
	
	if (confirm("Are you sure you want to clear your cart?")) {
		cart = {};
		saveCart();
		updateCartCount();
		updateCartModal();
		showNotification('Cart cleared!');
	}
}

function updateCartCount() {
	const cartInfo = document.getElementById("cart-info");
	if (!cartInfo) return;
	
	const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
	cartInfo.textContent = totalItems;
}

function getCartTotal() {
	let total = 0;
	for (const [productId, quantity] of Object.entries(cart)) {
		const product = products.find(p => p.id === parseInt(productId));
		if (product) {
			total += product.price * quantity;
		}
	}
	return total;
}

function updateCartModal() {
	const cartItemsContainer = document.getElementById('cart-items');
	const cartTotalElement = document.getElementById('cart-total');
	const emptyCartMsg = document.getElementById('empty-cart-msg');
	
	if (!cartItemsContainer) return;
	
	const cartItems = Object.entries(cart);
	
	if (cartItems.length === 0) {
		if (emptyCartMsg) emptyCartMsg.style.display = 'block';
		cartItemsContainer.innerHTML = '';
		if (cartTotalElement) cartTotalElement.textContent = '$0.00';
		return;
	}
	
	if (emptyCartMsg) emptyCartMsg.style.display = 'none';
	
	cartItemsContainer.innerHTML = cartItems.map(([productId, quantity]) => {
		const product = products.find(p => p.id === parseInt(productId));
		if (!product) return '';
		
		const itemTotal = product.price * quantity;
		
		return `
			<div class="cart-item">
				<img src="${product.image}" alt="${product.title}">
				<div class="cart-item-info">
					<h4>${product.title}</h4>
					<p class="cart-item-price">$${product.price.toFixed(2)}</p>
				</div>
				<div class="cart-item-controls">
					<button class="cart-btn-sm" onclick="removeFromCart(${product.id})">-</button>
					<span class="cart-quantity">${quantity}</span>
					<button class="cart-btn-sm" onclick="addToCart(${product.id})">+</button>
				</div>
				<div class="cart-item-total">$${itemTotal.toFixed(2)}</div>
				<button class="cart-delete-btn" onclick="deleteFromCart(${product.id})">×</button>
			</div>
		`;
	}).join('');
	
	if (cartTotalElement) {
		cartTotalElement.textContent = `$${getCartTotal().toFixed(2)}`;
	}
}

function toggleCartModal() {
	const modal = document.getElementById('cart-modal');
	if (modal) {
		modal.classList.toggle('active');
		updateCartModal();
	}
}

// ===== NOTIFICATION SYSTEM =====
function showNotification(message) {
	const notification = document.createElement('div');
	notification.className = 'notification';
	notification.textContent = message;
	document.body.appendChild(notification);
	
	setTimeout(() => notification.classList.add('show'), 10);
	setTimeout(() => {
		notification.classList.remove('show');
		setTimeout(() => notification.remove(), 300);
	}, 2000);
}

// ===== PRODUCT RENDERING =====
function getPlatformIcon(product) {
	const platforms = [];
	if (product.pc_platform) platforms.push('PC');
	if (product.ps_platform) platforms.push('PS');
	if (product.xbox_platform) platforms.push('Xbox');
	return platforms.join(', ') || 'N/A';
}

function getFeedbackClass(feedback) {
	const lower = feedback.toLowerCase();
	if (lower.includes('overwhelmingly') || lower.includes('very positive')) {
		return 'positive';
	}
	if (lower.includes('mixed')) {
		return 'mixed';
	}
	return '';
}

function renderProducts(productsArray) {
	const productsContainer = document.getElementById("products-container");
	if (!productsContainer) return;
	
	productsContainer.innerHTML = "";

	if (productsArray.length === 0) {
		productsContainer.innerHTML = `
			<div class="no-results">
				<h3>😔 No products found</h3>
				<p>Try adjusting your filters</p>
			</div>
		`;
		return;
	}

	productsArray.forEach((product, index) => {
		const card = document.createElement("div");
		card.classList.add("product-card");
		card.style.animationDelay = `${index * 0.05}s`;

		let badgesHTML = '';
		if (product.discount > 0) {
			badgesHTML += `<span class="badge badge-discount">-${product.discount}%</span>`;
		}
		if (product.isTop) {
			badgesHTML += `<span class="badge badge-top">⭐ Top</span>`;
		}

		const priceDisplay = product.price === 0 ? 'FREE' : `$${product.price}`;
		const priceClass = product.price === 0 ? 'free' : '';

		card.innerHTML = `
			<div class="product-image-container">
				<img src="${product.image}" class="product-image" alt="${product.title}" loading="lazy">
				${badgesHTML ? `<div class="product-badges">${badgesHTML}</div>` : ''}
				<div class="platform-badge" title="${getPlatformIcon(product)}">
					🎮
				</div>
			</div>
			<div class="product-info">
				<div class="product-category">${product.category}</div>
				<h3>${product.title}</h3>
				<p class="product-description">${product.description}</p>
				<div class="product-meta">
					<span class="product-feedback ${getFeedbackClass(product.feedback)}">${product.feedback}</span>
					<span class="product-platforms">${getPlatformIcon(product)}</span>
				</div>
			</div>
			<div class="product-footer">
				<div class="product-price ${priceClass}">${priceDisplay}</div>
				<button class="add-to-basket-btn">Add to Cart</button>
			</div>
		`;

		card.addEventListener("click", (e) => {
			if (e.target.classList.contains('add-to-basket-btn')) return;
			window.location.href = `product.html?id=${product.id}`;
		});

		const addButton = card.querySelector(".add-to-basket-btn");
		addButton.addEventListener("click", (e) => {
			e.stopPropagation();
			addToCart(product.id);
		});

		productsContainer.appendChild(card);
	});
}

// ===== RECOMMENDED GAMES FOR HOMEPAGE =====
function renderRecommendedGames() {
	const recommendedContainer = document.getElementById('recommended-games');
	if (!recommendedContainer) return;
	
	// Get all top-rated games and shuffle them
	const topGames = products.filter(p => p.isTop);
	const shuffled = topGames.sort(() => 0.5 - Math.random());
	const selectedGames = shuffled.slice(0, 4);
	
	recommendedContainer.innerHTML = selectedGames.map(product => {
		const priceDisplay = product.price === 0 ? 'FREE' : `$${product.price}`;
		const priceClass = product.price === 0 ? 'free' : '';
		
		return `
			<div class="recommended-card" onclick="window.location.href='product.html?id=${product.id}'">
				<div class="recommended-image">
					<img src="${product.image}" alt="${product.title}" loading="lazy">
					${product.discount > 0 ? `<span class="badge badge-discount">-${product.discount}%</span>` : ''}
				</div>
				<div class="recommended-info">
					<h4>${product.title}</h4>
					<div class="recommended-footer">
						<span class="recommended-price ${priceClass}">${priceDisplay}</span>
						<button class="recommended-add-btn" onclick="event.stopPropagation(); addToCart(${product.id})">
							Add to Cart
						</button>
					</div>
				</div>
			</div>
		`;
	}).join('');
}

// ===== FILTER AND SORT =====
function filterAndRender() {
	const searchInput = document.getElementById("search-input");
	const categoryFilter = document.getElementById("category-filter");
	const minPriceInput = document.getElementById("min-price-input");
	const maxPriceInput = document.getElementById("max-price-input");
	const platformFilter = document.getElementById("platform-filter");
	const discountFilter = document.getElementById("discount-filter");
	const topFilter = document.getElementById("top-filter");
	const sortSelect = document.getElementById("sort-select");
	
	const searchText = searchInput ? searchInput.value.toLowerCase().trim() : '';
	const selectedCategory = categoryFilter ? categoryFilter.value : 'All';
	const minPrice = minPriceInput ? parseFloat(minPriceInput.value) || 0 : 0;
	const maxPrice = maxPriceInput ? parseFloat(maxPriceInput.value) || Infinity : Infinity;
	const selectedPlatform = platformFilter ? platformFilter.value : 'all';
	const onlyDiscount = discountFilter ? discountFilter.checked : false;
	const onlyTop = topFilter ? topFilter.checked : false;
	const sortBy = sortSelect ? sortSelect.value : 'default';

	let filteredProducts = products.filter(product => {
		const matchesText = searchText === "" || 
			product.title.toLowerCase().includes(searchText) || 
			product.description.toLowerCase().includes(searchText);

		const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
		const matchesMinPrice = product.price >= minPrice;
		const matchesMaxPrice = product.price <= maxPrice;

		let matchesPlatform = true;
		if (selectedPlatform === 'pc') matchesPlatform = product.pc_platform;
		else if (selectedPlatform === 'playstation') matchesPlatform = product.ps_platform;
		else if (selectedPlatform === 'xbox') matchesPlatform = product.xbox_platform;

		const matchesDiscount = !onlyDiscount || product.discount > 0;
		const matchesTop = !onlyTop || product.isTop;

		return matchesText && matchesCategory && matchesMinPrice && matchesMaxPrice && 
			   matchesPlatform && matchesDiscount && matchesTop;
	});

	switch(sortBy) {
		case 'price-low':
			filteredProducts.sort((a, b) => a.price - b.price);
			break;
		case 'price-high':
			filteredProducts.sort((a, b) => b.price - a.price);
			break;
		case 'name-asc':
			filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
			break;
		case 'name-desc':
			filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
			break;
		case 'newest':
			filteredProducts.sort((a, b) => parseInt(b.release_date) - parseInt(a.release_date));
			break;
	}

	renderProducts(filteredProducts);
	updateResultsInfo(filteredProducts.length);
}

function updateResultsInfo(count) {
	const resultsInfo = document.getElementById("results-info");
	if (!resultsInfo) return;
	
	if (count > 0) {
		resultsInfo.innerHTML = `Found <strong>${count}</strong> ${count === 1 ? 'product' : 'products'}`;
	} else {
		resultsInfo.textContent = "No products found";
	}
}

// ===== UTILITY FUNCTIONS =====
function debounce(func, wait) {
	let timeout;
	return function executedFunction(...args) {
		const later = () => {
			clearTimeout(timeout);
			func(...args);
		};
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
	};
}

// ===== EVENT LISTENERS =====
document.addEventListener('DOMContentLoaded', () => {
	// Initialize theme
	initTheme();
	
	// Theme toggle
	const themeToggle = document.getElementById('theme-toggle');
	if (themeToggle) {
		themeToggle.addEventListener('click', toggleTheme);
	}
	
	// Cart toggle
	const cartToggle = document.getElementById('cart-toggle');
	if (cartToggle) {
		cartToggle.addEventListener('click', toggleCartModal);
	}
	
	// Close cart modal
	const closeCartBtn = document.getElementById('close-cart');
	if (closeCartBtn) {
		closeCartBtn.addEventListener('click', toggleCartModal);
	}
	
	// Clear cart
	const clearCartBtn = document.getElementById("clear-cart-btn");
	if (clearCartBtn) {
		clearCartBtn.addEventListener("click", clearCart);
	}
	
	// Close modal when clicking outside
	const cartModal = document.getElementById('cart-modal');
	if (cartModal) {
		cartModal.addEventListener('click', (e) => {
			if (e.target === cartModal) {
				toggleCartModal();
			}
		});
	}
	
	// Filter listeners
	const searchInput = document.getElementById("search-input");
	const categoryFilter = document.getElementById("category-filter");
	const minPriceInput = document.getElementById("min-price-input");
	const maxPriceInput = document.getElementById("max-price-input");
	const platformFilter = document.getElementById("platform-filter");
	const discountFilter = document.getElementById("discount-filter");
	const topFilter = document.getElementById("top-filter");
	const sortSelect = document.getElementById("sort-select");
	
	if (searchInput) {
		searchInput.addEventListener("input", debounce(filterAndRender, 300));
	}
	
	if (categoryFilter) {
		categoryFilter.addEventListener("change", filterAndRender);
	}
	
	if (minPriceInput) {
		minPriceInput.addEventListener("input", debounce(filterAndRender, 500));
	}
	
	if (maxPriceInput) {
		maxPriceInput.addEventListener("input", debounce(filterAndRender, 500));
	}
	
	if (platformFilter) {
		platformFilter.addEventListener("change", filterAndRender);
	}
	
	if (discountFilter) {
		discountFilter.addEventListener("change", filterAndRender);
	}
	
	if (topFilter) {
		topFilter.addEventListener("change", filterAndRender);
	}
	
	if (sortSelect) {
		sortSelect.addEventListener("change", filterAndRender);
	}
	
	// Initialize
	loadCart();
	updateCartCount();
	
	// Render catalog products
	const productsContainer = document.getElementById("products-container");
	if (productsContainer) {
		filterAndRender();
	}
	
	// Render recommended games on homepage
	renderRecommendedGames();
	
	// Product detail page
	renderProductDetail();
	
	// Keyboard navigation for gallery (arrow keys)
	document.addEventListener('keydown', (e) => {
		if (document.getElementById('gallery-main-image')) {
			if (e.key === 'ArrowLeft') {
				changeGalleryImage(-1);
			} else if (e.key === 'ArrowRight') {
				changeGalleryImage(1);
			}
		}
	});
});

// ===== IMAGE GALLERY FUNCTIONS =====
let currentGalleryIndex = 0;
let currentGalleryImages = [];

function changeGalleryImage(direction) {
	if (!currentGalleryImages || currentGalleryImages.length === 0) return;
	
	currentGalleryIndex += direction;
	
	// Loop around
	if (currentGalleryIndex < 0) {
		currentGalleryIndex = currentGalleryImages.length - 1;
	} else if (currentGalleryIndex >= currentGalleryImages.length) {
		currentGalleryIndex = 0;
	}
	
	setGalleryImage(currentGalleryIndex);
}

function setGalleryImage(index) {
	if (!currentGalleryImages || currentGalleryImages.length === 0) return;
	
	currentGalleryIndex = index;
	const mainImage = document.getElementById('gallery-main-image');
	const thumbnails = document.querySelectorAll('.gallery-thumbnail');
	
	if (mainImage) {
		mainImage.src = currentGalleryImages[index];
	}
	
	thumbnails.forEach((thumb, i) => {
		if (i === index) {
			thumb.classList.add('active');
		} else {
			thumb.classList.remove('active');
		}
	});
}

// ===== PRODUCT DETAIL PAGE =====
function renderProductDetail() {
	const productDetails = document.getElementById("product-details");
	const crumbTitle = document.getElementById("crumb-title");

	if (!productDetails || !crumbTitle) return;

	const params = new URLSearchParams(window.location.search);
	const productId = Number(params.get("id"));
	const product = products.find(p => p.id === productId);

	if (!product) {
		productDetails.innerHTML = `
			<div style="text-align: center; padding: 60px;">
				<h2>😕 Product not found</h2>
				<p style="margin: 20px 0;">The product you're looking for doesn't exist.</p>
				<a href="catalog.html" class="btn-cat">Back to Catalog</a>
			</div>
		`;
		crumbTitle.textContent = "Not Found";
		return;
	}

	document.title = `GameNest – ${product.title}`;
	crumbTitle.textContent = product.title;

	const platforms = [];
	if (product.pc_platform) platforms.push("PC");
	if (product.ps_platform) platforms.push("PlayStation");
	if (product.xbox_platform) platforms.push("Xbox");
	const platformsHTML = platforms.map(p => `<span class="badge">${p}</span>`).join(" ");

	const discountHTML = product.discount > 0 ? 
		`<div class="discount-badge">-${product.discount}% OFF</div>` : "";

	const ageHTML = product.age_limit ? `${product.age_limit}+` : "All Ages";
	
	// Use images array if available, otherwise use single image repeated
	const productImages = product.images || [product.image, product.image, product.image];
	
	// Store images globally for navigation
	currentGalleryImages = productImages;
	currentGalleryIndex = 0;
	
	const galleryHTML = `
		<div class="product-gallery-container">
			<button class="gallery-arrow gallery-arrow-left" onclick="changeGalleryImage(-1)">‹</button>
			<div class="product-gallery">
				<img id="gallery-main-image" src="${productImages[0]}" alt="${product.title}">
			</div>
			<button class="gallery-arrow gallery-arrow-right" onclick="changeGalleryImage(1)">›</button>
			<div class="gallery-thumbnails">
				${productImages.map((img, index) => `
					<img src="${img}" 
						 alt="${product.title} ${index + 1}" 
						 class="gallery-thumbnail ${index === 0 ? 'active' : ''}"
						 onclick="setGalleryImage(${index})">
				`).join('')}
			</div>
		</div>
	`;

	productDetails.innerHTML = `
		<div class="product-title-mobile">
			<h1>${product.title}</h1>
			${discountHTML}
		</div>
		
		<div class="product-left">
			${galleryHTML}
			<div class="description-section">
				<h3>📖 Description</h3>
				<p class="description">${product.description}</p>
			</div>
		</div>

		<div class="product-right">
			<h1>${product.title}</h1>
			${discountHTML}

			<div class="info-section">
				<h3>🎮 Platforms</h3>
				<div class="product-meta">
					${platformsHTML || "<span>Not specified</span>"}
				</div>
			</div>

			<div class="info-section">
				<h3>ℹ️ Game Info</h3>
				<div class="game-info-vertical">
					<div><strong>Genre:</strong> ${product.category}</div>
					<div><strong>Age Rating:</strong> ${ageHTML}</div>
					<div><strong>Release Date:</strong> ${product.release_date}</div>
					<div><strong>Region:</strong> ${product.region}</div>
				</div>
			</div>

			<div class="info-section">
				<h3>⭐ Reviews</h3>
				<p class="product-feedback"><strong>User Feedback:</strong> ${product.feedback}</p>
			</div>

			<div class="purchase-box">
				<div class="price">${product.price === 0 ? 'FREE' : `$${product.price}`}</div>
				<button class="add-to-basket-btn" onclick="addToCart(${product.id})">Add to Cart</button>
			</div>
		</div>
	`;
}