let myMemberTable = document.createElement('table');
let myTr = document.createElement('tr');
let myTdFirstName = document.createElement('td');
let myTdLastName = document.createElement('td');
let myTdEmail = document.createElement('td');

myTr.appendChild(myTdFirstName);
myTr.appendChild(myTdLastName);
myTr.appendChild(myTdEmail);

myMemberTable.appendChild(myTr);
document.body.appendChild(myMemberTable);


let myButton = document.getElementById('myButton');
myButton.addEventListener('click', function() {
    let newRow = document.createElement('tr');
    
    let newTdFirstName = document.createElement('td');
    let newTdLastName = document.createElement('td');
    let newTdEmail = document.createElement('td');

    let inputFirstName = document.createElement('input');
    inputFirstName.type = 'text';
    inputFirstName.placeholder = 'First Name';

    let inputLastName = document.createElement('input');
    inputLastName.type = 'text';
    inputLastName.placeholder = 'Last Name';

    let inputEmail = document.createElement('input');
    inputEmail.type = 'email';
    inputEmail.placeholder = 'Email';

    newTdFirstName.appendChild(inputFirstName);
    newTdLastName.appendChild(inputLastName);
    newTdEmail.appendChild(inputEmail);

    newRow.appendChild(newTdFirstName);
    newRow.appendChild(newTdLastName);
    newRow.appendChild(newTdEmail);

    myMemberTable.appendChild(newRow);
});
