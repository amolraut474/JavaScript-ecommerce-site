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
const productList = document.getElementById('product-list');
const productPage = document.getElementById('product-page');
let currentProduct;
products.forEach(product => {
const productItem = document.createElement('div');
productItem.className = 'product-item';
productItem.innerHTML = `
<img src="${product.img}" alt="${product.name}">
<h3>${product.name}</h3>
<p> ${product.amt}</p>
<p> ${product.seller}</p>
<p> ${product.catagory}</p>
`;
productItem.onclick = function () {
openProductPage(product);
};
productList.appendChild(productItem);
});
function openProductPage(product) {
currentProduct = product;
productList.style.display = 'none';
productPage.style.display = 'block';
productPage.innerHTML = `
<div class="single-main-div">
   <div cass="img-box">
      <img src="${product.img}" alt="${product.name}">
   </div>
   <div cass="img-content">
      <h3>${product.name}</h3>
      <p class="amt"> ${product.amt}</p>
      <p> ${product.Description}</p>
      <p> <span class="atri">Seller:</span> ${product.seller}</p>
      <p><span class="atri"> Catagory:</span>${product.catagory}</p>
      <p></p>
      Order in the next <span class="atri-2">3 hours 33 minutes</span></p>
      <p class="garrnty"><img src="./img/single-img.png" alt=""></p>
      <button onclick="goToProductList()" class="back-to-shop">Back to Product List</button>
   </div>
</div>
`;
}
function goToProductList() {
productList.style.display = 'flex';
productPage.style.display = 'none';
}
