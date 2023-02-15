// Get all the increment and decrement buttons
const incrementBtns = document.querySelectorAll('.increment-btn');
const decrementBtns = document.querySelectorAll('.decrement-btn');

// Loop through each button and add a click event listener
incrementBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        // Get the current quantity value for this menu item
        const quantityEl = btn.parentNode.querySelector('.quantity');
        let quantity = parseInt(quantityEl.textContent);

        // Increment the quantity and update the element
        quantity++;
        quantityEl.textContent = quantity;

        calculateSubtotal();
    });
});

decrementBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        // Get the current quantity value for this menu item
        const quantityEl = btn.parentNode.querySelector('.quantity');
        let quantity = parseInt(quantityEl.textContent);

        // Decrement the quantity if it's greater than 0, and update the element
        if (quantity > 0) {
            quantity--;
            quantityEl.textContent = quantity;
        }

        calculateSubtotal();
    });
});

function calculateSubtotal() {
    // Get all the items in the menu
    const menuItems = document.querySelectorAll('.item');

    // Initialize the subtotal
    let subtotal = 0;

    // Loop through each menu item and calculate the subtotal
    menuItems.forEach((item) => {
        // Get the price and quantity of the item
        const price = parseFloat(item.querySelector('.item-price').textContent.slice(1));
        const quantity = parseInt(item.querySelector('.quantity').textContent);

        // Add the cost of the item to the subtotal
        subtotal += price * quantity;
    });

    // Update the text of the subtotal element
    const subtotalElement = document.querySelector('#subtotal');
    subtotalElement.textContent = `$${subtotal}`;
}

const clearAllButton = document.getElementById('clear-all-btn');
clearAllButton.addEventListener('click', () => {
    const itemAmounts = document.querySelectorAll('.quantity');
    itemAmounts.forEach((amount) => {
        amount.textContent = 0;
    });
    calculateSubtotal();
});

// get a reference to the order button and add a click event listener
const orderButton = document.getElementById('order-btn');

orderButton.addEventListener('click', function() {
  // get a reference to the cart items
  const cartItems = document.querySelectorAll('.item');
  
  // create an empty array to store the item names and quantities
  const orderedItems = [];
  
  // loop through each cart item and add its name and quantity to the orderedItems array
  cartItems.forEach(function(item) {
    const name = item.querySelector('.item-name').textContent;
    const quantity = parseInt(item.querySelector('.quantity').textContent);
    if (quantity > 0) {
      orderedItems.push(`${quantity} ${name}`);
    }
  });
  
  // if there are no items in the cart, show an alert message and return from the function
  if (orderedItems.length === 0) {
    window.alert('No items in cart');
    return;
  }
  
  // create a message string that lists the ordered items
  const message = `Order placed! \n\n${orderedItems.join('\n')}`;
  
  // show an alert with the message and add an event listener to the OK button
  const okClicked = window.alert(message);
  
});
