const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

elem.style.table = 
document.getElementById('body').appendChild(table);
//заголовки
const row1 = document.createElement('tr');
const th1 = document.createElement('th'); 
th1.innerHTML = "Столбец 1";
const th2 = document.createElement('th');
th2.innerHTML = "Столбец 2";
const th3 = document.createElement('th');
th3.innerHTML = "Столбец 3"

row1.appendChild(th1);
row1.appendChild(th2);
row1.appendChild(th3);
thead.appendChild(row1);

//строка 1
const row2 = document.createElement('tr');
const row2_td1 = document.createElement('td');
row2_td1.innerHTML = "клетка 1";
const row2_td2 = document.createElement('td');
row2_td2.innerHTML = "клетка 2";
const row2_td3 = document.createElement('td');
row2_td3.innerHTML = "клетка 3";

row2.appendChild(row2_td1);
row2.appendChild(row2_td2);
row2.appendChild(row2_td3);
tbody.appendChild(row2);
//строка 2
const row3 = document.createElement('tr');
const row3_td1 = document.createElement('td');
row3_td1.innerHTML = "клетка 4";
const row3_td2 = document.createElement('td');
row3_td2.innerHTML = "клетка 5";
const row3_td3 = document.createElement('td');
row3_td3.innerHTML = "клетка 6";

row3.appendChild(row3_td1);
row3.appendChild(row3_td2);
row3.appendChild(row3_td3);
tbody.appendChild(row3);

