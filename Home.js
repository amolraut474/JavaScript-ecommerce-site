// Sample product data
const products = [
    {
    id: 1,
    name: "Fire Boltt Ninja 2",
    img: "./img/w-1.jpg",
    amt: 1599,
    seller: "Boltt Store",
    catagory: "Watch",
    Description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate numquam repudiandae sapiente error possimus iste ad repellat id quia minima?",
    },
    {
    id: 2,
    name: "Noise Pulse Go",
    img: "./img/Watch-2.jpg",
    amt: 1300,
    seller: "Noise Store",
    catagory: "Watch",
    Description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate numquam repudiandae sapiente error possimus iste ad repellat id quia minima?",
    },
    {
    id: 3,
    name: "boAt Xtend Pro",
    img: "./img/Watch-2.jpg",
    amt: 2799,
    seller: "Rajesh Watchs",
    catagory: "Watch",
    Description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate numquam repudiandae sapiente error possimus iste ad repellat id quia minima?",
    },
    {
    id: 4,
    name: "Lenovo Tab M8",
    img: "./img/Tablets-1.jpg",
    amt: 9270,
    seller: "Stonehenge Retail",
    catagory: "Tablets",
    Description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate numquam repudiandae sapiente error possimus iste ad repellat id quia minima?",
    },
    {
    id: 5,
    name: "Honor PAD X8",
    img: "./img/Tablets-2.jpg",
    amt: 12999,
    seller: "Honor india",
    catagory: "Tablets",
    Description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate numquam repudiandae sapiente error possimus iste ad repellat id quia minima?",
    },
    {
    id: 6,
    name: "IKALL N9 ",
    img: "./img/Tablets-3.jpg",
    amt: 3999,
    seller: "IKALL Store",
    catagory: "Tablets",
    Description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate numquam repudiandae sapiente error possimus iste ad repellat id quia minima?",
    },
    {
    id: 7,
    name: "Oppo Pad Air",
    img: "./img/Tablets-4.jpg",
    amt: 15999,
    seller: "Oppo Store",
    catagory: "Tablets",
    Description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate numquam repudiandae sapiente error possimus iste ad repellat id quia minima?",
    },
    {
    id: 8,
    name: "Acer EK220Q",
    img: "./img/Monitors-1.jpg",
    amt: 6249,
    seller: "Accer Store",
    catagory: "Monitors",
    Description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate numquam repudiandae sapiente error possimus iste ad repellat id quia minima?",
    },
    {
    id: 9,
    name: "Samsung 24",
    img: "./img/Monitors-2.jpg",
    amt: 9799,
    seller: "Samsung Store",
    catagory: "Monitors",
    Description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate numquam repudiandae sapiente error possimus iste ad repellat id quia minima?",
    },
    {
    id: 10,
    name: "ZEBRONICS AC32FHD ",
    img: "./img/Monitors-3.jpg",
    amt: 12799,
    seller: "ZEBRONICS Store",
    catagory: "Monitors",
    Description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate numquam repudiandae sapiente error possimus iste ad repellat id quia minima?",
    },
    {
    id: 11,
    name: "Samsung",
    img: " ./img/samsang.webp",
    amt: 35000,
    seller: "Samsung Store",
    catagory: "Mobile",
    Description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate numquam repudiandae sapiente error possimus iste ad repellat id quia minima?",
    },
    {
    id: 12,
    name: "One pluse",
    img: "./img/mobile.jpg",
    amt: 25000,
    seller: "Samsung Store",
    catagory: "Mobile",
    Description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate numquam repudiandae sapiente error possimus iste ad repellat id quia minima?",
    },
    {
    id: 12,
    name: "Apple",
    img: "./img/apple.webp",
    amt: 100000,
    seller: "Samsung Store",
    catagory: "Mobile",
    Description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate numquam repudiandae sapiente error possimus iste ad repellat id quia minima?",
    },
    ];
    // Function to generate product list dynamically
    const cartItemsList = document.getElementById('cart-items');
    const cartPopup = document.getElementById('cart-popup');
    let currentProduct;
    let quantity = 1;
    function generateProductList() {
    const productListDiv = document.getElementById('productList');
    products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('productContainer');
    productDiv.innerHTML = `
    <img src="${product.img}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p> ${product.amt}</p>
    <p> ${product.seller}</p>
    <p> ${product.catagory}</p>
    <button class="quickViewBtn" onclick="showProduct(${product.id})">Quick View</button>
    `;
    productListDiv.appendChild(productDiv);
    });
    }
    // Function to show single product page in a modal
    function showProduct(productId) {
    const product = products.find(p => p.id === productId);
    const modal = document.getElementById('productModal');
    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = `
    <div class="single-main-div">
       <div class="img-box">
          <img src="${product.img}" alt="${product.name}">
       </div>
       <div class="img-content">
          <h3>${product.name}</h3>
          <p> ${product.Description}</p>
          <p> <span class="atri">Seller:</span> ${product.seller}</p>
          <p><span class="atri"> Catagory:</span>${product.catagory}</p>
          <p></p>
          Order in the next <span class="atri-2">3 hours 33 minutes</span></p>
          <p class="garrnty"><img src="./img/single-img.png" alt=""></p>
          <p class="amt"> ${product.amt}</p>
          <div class="Add-to-cart-div">
             <!-- Add more product details as needed -->
             <div class="quantity-btn">
                <label for="quantity" class="atri">Quantity:</label>
                <button onclick="decrementQuantity()">-</button>
                <span id="quantity">${quantity}</span>
                <button onclick="incrementQuantity()">+</button>
             </div>
             <button onclick="addToCart(currentProduct)" class="add-to-cart">Add to Cart</button>
          </div>
       </div>
    </div>
    `;
    modal.style.display = 'block';
    }
    // Function to close the modal
    function closeModal() {
    const modal = document.getElementById('productModal');
    modal.style.display = 'none';
    }
    function decrementQuantity() {
    if (quantity > 1) {
    quantity--;
    updateQuantityDisplay();
    }
    }
    function incrementQuantity() {
    quantity++;
    updateQuantityDisplay();
    }
    function updateQuantityDisplay() {
    document.getElementById('quantity').textContent = quantity;
    }
    function goToProductList() {
    singleProductPage.style.display = 'none';
    }
    function addToCart(product) {
    const cartItem = document.createElement('li');
    // cartItem.textContent = `${product.img}-${product.name} - $${product.amt} x ${quantity}`;
    cartItem.innerHTML = `
    <img src="${product.img}" alt="${product.name}">${product.name} - $${product.amt} x ${quantity}`;
    cartItemsList.appendChild(cartItem);
    }
    function openCart() {
    cartPopup.style.display = 'block';
    }
    function closeCart() {
    cartPopup.style.display = 'none';
    }
    // Call the function to generate the initial product list
    generateProductList();