//X Write your JS here
//X Declare a variable `hero` and assign it an object
//X Hero object should have a name property. The value of name should be a string.
//X Hero object should have a heroic property. The value of heroic should be a boolean.
//X Hero object should have an inventory property. The value of inventory should be an empty array
//X Hero object should have an health property. The value health should be the number 10
//X Hero object should have a weapon property. The value of weapon is an object with a type property which is a string and damage property which is 2
//console.log("Connetion Test");
//X Functions `rest, pickUpItem and equipWeapon` are all defined
// And (re)assigns the health property of person to the value 10
//

//HERO OBJECT
let hero = {
  name: `Alexander the Great`,
  heroic: true,
  inventory: [],
  health: 10,
  weapon: { type: `Sword`, damage: 2 }
};
//console.log(hero);

//FUNCTIONS
function rest(person) {
  const lifeForce = person.health;
  if (lifeForce === 10) {
    window.alert("You have full health");
  }
  person.health = 10;
  return person;
}
console.log(rest);
function pickUpItem(params) {}
function equipWeapon(params) {}
