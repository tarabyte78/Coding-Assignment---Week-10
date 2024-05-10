document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('membership-form');
    const tableBody = document.querySelector('#memberTable tbody');
      
    form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
      
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
      
// Create new row
    const newRow = document.createElement('tr');
      
// Insert data into cells
    newRow.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${email}</td>
        `;
      
// Append row to table
    tableBody.appendChild(newRow);
      
// Clear form inputs after submission
    form.reset();
    });
    
});
      