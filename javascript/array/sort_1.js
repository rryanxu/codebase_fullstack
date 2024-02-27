// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

const students = [
  {name: 'Alex', grade: 15},
  {name: 'Devlin', grade: 15},
  {name: 'Eagle', grade: 13},
  {name: 'Sam', grade: 14},
];

// 1) arrow function
students.sort((firstItem, secondItem) => firstItem.grade - secondItem.grade);

// 2) function
// students.sort(function(firstItem, secondItem) {
//   return firstItem.grade - secondItem.grade;
// });

// 3) default
// students.sort();

console.log(students);


