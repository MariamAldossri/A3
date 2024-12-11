// Define the API endpoint URL
const apiUrl = 'https://data.gov.bh/api/explore/v2.1/catalog/datasets/01-statistics-of-students-nationalities_updated/records?where=colleges%20like%20%22IT%22%20AND%20the_programs%20like%20%22bachelor%22&limit=100';

// Fetch the data from the API
fetch(apiUrl)
  .then(response => {
    // Ensure the response is successful
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the JSON response
  })
  .then(data => {
    const tableBody = document.getElementById('table-body'); // Get the table body element

    // Loop through the records and create rows dynamically
    data.records.forEach(record => {
      const row = document.createElement('tr'); // Create a new table row

      // Create table cells and populate them with data from the record
      row.innerHTML = `
        <td>${record.nationality}</td>
        <td>${record.student_count}</td>
        <td>${record.college}</td>
        <td>${record.program}</td>
      `;

      // Append the row to the table body
      tableBody.appendChild(row);
    });
  })
  .catch(error => console.error('There was a problem with the fetch operation:', error));
