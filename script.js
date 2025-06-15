function insert_Row() {
    //Write your code here
	 // Get the table by its ID
  const table = document.getElementById("sampleTable");

  // Create a new row
  const newRow = table.insertRow(0); // Insert at the top (index 0)

  // Create and insert the first cell
  const cell1 = newRow.insertCell(0);
  cell1.textContent = "New Cell1";

  // Create and insert the second cell
  const cell2 = newRow.insertCell(1);
  cell2.textContent = "New Cell2";
  
  
}
