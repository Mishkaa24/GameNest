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
		discount: false,
		isTop: true,
		feedback: "Mostly Positive",
		description: "A fast, competitive shooter where every round demands precision and strategy.",
		age_limit: 18,
		image: "images/cs2.jpg",
		OS_windows: true,
		OS_macos: false,
		OS_lunix: false,
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
		discount: false,
		isTop: true,
		feedback: "Very positive",
		description: "A creative sandbox world where you can build, explore, and survive however you want.",
		age_limit: false,
		image: "images/minecraft.png",
		OS_windows: true,
		OS_macos: true,
		OS_lunix: true,
		region: "World-Wide",
		release_date: "2011",
	},
	{
		id: 3,
		title: 'Fortnite, Battle Pass',
		price: '15',
		category: 'Game Pass',
		pc_platform: true,
		ps_platform: true,
		xbox_platform: true,
		inStock: true,
		discount: false,
		isTop: false,
		feedback: "Mostly positive",
		description: "A fast-paced battle royale where you fight, build, and outlast 100 players.",
		age_limit: 12,
		image: "images/fortnite.jpg",
		OS_windows: true,
		OS_macos: false,
		OS_lunix: false,
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
		discount: true,
		isTop: true,
		feedback: "Overwhelmingly positive",
		description: "A huge open world full of action, crime, and endless ways to explore Los Santos.",
		age_limit: 18,
		image: "images/gta5.avif",
		OS_windows: true,
		OS_macos: false,
		OS_lunix: false,
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
		discount: true,
		isTop: true,
		feedback: "Overwhelmingly positive",
		description: "A story-rich RPG with deep combat, a massive world, and unforgettable quests.",
		age_limit: 18,
		image: "images/witcher3.jpg",
		OS_windows: true,
		OS_macos: true,
		OS_lunix: false,
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
		discount: false,
		isTop: false,
		feedback: "Mixed",
		description: "A realistic football experience with new animations and improved gameplay.",
		age_limit: 3,
		image: "images/ff24.jpg",
		OS_windows: true,
		OS_macos: false,
		OS_lunix: false,
		region: "World-Wide",
		release_date: "2023",
	},
	{
		id: 7,
		title: 'Roblox, 1000 Robux',
		price: 0,
		category: 'V-Currency',
		pc_platform: true,
		ps_platform: true,
		xbox_platform: true,
		inStock: true,
		discount: false,
		isTop: false,
		feedback: "Very positive",
		description: "A massive online universe where you can play, create, and share thousands of games.",
		age_limit: 10,
		image: "images/roblox.jpg",
		OS_windows: true,
		OS_macos: true,
		OS_lunix: false,
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
		discount: false,
		isTop: true,
		feedback: "Overwhelmingly positive",
		description: "A challenging action RPG set in a dark fantasy world full of powerful enemies.",
		age_limit: 16,
		image: "images/elder-ring.jpg",
		OS_windows: true,
		OS_macos: false,
		OS_lunix: false,
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
		discount: true,
		isTop: false,
		feedback: "Mostly positive",
		description: "A futuristic open-world RPG filled with choices, fast combat, and a deep story.",
		age_limit: 18,
		image: "images/cyber.avif",
		OS_windows: true,
		OS_macos: false,
		OS_lunix: false,
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
		discount: false,
		isTop: false,
		feedback: "Very positive",
		description: "A tactical 5v5 shooter focused on accuracy, teamwork, and unique agent abilities.",
		age_limit: 16,
		image: "images/valorant.jpg",
		OS_windows: true,
		OS_macos: false,
		OS_lunix: false,
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
		discount: false,
		isTop: true,
		feedback: "Overwhelmingly positive",
		description: "A cinematic open-world western with a deep story and incredibly detailed world.",
		age_limit: 18,
		image: "images/red-dead-redemption-2r.jpg",
		OS_windows: true,
		OS_macos: false,
		OS_lunix: false,
		region: "World-Wide",
		release_date: "2018",
	},
	{
		id: 12,
		title: 'Terraria',
		price: 10,
		category: 'Sandbox',
		pc_platform: true,
		ps_platform: true,
		xbox_platform: true,
		inStock: true,
		discount: false,
		isTop: false,
		feedback: "Overwhelmingly positive",
		description: "A 2D adventure sandbox with crafting, bosses, and endless exploration.",
		age_limit: 12,
		image: "images/Terraria.jpg",
		OS_windows: true,
		OS_macos: true,
		OS_lunix: true,
		region: "World-Wide",
		release_date: "2011",
	},
];



