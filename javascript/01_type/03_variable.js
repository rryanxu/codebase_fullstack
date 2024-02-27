// let allows you to declare block-level variables. The declared variable is available from the block it is enclosed in.

const a = 12;
{
  let a = 10;
  console.log('the inside a is ' + a);
}

console.log('the outside a is ' + a);

