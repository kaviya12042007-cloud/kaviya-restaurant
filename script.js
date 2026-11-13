
const menuItems = [
  { name: "Paneer Tikka", cat: "starters", price: "Rs.180", img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500", desc: "Spicy grilled paneer with mint chutney" },
  { name: "Chicken 65", cat: "starters", price: "Rs.220", img: "https://images.unsplash.com/photo-1562967914-608f82629710?w=500", desc: "Crispy and spicy Madurai style Chicken 65" },
  { name: "Meals / Thali", cat: "mains", price: "Rs.150", img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500", desc: "Full South Indian meals with 8 items" },
  { name: "Chicken Biryani", cat: "mains", price: "Rs.260", img: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=500", desc: "Dum biryani with raita and brinjal curry" },
  { name: "Gulab Jamun", cat: "desserts", price: "Rs.90", img: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=500", desc: "Hot gulab jamun with ice cream" },
  { name: "Payasam", cat: "desserts", price: "Rs.80", img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500", desc: "Traditional semiya payasam" },
  { name: "Filter Coffee", cat: "beverages", price: "Rs.40", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500", desc: "Strong Kumbakonam filter coffee" },
  { name: "Fresh Lime Soda", cat: "beverages", price: "Rs.60", img: "https://images.unsplash.com/photo-1437418747212-8d9709afab22?w=500", desc: "Sweet, Salt or Mixed lime soda" },
];

function displayMenu(filter = 'all') {
  const grid = document.getElementById('menuGrid');
  const filtered = filter === 'all' ? menuItems : menuItems.filter(i => i.cat === filter);
  grid.innerHTML = filtered.map(item => `
    <div class="menu-card">
      <img src="${item.img}" alt="${item.name}">
      <div>
        <h3>${item.name} <span class="price">${item.price}</span></h3>
        <p>${item.desc}</p>
      </div>
    </div>
  `).join('');
}

function filterMenu(cat, btn) {
  document.querySelectorAll('.filter-btns button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  displayMenu(cat);
}

document.getElementById('reserveForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  document.getElementById('successMsg').innerText = `Thank you ${name}! Your table at Kaviya Restaurant is booked. We will call you shortly.`;
  this.reset();
});
displayMenu();