// implement flatten_obj() parse string to json, make sure parse nested array and object

const flatten_obj_helper = (obj, flat_obj, parentKey = '') => {
  for (let key in obj) {
    // FIXME:
    //  - flat should skip non-nested array and object
    //  - compare from button to top, instead of top to bottom
    if (typeof obj[key] === 'object') {
      flatten_obj_helper(obj[key], flat_obj, parentKey + key + '.');
    } else {
      flat_obj[parentKey + key] = obj[key];
    }
  }
};

const flatten_obj = (nested_obj) => {

  const flat_obj = {};
  flatten_obj_helper(nested_obj, flat_obj);
  return flat_obj;
};

fetch('https://api.dictionaryapi.dev/api/v2/entries/en_US/hello')
    .then((response) => {
      return response.json();

    })
    .then(data => {
      // console.log(data);

      console.log(flatten_obj(data[0]));

    })
    .catch((err) => {
      console.log(err);
    });
