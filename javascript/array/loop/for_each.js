let res = [1, 2, 3, 4, 5, 6];

// doesn't create a new array
res.forEach((item, index) => {
  if (index > 3) {
    console.log(item);
  } else {
    console.log(-1);
  }
});
