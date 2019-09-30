var heading = document.createElement('h3');
heading.innerText = 'Numbers and Squares';
document.body.prepend(heading);
var myTable = document.createElement('table');
myTable.classList.add("table");
myTable.classList.add("table-striped");
document.body.appendChild(myTable);
var tRow1 = document.createElement('tr');
myTable.appendChild(tRow1);

var tH1 = document.createElement('th');
tH1.innerText = 'Numbers';
var tH2 = document.createElement('th');
tH2.innerText = 'Squares';
tRow1.appendChild(tH1);
tRow1.appendChild(tH2);
var tRow = [];
var tD1 = [];
var tD2 = [];
for(var i = 0; i < 10; i++) {
    tRow[i] = document.createElement('tr');
    myTable.appendChild(tRow[i]);
    tD1[i] = document.createElement('td');
    tD1[i].innerText = (i+1);
    tD2[i] = document.createElement('td');
    tD2[i].innerText = (i+1)*(i+1);
    tRow[i].appendChild(tD1[i]);
    tRow[i].appendChild(tD2[i]);
}
