const products = [
    {
    id: 1,
    name: "Fire Boltt Ninja 2",
    img: "https://m.media-amazon.com/images/I/617eiZeFtNL._SL1500_.jpg",
    amt: 1599,
    seller: "Boltt Store",
    catagory: "Watch",
    },
    {
    id: 2,
    name: "Noise Pulse Go",
    img: "https://m.media-amazon.com/images/I/61akt30bJsL._SL1500_.jpg",
    amt: 1300,
    seller: "Noise Store",
    catagory: "Watch",
    },
    {
    id: 3,
    name: "boAt Xtend Pro",
    img: "https://m.media-amazon.com/images/I/61ZuL8CUigL._SL1500_.jpg",
    amt: 2799,
    seller: "Rajesh Watchs",
    catagory: "Watch",
    },
    {
    id: 4,
    name: "Lenovo Tab M8",
    img: "https://m.media-amazon.com/images/I/71SvqTFPXJL._SL1500_.jpg",
    amt: 9270,
    seller: "Stonehenge Retail",
    catagory: "Tablets",
    },
    {
    id: 5,
    name: "Honor PAD X8",
    img: "https://m.media-amazon.com/images/I/710G-VKcgtL._SL1500_.jpg",
    amt: 12999,
    seller: "Honor india",
    catagory: "Tablets",
    },
    {
    id: 6,
    name: "IKALL N9 ",
    img: "https://m.media-amazon.com/images/I/7185GL6hPlL._SL1500_.jpg",
    amt: 3999,
    seller: "IKALL Store",
    catagory: "Tablets",
    },
    {
    id: 7,
    name: "Oppo Pad Air",
    img: "https://m.media-amazon.com/images/I/513FD4w8hGL._SL1500_.jpg",
    amt: 15999,
    seller: "Oppo Store",
    catagory: "Tablets",
    },
    {
    id: 8,
    name: "Acer EK220Q",
    img: "https://m.media-amazon.com/images/I/8150iUXkc5L._SL1500_.jpg",
    amt: 6249,
    seller: "Accer Store",
    catagory: "Monitors",
    },
    {
    id: 9,
    name: "Samsung 24",
    img: "https://m.media-amazon.com/images/I/81TjRLHaz1L._SL1500_.jpg",
    amt: 9799,
    seller: "Samsung Store",
    catagory: "Monitors",
    },
    {
    id: 10,
    name: "ZEBRONICS AC32FHD ",
    img: "https://m.media-amazon.com/images/I/813Y1TIZwfL._SL1500_.jpg",
    amt: 12799,
    seller: "ZEBRONICS Store",
    catagory: "Monitors",
    },
    {
    id: 11,
    name: "Samsung",
    img: " ./img/samsang.webp",
    amt: 35000,
    seller: "Samsung Store",
    catagory: "Mobile",
    },
    {
    id: 12,
    name: "One pluse",
    img: "./img/mobile.jpg",
    amt: 25000,
    seller: "Samsung Store",
    catagory: "Mobile",
    },
    {
    id: 12,
    name: "Apple",
    img: "./img/apple.webp",
    amt: 100000,
    seller: "Samsung Store",
    catagory: "Mobile",
    },
    ];
    // Function to display product list dynamically
    function displayProductList() {
    const productListContainer = document.getElementById('product-list');
    products.forEach(product => {
    const productItem = document.createElement('div');
    productItem.classList.add('product-item');
    productItem.innerHTML = `
    <h3>${product.name}</h3>
    <img src="${product.img}" alt="${product.name}">
    <p> ${product.amt}</p>
    <p> ${product.seller}</p>
    <p> ${product.catagory}</p>
    `;
    productItem.addEventListener('click', () => displaySingleProduct(product));
    productListContainer.appendChild(productItem);
    });
    }
    // Function to display single product dynamically
    function displaySingleProduct(product) {
    const singleProductContainer = document.getElementById('single-product-container');
    const productListContainer = document.getElementById('product-list');
    // Create HTML elements for single product details
    const singleProductHTML = `
    <h3>${product.name}</h3>
    <img src="${product.img}" alt="${product.name}">
    <p> ${product.amt}</p>
    <p> ${product.seller}</p>
    <p> ${product.catagory}</p>
    `;
    // Hide product list and display single product
    productListContainer.style.display = 'none';
    singleProductContainer.style.display = 'block';
    singleProductContainer.innerHTML = singleProductHTML;
    }
    // Call the function to display the product list on page load
    displayProductList();