const allProducts = [
  // Islamic Books
  {id: 1, name: "تفسير القران", price: 2800, category: "islamic", image: "images/tafseer.jfif"},
  {id: 2, name: "سيرة الرسل", price: 7600, category: "islamic", image: "images/seerah.jfif"},
  {id: 3, name: "علم التوحيد", price: 2000, category: "islamic", image: "images/kitabut-tawhid.webp"},
  {id: 4, name: "علم النحو", price: 5000, category: "islamic", image: "images/Nahw.jfif"},
  {id: 5, name: "علم الصرف", price: 1000, category: "islamic", image: "images/sarf.webp"}, 
  {id: 6, name: "علم التجوىد", price: 4500, category: "islamic", image: "images/tajweed-rules.webp"},

  // Audiobooks
  {id: 7, name: "Learn JavaScript (Audio)", price: 15000, category: "audiobooks", image: "images/ad1.jfif"},
  {id: 8, name: "Motivational Audio Book", price: 18000, category: "audiobooks", image: "images/motivate.webp"},
  {id: 9, name: "Learn Css (Audio)", price: 13000, category: "audiobooks", image: "images/ad2.jfif"},
  {id: 10, name: "Learn Vue js 2026 (Audio)", price: 18000, category: "audiobooks", image: "images/ad3.jfif"},
  {id: 11, name: "Learn C++ (Audio)", price: 19500, category: "audiobooks", image: "images/ad4.jfif"},
  {id: 12, name: "The adventures of Dora", price: 13000, category: "audiobooks", image: "images/ad5.jfif"},

  // Nigerian Authors
  {id: 13, name: "Things Fall Apart", price: 3800, category: "nigerian", image: "images/things fall apart.jpg"},
  {id: 14, name: "Half of a Yellow Sun", price: 4000, category: "nigerian", image: "images/half of a yellow.webp"},
  {id: 15, name: "Blessings", price: 2000, category: "nigerian", image: "images/blessings.jfif"},
  {id: 16, name: "Broken", price: 7000, category: "nigerian", image: "images/Broken.jfif"},

  // CodeHub Books
  {id: 17, name: "HTML & CSS Guide", price: 12500, category: "codehub", image: "images/html-css.webp"},
  {id: 18, name: "JavaScript Mastery", price: 11800, category: "codehub", image: "images/javascript.webp"}
];

const productsDiv = document.getElementById("products");
let currentCategory = "all";

function displayProducts(items) {
  productsDiv.innerHTML = "";
  items.forEach(product => {
    productsDiv.innerHTML += `
      <div class="product">
        <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null;this.src='images/placeholder.png';">
        <h3>${product.name}</h3>
        <p>₦${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `;
  });
}

function addToCart(id) {
  const product = allProducts.find(p => p.id === id);
  if(!product) return;
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const item = cart.find(i => i.id === id);
  if(item) item.qty++;
  else cart.push({...product, qty:1});
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} added to cart`);
}

function filterCategory(categoryName) {
  currentCategory = categoryName;
  const filtered = categoryName === "all" ? allProducts : allProducts.filter(p => p.category === categoryName);
  displayProducts(filtered);
}
