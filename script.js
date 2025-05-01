const url = 'https://real-time-amazon-data.p.rapidapi.com/products-by-category?category_id=2478868012&page=1&country=US&sort_by=RELEVANCE&product_condition=ALL&is_prime=false&deals_and_discounts=NONE';

const data=
    [
      
        
        {
          "asin": "B00KDSGIPK",
          "product_title": "Pluto TV - Watch Free Movies, Shows &amp; Live TV",
          "product_price": "$0.00",
          "product_original_price": null,
          "currency": "USD",
          "product_star_rating": "4.2",
          "product_num_ratings": 788314,
          "book_format": "App",
          "product_url": "https://www.amazon.com/dp/B00KDSGIPK",
          "product_photo": "https://m.media-amazon.com/images/I/41-BIhPLNdL._AC_UL960_FMwebp_QL65_.png",
          "product_num_offers": 1,
          "product_minimum_offer_price": "$0.00",
          "is_best_seller": false,
          "is_amazon_choice": false,
          "is_prime": false,
          "climate_pledge_friendly": false,
          "sales_volume": null,
          "delivery": "Available instantly on compatible devices",
          "has_variations": false,
          "product_byline": "May 18, 2014"
        },
        {
          "asin": "B017250D16",
          "product_title": "Paramount+",
          "product_price": "$0.00",
          "product_original_price": null,
          "currency": "USD",
          "product_star_rating": "3.7",
          "product_num_ratings": 417322,
          "book_format": "App",
          "product_url": "https://www.amazon.com/dp/B017250D16",
          "product_photo": "https://m.media-amazon.com/images/I/31UpyS76j+L._AC_UL960_FMwebp_QL65_.png",
          "product_num_offers": 1,
          "product_minimum_offer_price": "$0.00",
          "is_best_seller": false,
          "is_amazon_choice": false,
          "is_prime": false,
          "climate_pledge_friendly": false,
          "sales_volume": null,
          "delivery": "Available instantly on compatible devices",
          "has_variations": false,
          "product_byline": "Oct 23, 2015"
        },
        {
          "asin": "B01N0BP507",
          "product_title": "Downloader",
          "product_price": "$0.00",
          "product_original_price": null,
          "currency": "USD",
          "product_star_rating": "4.2",
          "product_num_ratings": 669260,
          "book_format": "App",
          "product_url": "https://www.amazon.com/dp/B01N0BP507",
          "product_photo": "https://m.media-amazon.com/images/I/31KVvZnHbuL._AC_UL960_FMwebp_QL65_.png",
          "product_num_offers": 1,
          "product_minimum_offer_price": "$0.00",
          "is_best_seller": false,
          "is_amazon_choice": false,
          "is_prime": false,
          "climate_pledge_friendly": false,
          "sales_volume": null,
          "delivery": "Available instantly on compatible devices",
          "has_variations": false,
          "product_byline": "Nov 11, 2016"
        },
        {
          "asin": "B0CWXNS552",
          "product_title": "Apple AirTag",
          "product_price": "$24.95",
          "product_original_price": "$29.00",
          "currency": "USD",
          "product_star_rating": "4.6",
          "product_num_ratings": 27815,
          "product_url": "https://www.amazon.com/dp/B0CWXNS552",
          "product_photo": "https://m.media-amazon.com/images/I/71rP7f78eFL._AC_UL960_FMwebp_QL65_.jpg",
          "product_num_offers": 5,
          "product_minimum_offer_price": "$24.20",
          "is_best_seller": true,
          "is_amazon_choice": false,
          "is_prime": true,
          "climate_pledge_friendly": false,
          "sales_volume": "10K+ bought in past month",
          "delivery": "FREE delivery Tue, May 6 on $35 of items shipped by AmazonOr fastest delivery Today 1 PM - 6 PM",
          "has_variations": false,
          "product_badge": "Best Seller"
        },
        {
          "asin": "B00XZFCVK4",
          "product_title": "Max",
          "product_price": "$0.00",
          "product_original_price": null,
          "currency": "USD",
          "product_star_rating": "4.2",
          "product_num_ratings": 385869,
          "book_format": "App",
          "product_url": "https://www.amazon.com/dp/B00XZFCVK4",
          "product_photo": "https://m.media-amazon.com/images/I/71cMR5sn5cL._AC_UL960_FMwebp_QL65_.png",
          "product_num_offers": 1,
          "product_minimum_offer_price": "$0.00",
          "is_best_seller": false,
          "is_amazon_choice": false,
          "is_prime": false,
          "climate_pledge_friendly": false,
          "sales_volume": null,
          "delivery": "Available instantly on compatible devices",
          "has_variations": false,
          "product_byline": "Jul 16, 2015"
        },
        {
          "asin": "B0D6NSD57S",
          "product_title": "Sunrise on the Reaping: A Hunger Games Novel",
          "product_price": "$0.00",
          "product_original_price": "$23.39",
          "currency": "USD",
          "product_star_rating": "4.8",
          "product_num_ratings": 40199,
          "book_format": "Audible Audiobook",
          "product_url": "https://www.amazon.com/dp/B0D6NSD57S",
          "product_photo": "https://m.media-amazon.com/images/I/71U+8N5eRML._AC_UL960_FMwebp_QL65_.jpg",
          "product_num_offers": 1,
          "product_minimum_offer_price": "$0.00",
          "is_best_seller": true,
          "is_amazon_choice": false,
          "is_prime": false,
          "climate_pledge_friendly": false,
          "sales_volume": null,
          "delivery": "Available instantly",
          "has_variations": false,
          "product_badge": "Best Seller"
        },
       
       
      ]


