letterLogs = [
  'let2 art can', 'let1 art cana', 'let2 own kit dig', 'let3 art zero',
  'let4 art zero'];

let compareFunction = (a, b) => {
  let a_content = a.substring(a.indexOf(' ') + 1);
  let a_identifier = a.substring(0, a.indexOf(' '));
  let b_content = b.substring(b.indexOf(' ') + 1);
  let b_identifier = b.substring(0, b.indexOf(' '));

  if (a_content === b_content) {
    console.log('===');
    console.log(a_content);
    console.log(b_content);
    if (a_identifier < b_identifier) {
      return -1;
    } else {
      return 1;
    }
  } else {
    if (a_content < b_content) {
      return -1;
    } else {
      return 1;
    }
  }
};

letterLogs.sort(compareFunction);

console.log(letterLogs);


