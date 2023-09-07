const name = document.getElementById('item-name-input');
const price = document.getElementById('item-price-input');
const qty = document.getElementById('item-qty-input');
const btn = document.getElementById('add');
const tbody = document.getElementById('table-tbody');
const total = document.getElementById('total');
let totalCost = 0;
btn.addEventListener('click', () =>{
	const itemName = name.value;
	const itemPrice = Number(price.value);
	const itemQty = Number(qty.value);
	totalCost += (itemPrice * itemQty);
	name.value = '';
	price.value = '';
	qty.value = '';
	const tr = document.createElement('tr');
	tr.innerHTML = `
	<td>${itemName}</td>
	<td>${itemPrice}</td>
	`
	tbody.appendChild(tr);
	total.innerText = totalCost;
})