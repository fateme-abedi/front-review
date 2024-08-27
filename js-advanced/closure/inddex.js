// Challenge : Create a Counter with Limited Increments that execute like this :

//   const myCounter = createLimitedCounter(5);

//   console.log(myCounter.increment()); // Output: 1
//   console.log(myCounter.increment()); // Output: 2
//   console.log(myCounter.increment()); // Output: 3
//   console.log(myCounter.increment()); // Output: 4
//   console.log(myCounter.increment()); // Output: 5
//   console.log(myCounter.increment()); // Output: 5

function createLimitedCounter(maxCount) {
    let count = 0;

    return {
        increment: function() {
            if (count < maxCount) {
                count++;
            }
            return count;
        }
    };
}

const myCounter = createLimitedCounter(5);

console.log(myCounter.increment()); 
console.log(myCounter.increment()); 
console.log(myCounter.increment()); 
console.log(myCounter.increment()); 
console.log(myCounter.increment()); 
console.log(myCounter.increment()); 