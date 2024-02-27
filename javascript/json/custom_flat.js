// flat all object key-value and array element

// 2)
const flatten_obj_helper = (obj, flat_obj, parentKey = '') => {
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      flatten_obj_helper(obj[key], flat_obj, parentKey + key + '.');
    } else {
      flat_obj[parentKey + key] = obj[key];
    }
  }
};

// TODO: program parse string to json, make sure parse nested array and object

const flatten_obj = (nested_obj) => {

  const flat_obj = {};
  flatten_obj_helper(nested_obj, flat_obj);
  return flat_obj;
};

const nested_obj = {
  a: {
    b: {
      c: {
        d: {
          e: {
            f: {
              g: {
                v1: 'v1',
                v2: 'v2',
              },
            },
            v3: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          },
        },
      },
      v4: {
        v4_1: 'v4_1',
        v4_2: 'v4_2',
        v4_3: 'v4_3',
      },
    },
  },
};

console.log(flatten_obj(nested_obj));
