let cart = [];

function addToCart(itemName, imageUrl) {
  cart.push({ name: itemName, image: imageUrl });
  renderCart();
}

function renderCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="cart-item-info">
        <img src="${item.image}" alt="${item.name}" style="width:40px;height:40px;border-radius:8px;">
        <span>${item.name}</span>
      </span>
      <button onclick="removeFromCart(${index})">&times;</button>
    `;
    cartItems.appendChild(li);
  });
  document.getElementById('cart-count').textContent = cart.length;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}

  // Add Buy Now button below the items
  let buyNowBtn = document.getElementById('buy-now-btn');
  if (!buyNowBtn) {
    buyNowBtn = document.createElement('button');
    buyNowBtn.id = 'buy-now-btn';
    buyNowBtn.textContent = 'Buy Now';
    buyNowBtn.onclick = buyNow;
    // Insert after the cart items list
    cartItems.parentNode.insertBefore(buyNowBtn, cartItems.nextSibling);
  }
  buyNowBtn.style.display = cart.length ? 'block' : 'none';

  document.getElementById('cart-count').textContent = cart.length;


// Add this function to handle Buy Now
function buyNow() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  alert("Thank you for your purchase!");
  cart = [];
  renderCart();
  toggleCart();
}

function toggleCart() {
  document.getElementById('cart-sidebar').classList.toggle('open');
}
function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}