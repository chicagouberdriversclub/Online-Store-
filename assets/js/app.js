// Dummy store — products load from data/products.json, cart lives in localStorage.
// No real payments. Checkout is a dummy form that shows a fake order number.
let PRODUCTS = [];
let cart = JSON.parse(localStorage.getItem('cart') || '[]');

async function loadProducts() {
  const res = await fetch('data/products.json');
  PRODUCTS = await res.json();
  renderProducts();
  updateCartCount();
}

function renderProducts() {
  const grid = document.getElementById('products');
  if (!grid) return;
  const cat = document.getElementById('category-filter')?.value || 'all';
  const q = (document.getElementById('search')?.value || '').toLowerCase();
  const list = PRODUCTS.filter(p =>
    (cat === 'all' || p.category === cat) &&
    (p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)));
  grid.innerHTML = list.map(p => `
    <article class="card">
      <img src="${p.image || `https://picsum.photos/seed/${p.id}/400/300`}" alt="${p.name}">
      <h2>${p.name}</h2>
      <p>${p.description}</p>
      <p class="price">$${p.price.toFixed(2)}</p>
      <p>${p.category} · In stock on eBay (verified Nov 25, 2026)</p>
      ${p.url ? `<p><a href="${p.url}" target="_blank" rel="noopener">Buy on eBay</a></p>` : ''}
      <button onclick="addToCart('${p.id}')">Add to cart</button>
    </article>`).join('') || '<p>No products found.</p>';
}

function addToCart(id) {
  const item = cart.find(i => i.id === id);
  if (item) item.qty++;
  else cart.push({ id, qty: 1 });
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  alert('Added to cart (dummy).');
}

function updateCartCount() {
  const el = document.getElementById('cart-count');
  if (el) el.textContent = cart.reduce((n, i) => n + i.qty, 0);
}

function renderCart() {
  const body = document.getElementById('cart-items');
  const totalEl = document.getElementById('cart-total');
  if (!body) return;
  let total = 0;
  body.innerHTML = cart.map(i => {
    const p = PRODUCTS.find(x => x.id === i.id);
    if (!p) return '';
    total += p.price * i.qty;
    return `<tr><td>${p.name}</td><td>$${p.price.toFixed(2)}</td><td>${i.qty}</td><td>$${(p.price * i.qty).toFixed(2)}</td><td><button onclick="removeFromCart('${p.id}')">Remove</button></td></tr>`;
  }).join('') || '<tr><td colspan="5">Cart is empty.</td></tr>';
  if (totalEl) totalEl.textContent = '$' + total.toFixed(2);
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart(); updateCartCount();
}

function checkout(event) {
  event.preventDefault();
  const orderNo = 'DUMMY-' + Math.floor(100000 + Math.random() * 900000);
  alert('Dummy order placed! Order #' + orderNo + ' — no payment was taken.');
  cart = []; localStorage.removeItem('cart');
  window.location.href = 'index.html';
}

document.getElementById('category-filter')?.addEventListener('change', renderProducts);
document.getElementById('search')?.addEventListener('input', renderProducts);
document.getElementById('checkout-form')?.addEventListener('submit', checkout);
loadProducts().then(renderCart);
