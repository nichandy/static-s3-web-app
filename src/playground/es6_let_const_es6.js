var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log(nameVar);

let nameLet = 'Jen';
nameLet = 'Jane';
console.log(nameLet);

const nameConst = 'Frank';

// function scoped

// Block Level Scope
let fullName = 'Nick Handy';
let firstName;

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}
console.log(firstName);
