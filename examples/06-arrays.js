const array1 = [1, 2, 3, 4, 5];

console.log(array1[0]); // 1
console.log(array1[1]); // 2
console.log(array1[2]); // 3
console.log(array1[3]); // 4
console.log(array1[4]); // 5

array1.push(6); // add 6 to the end of the array
console.log(array1); // [1, 2, 3, 4, 5, 6]
console.log("after remove"); // 6
array1.pop(); // remove the last element of the array
console.log(array1); // [1, 2, 3, 4, 5]

console.log("after splice"); // 1

array1.splice(0, 1); // remove the first element of the array
console.log(array1); // [2, 3, 4, 5]

const array2 = [1, 2, 3, 4, 5];
array2.splice(0,3); // removes [1,2,3]
console.log(array2);

const array3 = [1, 2, 3, 4, 5];
array3.splice(1,3); //removes element at position 1 until position 3 (removed 2,3,4)
console.log(array3);

//there are many more arrays methods you dont have to remember all of them