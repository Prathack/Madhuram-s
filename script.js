let cart = [];
function addToCart(itemName) {
  cart.push(itemName);
  document.getElementById('cart-count').textContent = cart.length;
  renderCart();
}
function renderCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = item;
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.onclick = function() { removeFromCart(index); };
    li.appendChild(removeBtn);
    cartItems.appendChild(li);
  });

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
}

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