// This is an interview question asked by Stripe.

//  Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

// For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

// You can modify the input array in-place.

const findMissingInteger = (arr) => {
    const sorted = arr.sort((a, b) => a - b);
    const empty = [];
    for(let i of sorted){
        sorted[i] > 0 && sorted[i] +1 != sorted[i+1] && empty.push(sorted[i]+1); 
            }
            return empty[0];
        }
console.log(findMissingInteger([3, 4, -1, 1]));
