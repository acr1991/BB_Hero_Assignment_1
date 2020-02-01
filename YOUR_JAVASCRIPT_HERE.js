console.log("Connetion Test");
//HERO OBJECT
//Test Steps to reproduce
//X Write your JS here
//X Declare a variable `hero` and assign it an object
//X Hero object should have a name property. The value of name should be a string.
//X Hero object should have a heroic property. The value of heroic should be a boolean.
//X Hero object should have an inventory property. The value of inventory should be an empty array
//X Hero object should have an health property. The value health should be the number 10
//X Hero object should have a weapon property. The value of weapon is an object with a type property which is a string and damage property which is 2

const hero = {
  name: `Alexander the Great`,
  heroic: true,
  inventory: [],
  health: 10,
  weapon: { type: `Sword`, damage: 2 }
};
//console.log(hero);

//FUNCTIONS
//X Functions `rest, pickUpItem and equipWeapon` are all defined
//X And (re)assigns the health property of person to the value 10
//X Returns person at the end of the function
//X Creates an alert popup with a message, If the health property of person already has the value 10

function rest(person) {
  let lifeForce = person.health;
  if (lifeForce === 10) {
    window.alert("Health 100 Procent");
  }
  person.health = 10;
  return person;
}
//console.log(rest);

//X Adds the weapon object as the last element of the inventory array of person
function pickUpItem(person, weapon) {
  const pickUpItem = weapon;
  person.inventory.push(pickUpItem);
  return person;
}
//console.log(pickUpItem);

//X Reassigns the `weapon` property of person to the first element of the person.inventory array
function equipWeapon(person) {
  let inventoryAdd = person.inventory.length;
  let weapon = person.inventory[0];
  if (inventoryAdd >= 1) {
    person.weapon = weapon;
    return person;
  }
}
//console.log(equipWeapon);

document.getElementById("inn").addEventListener("click", function() {
  rest(hero);
});

document.getElementById("dagger").addEventListener("click", function() {
  pickUpItem(hero);
});

document.getElementById("bag").addEventListener("click", function() {
  equipWeapon(hero);
});

//Added to index.html
//X There is a IMG element with the id `inn`
//X There is a IMG element with the id `dagger`
//X There is a IMG element with the id `bag`
