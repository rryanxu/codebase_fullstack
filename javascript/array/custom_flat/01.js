// flat nested js array

const nested_arr = [
  [1, 2, 3],
  [
    [4, 5, 6],
    [7, 8, 9]],
];

const flat_arr = [];

const flatten_arr = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatten_arr(arr[i]);
    } else {
      flat_arr.push(arr[i]);
    }
  }
};

flatten_arr(nested_arr);
console.log(flat_arr);
console.log(nested_arr.flat(Infinity));
console.log(nested_arr.flat());


