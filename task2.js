// Task -2:
// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallestName(array) {
  let smallest = array[0];

  for (let i of array) {
    if (smallest.length > i.length) {
      smallest = i;
    }
  }
  return smallest;
}

const heights2 = ["rahim", "sms", "robin", "rafi", "ron", "rashed"];

console.log(smallestName(heights2));
