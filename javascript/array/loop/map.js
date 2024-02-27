let res = [1, 2, 3, 4, 5, 6];

// creates a new array
let res2 = res.map((item, index) => {
  if (index > 3) {
    return item;
  }

  return -1;
});

console.log(res);
console.log(res2);
