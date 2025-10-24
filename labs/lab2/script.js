// Array of magical items
const inventory = 
[
    { name: "Phoenix Feather Wand", type: "wand", price: 49.99, quantity: 12, description: "A Fire was with healing abilities." },
    { name: "Healing Potion", type: "potion", price: 5.99, quantity: 123, description: "Heals small wounds." },
    { name: "Invisibility Cloak", type: "cloak", price: 999.00, quantity: 3, description: "Makes user invinsible." },
    { name: "Thunder Broomstick", type: "broomstick", price: 133.75, quantity: 5, description: "A fast broomstick favored by Thunder players." },
    { name: "Mandrake Root", type: "herb", price: 15.00, quantity: 80, description: "Used when making and mixing potion." },
    { name: "Spellbook: Advanced Charms", type: "book", price: 400.00, quantity: 10, description: "A guide book to advanced charm spells." },
    { name: "Dragon Scale Shield", type: "armor", price: 210.00, quantity: 3, description: "Provides protection against all magical attacks." },
    { name: "Elixir of Strength", type: "potion", price: 89.75, quantity: 25, description: "Temporarily increases physical strength for five hours." },
    { name: "Silver Wand", type: "wand", price: 55.00, quantity: 10, description: "A wand that is very versatility." },
    { name: "Phoenix Down Feather", type: "material", price: 30.00, quantity: 40, description: "A rare feather used in crafting powerful magical items." }
];

//This section contains the newly added functions 
function calculateTotalValue()
 {
    // Use Array.reduce to sum up the total value (price * quantity)
    const totalValue = inventory.reduce((total, item) => 
        {
        return total + (item.price * item.quantity);
    }, 0);

    const displayElement = document.getElementById('total-value-display');

    displayElement.textContent = `Total Inventory Value: $${totalValue.toFixed(2)}`;
}

//Function refreshes both the list and the total value 
function listItems()
 {
    renderInventory(inventory);
    calculateTotalValue();
}



function renderInventory(itemsToDisplay) 
{
    const listContainer = document.getElementById('item-list');
    // Helps to sanitize item names 
    const sanitizeName = (name) => name.replace(/'/g, "\\'"); 
// Handles empty inventory case
    if (itemsToDisplay.length === 0) 
        {
        listContainer.innerHTML = '<p>No items found in inventory.</p>'; 
        return;
    }

    // Generates a single HTML string from the array of items
    const inventoryHTML = itemsToDisplay.map(item => `
        <div class="inventory-item">
            <h3>${item.name} (${item.type})</h3>
            <p>Price: $${item.price.toFixed(2)} | Stock: ${item.quantity}</p>
            <p>${item.description}</p>
            <button onclick="removeItem('${sanitizeName(item.name)}')">Remove</button>
        </div>
    `).join('');

    // Updates the DOM in one efficient operation
    listContainer.innerHTML = inventoryHTML;
}


listItems();


// Function to remove an item from the inventory    
function removeItem(itemName) 
{
    const itemIndex = inventory.findIndex(item => item.name === itemName);

    if (itemIndex !== -1)
         {
        inventory.splice(itemIndex, 1);
     
        listItems();
    }
}

// Function to search items by name or type
function searchItems(query) 
{
    const lowerCaseQuery = query.toLowerCase();
    
    const filteredItems = inventory.filter(item =>   item.name.toLowerCase().includes(lowerCaseQuery) ||   item.type.toLowerCase().includes(lowerCaseQuery)
      
    );
    renderInventory(filteredItems);
}

// Function to reset the search and show all items
function resetSearch() 
{
    document.getElementById('search-input').value = '';
    
    listItems();
}


// Attach event listener to reset button
document.getElementById('reset-button').addEventListener('click', resetSearch);




// Function to list a new item into the inventory
function listItem() 
{
    const name = document.getElementById('item-name').value;
    const type = document.getElementById('item-type').value;


    // Ensure numbers are properly parsed
    const price = parseFloat(document.getElementById('item-price').value);

      const quantity = parseInt(document.getElementById('item-quantity').value);
    const description = document.getElementById('item-description').value;


    if (name && type && !isNaN(price) && price >= 0 && !isNaN(quantity) && quantity >= 0 && description) 
        {
        const newItem = { name, type, price, quantity, description };
        inventory.push(newItem);
        
        
        listItems();
        
        // Clearing the input fields after adding
        document.getElementById('item-name').value = '';
        document.getElementById('item-type').value = '';
        document.getElementById('item-price').value = '';
        document.getElementById('item-quantity').value = '';
        document.getElementById('item-description').value = '';
    } 
    else 
        {
        alert('Please fill in all fields the right way to add a new item.');
    }
}

// Attach event listener to list item button
document.getElementById('list-item-button').addEventListener('click', listItem);



function getItem(itemName) 
{
    return inventory.find(item => item.name === itemName);
}

// Function to add a new item to the inventory 
function addItem(item) 
{
    inventory.push(item);
    
    listItems();
}

// Function to update an existing item's properties
function updateItem(itemName, updatedProperties) 
{
    const item = getItem(itemName);
    if (item) 
        {
        Object.assign(item, updatedProperties);
       
        listItems();
    }
}