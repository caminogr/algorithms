
// const target = "aab";
const target = "aaaaabbbabbbvvvvccacabbbbeeeeee";
let compressed = '';

function main () {
  let count = 0;
  let prev = null;

  for (i=0; i<=target.length; i++) {
    if (prev === null || prev === target[i]) {
      count++
    } else {
      compressed += prev + count
      count = 1;
    }
    prev = target[i];
  }
  console.log('compressed target is: ', compressed) 
}

main();
