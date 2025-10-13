// In this example, I want to create an interactive form that allows Newt Scamander create a sort of inventory of the Fantastic Beasts he's rescuing
// Here's what we'll need to do:
// 1. Grab the input a user enters into our form
let form =   document.getElementById("addCreatureForm");
let nameInput = document.getElementById("creatureName");

let typeInput = document.getElementById("creatureType");

let habitatInput =    document.getElementById("creatureHabitat");
let displayArea = document.getElementById("creatureSanctuary");

// 2. Represent this input in a meaningful way, let's say an Object

let creatureInventory = [];

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let newCreature = {
        name: nameInput.value,
        type: typeInput.value,
        habitat: habitatInput.value
    };

    
// 3. Push the contents of that Object into an Array 
creatureInventory.push(newCreature);
    console.log(creatureInventory);
    
    displayArea.innerHTML = "";




// 4. Reset our form so that the user can add a new creature if they want without having to manually delete the previous input
 form.reset();
// 5. Display the new creature in our Array back to the user on our page

    for (let i = 0; i < creatureInventory.length; i++) {
        let creature = creatureInventory[i];
        displayArea.innerHTML += `<p>The ${creature.name} is a ${creature.type} that lives in the ${creature.habitat}.</p>`;
    }

   
}

);
