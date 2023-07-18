// Get the input and button elements
const input = document.getElementById('listItem');
const amountInput = document.getElementById('amount');
const addButton = document.getElementById('addButton');
const list = document.getElementById('list');

// Add event listener to the button
addButton.addEventListener('click', () => {
  // Get the value from the input fields
  const newItem = input.value;
  const amount = amountInput.value;

  // Create a new list item element
  const listItem = document.createElement('li');
  listItem.textContent = `${newItem} ${amount}`;

  // Append the new list item to the list
  list.appendChild(listItem);

  // Clear the input fields
  input.value = '';
  amountInput.value = '';
});