let cart = [];
const cartInfo = document.getElementById("cart-info");
const productsContainer = document.getElementById("products-container");

const searchInput = document.getElementById("search-input");
const categoryFilter = document.getElementById("category-filter");

const minPriceInput = document.getElementById("min-price-input");




// reading of Local storage 
function loadCart(){
	const savedCart = localStorage.getItem("cart");
	if (savedCart) {
		try {
			const parsed = JSON.parse(savedCart);
			if (Array.isArray(parsed)){
				cart = parsed;
			} else {
				cart = []
			}
		} catch(error) {
			cart = [];
		}
	} else {
		cart = [];
	}
}


// Saving to local Storage
function savedCart(){
	localStorage.setItem('cart', JSON.stringify(cart));
}


// Updating products for cart
function updateCartCount() {
	cartInfo.textContent = `Products in cart: ${cart.length}`;
}



function renderProducts(productsArray){
// function to show card for the games
productsArray.forEach(function (product){
	const card = document.createElement("div");
	card.classList.add("product-card");


	// creating HTML for the card
	card.innerHTML = `
		<img src="${product.image}" alt="${product.title}" class="product-image">
            <h3>${product.title}</h3>
		<p class="product-category">Category: ${product.category}</p>
		<p class="product-description">Description: ${product.description}</p>
		<p class="product-feedback">Feedback: ${product.feedback}</p>
		<p class="product-price">Price: $${product.price}</p>
		<button class="add-to-basket-btn">Add to Basket</button>
	`;

	const addButton = card.querySelector(".add-to-basket-btn");
	addButton.addEventListener("click", function(){
		cart.push(product.id);
		savedCart();
		updateCartCount();
		console.log(`Numbers of items in cart: ${cart}`);
	})

	productsContainer.appendChild(card);
});
}


// clear cart btn homework----------------------------------------
const clearCartBtn = document.getElementById("clear-cart-btn");
function clearCart() {
	cart = [];
	localStorage.removeItem("cart");
	updateCartCount();
}
clearCartBtn.addEventListener("click", clearCart);
// ----------------------------------------------------------------


// Function for search and filter of products(cards)
function filterAndRender(){
	const searchText = searchInput.value.toLowerCase().trim();
	const selectedCategory = categoryFilter.value;

	const minPriceValue = minPriceInput.value;

	//Function for filtering products
	const filteredProducts = products.filter(function(product){
		const title = product.title.toLowerCase();
		const description = product.description.toLowerCase();
		const matchesText = searchText === "" || title.includes(searchText) || description.includes(searchText);
		const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;

		const matchesMinPrice = minPriceValue === "" || Number(product.price) >= Number(minPriceValue);

		return matchesText && matchesCategory && matchesMinPrice;
	});
	productsContainer.innerHTML = "";
	renderProducts(filteredProducts);
	updateResultsInfo(filteredProducts.length);
}



const resultsInfo = document.getElementById("results-info");

function updateResultsInfo(count) {
	if (count > 0) {
		resultsInfo.textContent = `Found products: ${count}`;
	} else {
		resultsInfo.textContent = "No products found for your request.";
	}
}





	
loadCart();
updateCartCount();
filterAndRender();

searchInput.addEventListener("input", filterAndRender);
categoryFilter.addEventListener("change", filterAndRender);

minPriceInput.addEventListener("input", filterAndRender);



