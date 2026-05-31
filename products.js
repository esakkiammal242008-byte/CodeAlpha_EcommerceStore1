const products = [
{
id:1,
name:"Laptop",
price:50000,
rating:4.8,
stock:20,
category:"Electronics",
discount:"10% OFF",
image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500"
},
{
id:2,
name:"Smart Phone",
price:25000,
rating:4.7,
stock:15,
category:"Mobiles",
discount:"15% OFF",
image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500"
},
{
id:3,
name:"Headphones",
price:3000,
rating:4.6,
stock:30,
category:"Audio",
discount:"20% OFF",
image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
},
{
id:4,
name:"Smart Watch",
price:5000,
rating:4.5,
stock:25,
category:"Wearables",
discount:"12% OFF",
image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
},
{
id:5,
name:"Gaming Mouse",
price:1500,
rating:4.4,
stock:40,
category:"Accessories",
discount:"8% OFF",
image:"https://images.unsplash.com/photo-1527814050087-3793815479db?w=500"
},
{
id:6,
name:"Mechanical Keyboard",
price:3500,
rating:4.9,
stock:18,
category:"Accessories",
discount:"18% OFF",
image:"https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500"
},
{
id:7,
name:"Bluetooth Speaker",
price:2200,
rating:4.5,
stock:22,
category:"Audio",
discount:"10% OFF",
image:"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500"
},
{
id:8,
name:"Tablet",
price:18000,
rating:4.6,
stock:10,
category:"Electronics",
discount:"14% OFF",
image:"https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500"
},
{
id:9,
name:"DSLR Camera",
price:45000,
rating:4.8,
stock:8,
category:"Camera",
discount:"25% OFF",
image:"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500"
},
{
id:10,
name:"Power Bank",
price:1200,
rating:4.4,
stock:35,
category:"Accessories",
discount:"5% OFF",
image:"https://images.unsplash.com/photo-1609592806787-3d9e4e92a9d6?w=500"
},
{
id:11,
name:"Monitor",
price:12000,
rating:4.7,
stock:12,
category:"Electronics",
discount:"10% OFF",
image:"https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500"
},
{
id:12,
name:"Printer",
price:8000,
rating:4.3,
stock:9,
category:"Office",
discount:"7% OFF",
image:"https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=500"
}
];

const productContainer =
document.getElementById("products");

function displayProducts(productList){

productContainer.innerHTML = "";

productList.forEach(product=>{

productContainer.innerHTML += `

<div class="card">

<div class="discount-badge">
${product.discount}
</div>

<img src="${product.image}" alt="${product.name}">

<h3>${product.name}</h3>

<p><strong>Category:</strong>
${product.category}</p>

<p>⭐ ${product.rating}</p>

<p><strong>Stock:</strong>
${product.stock}</p>

<h2>₹${product.price}</h2>

<button onclick="addToCart(${product.id})">
Add To Cart
</button>

</div>

`;

});

}

displayProducts(products);

function addToCart(id){

const product =
products.find(item => item.id === id);

let cart =
JSON.parse(localStorage.getItem("cart")) || [];

cart.push(product);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

alert(`${product.name} added to cart!`);

}

const searchBox =
document.getElementById("search");

if(searchBox){

searchBox.addEventListener("keyup",function(){

const value =
this.value.toLowerCase();

const filteredProducts =
products.filter(product =>
product.name.toLowerCase().includes(value) ||
product.category.toLowerCase().includes(value)
);

displayProducts(filteredProducts);

});

}