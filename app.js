const fs = require('fs');

const genderArr = ['M', 'F'];
const firstNameFArr = ['Anna', 'Barbara', 'Maria', 'Grażyna'];
const firstNameMArr = ['Jan', 'Jakub', 'Tadeusz', 'Robert'];
const lastNameArr = ['Nowak', 'Kowal', 'Kot'];
const people = [];

const randChoice = arr => (
  arr[Math.floor(Math.random() * arr.length)]
);

for (let i=0; i < 20; i++) {
  const gender = randChoice(genderArr);
  const firstName = gender === 'M' 
    ? randChoice(firstNameMArr) 
    : randChoice(firstNameFArr);
  const lastName = randChoice(lastNameArr);
  const age = Math.floor(Math.random() * 60) + 18;
  people.push({gender, firstName, lastName, age});
}
const data = JSON.stringify(people);

fs.writeFile('people.json', data, (err) => {
    if (err) console.log('Something went wrong');
    console.log('File has been successfully generated! Check people.json');
  });
  