const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'ad3ebb1755msh2648dcbf99784f3p1829f2jsn74ecbe58d794', // Replace this with environment variable in production
        'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
    }
};

async function getProductData() {
    try {
        // const response = await fetch(url, options);
        // const data = await response.json();
        let products = data; 
        // console.log("products", products);
        products.forEach(product => {
            console.log(`Product Title: ${product.product_title}`);
            console.log(`Product Price: ${product.product_price}`);
            console.log(`Product Photo: ${product.product_photo}`);
            // console.log('--------------------------');
            addToDOM(product.product_title, product.product_price, product.product_photo);
        });
      
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

getProductData();

function addToDOM(title, price, photo) {
  const productContainer = document.querySelector('.product-container');
  const productDiv = document.createElement('div');
  productDiv.className = 'product';
  productDiv.innerHTML = `
      

      <div class="product-card">
      <input type="hidden" name="" class="product-id" value="1">
      <img class="product-img"  src="${photo}" alt="Product 1">
      <div class="overlay-icons">
              <span class="icon">🛒</span>
              <span class="icon">❤️</span>
              <span class="icon">🔍</span>
          </div>
      <h3 class="product-name">${title}</h3>
      <h3 class="product-quantity"></h3>
      <p class="product-price">${price}</p>
      <button class="cart-btn">Add to Cart</button>
  `;
  productContainer.appendChild(productDiv);
}


let cartItems = document.querySelector('.cart-items');
let cartCounter = document.querySelector(".cart-count");
let btnCart = document.querySelectorAll('.cart-btn');
let totalCount = document.querySelector('.cart-count');
let totalCost = document.querySelector('.total-Cost');

let cartDom = loadCartFromLocalStorage();

// Toggle cart visibility
cartCounter.addEventListener('click', () => {
    cartItems.classList.toggle('active');
});

// Display initial cart items
cartDom.forEach(product => addItemToTheDom(product));
calculateTotal();

// Add to cart button functionality
btnCart.forEach(btn => {
    btn.addEventListener('click', () => {
        let parentElement = btn.parentElement;

        const product = {
            id: parentElement.querySelector('.product-id').value,
            name: parentElement.querySelector('.product-name').innerText,
            image: parentElement.querySelector('.product-img').getAttribute('src'),
            price: parseFloat(parentElement.querySelector('.product-price').innerText.replace("$", "")),
            quantity: 1,
        };

        let isCart = cartDom.some(item => item.id === product.id);

        if (!isCart) {
            addItemToTheDom(product);
            cartDom.push(product);
            saveCartToLocalStorage();
            calculateTotal();
        } else {
            alert(`Product "${product.name}" is already in the cart!`);
        }
    });
});

// Add item to DOM
function addItemToTheDom(product) {
    cartItems.insertAdjacentHTML("afterbegin", `
        <div class="cart-item">
            <input type="hidden" class="product-id" value="${product.id}">
            <img src="${product.image}" alt="">
            <h3 class="product-name">${product.name}</h3>
            <a href="#" class="btn-small" action="decrease">&minus;</a>
            <h3 class="product-quantity">${product.quantity}</h3>
            <a href="#" class="btn-small" action="increase">&plus;</a>
            <span class="product-price">$${product.price.toFixed(2)}</span>
            <a href="#" class="btn-small btn-remove" action="remove">&times;</a>
        </div>
    `);

    addCartActions(product);
}

// Calculate total
function calculateTotal() {
    let total = 0;
    cartDom.forEach(item => {
        total += item.quantity * item.price;
    });
    totalCount.innerText = cartDom.length; // Total unique products
    totalCost.innerText = `$${total.toFixed(2)}`; // Total cost
}

// Add cart actions
function addCartActions(product) {
    const cartItem = document.querySelector(`.cart-item input[value="${product.id}"]`).parentElement;

    // Increase quantity
    cartItem.querySelector("[action='increase']").addEventListener("click", () => {
        cartDom.forEach(cartProduct => {
            if (cartProduct.id === product.id) {
                cartItem.querySelector(".product-quantity").innerText = ++cartProduct.quantity;
                saveCartToLocalStorage();
                calculateTotal();
            }
        });
    });

    // Decrease quantity
    cartItem.querySelector("[action='decrease']").addEventListener("click", () => {
        cartDom.forEach((cartProduct, index) => {
            if (cartProduct.id === product.id) {
                if (cartProduct.quantity > 1) {
                    cartProduct.quantity--;
                    cartItem.querySelector(".product-quantity").innerText = cartProduct.quantity;
                } else {
                    cartDom.splice(index, 1);
                    cartItem.remove();
                }
                saveCartToLocalStorage();
                calculateTotal();
            }
        });
    });

    // Remove item
    cartItem.querySelector("[action='remove']").addEventListener("click", () => {
        cartDom = cartDom.filter(cartProduct => cartProduct.id !== product.id);
        cartItem.remove();
        saveCartToLocalStorage();
        calculateTotal();
    });
}

// Save cart to Local Storage
function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cartDom));
}

// Load cart from Local Storage
function loadCartFromLocalStorage() {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
}