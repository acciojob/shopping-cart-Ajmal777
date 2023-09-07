const name = document.getElementById('item-name-input');
const price = document.getElementById('item-price-input');
const btn = document.getElementById('add');
const tbody = document.getElementById('table-tbody');
const total = document.getElementById('total');
let totalCost = 0;
btn.addEventListener('click', () =>{
	const itemName = name.value;
	const itemPrice = Number(price.value);
	totalCost += itemPrice;
	name.value = '';
	btn.value = '';
	const tr = document.createElement('tr');
	tr.innerHTML = `
	<td>${itemName}</td>
	<td>${itemPrice}</td>
	`
	tbody.appendChild(tr);
	total.innerText = totalCost;
})