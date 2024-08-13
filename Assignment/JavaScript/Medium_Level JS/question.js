//Write a function that returns the sum of all numbers in an array. 

function sumArray(numbers){
    return numbers.reduce((sum,number)=> sum + number,0); 
}
var array = [11,12,13,14,15];
var sum = sumArray(array);
console.log("sum of Array:");
console.log(sum);

//Implement a function that finds the maximum number in an array. 
function findMaxNumber(numbers) {
    return Math.max(...numbers);
}
const arr = [10, 5, 8, 20, 3];
const maxNumber = findMaxNumber(arr);
console.log("Max number is:");
console.log(maxNumber); 

//Write a function that returns a new array containing only the unique elements from an input array. 
function getUniqueElements(arr1) {
    return [...new Set(arr1)];
}
const inputArray = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = getUniqueElements(inputArray);
console.log("Unique Array:");
console.log(uniqueArray); 

//Implement a function that returns the average value of numbers in an array. 
function calculateAverage(numbers) {
    const sum = numbers.reduce((acc, number) => acc + number, 0);
    return sum / numbers.length;
}
const array1 = [10, 20, 30, 40, 50];
const average = calculateAverage(array1);
console.log("average value is:");
console.log(average); 

//Write a function that sorts an array of strings in alphabetical order.
function sortStrings(strings) {
    return strings.sort();
}
const stringArray = ["banana", "apple", "cherry", "date"];
const sortedArray = sortStrings(stringArray);
console.log("Sorted Array is:");
console.log(sortedArray); 

//Implement a function that finds the index of a specific element in an array. If the element is not found, the function should return -1. 
function findIndex(arr, element) {
    return arr.indexOf(element);
}
const array2 = [10, 20, 30, 40, 50];
const index = findIndex(array2, 30);
console.log("indexis:");
console.log(index); 
const notFoundIndex = findIndex(array2, 60);
console.log("Not Found Index is:");
console.log(notFoundIndex); 

//Write a function that removes all false values (false, null, 0, “”, undefined, and NaN) from an array. 
function removeFalseValues(arr) {
    return arr.filter(Boolean);
}
const array3 = [0, "apple", false, null, 42, "", undefined, NaN, "banana"];
const filteredArray = removeFalseValues(array3);
console.log("Filtered Array is:");
console.log(filteredArray); 

//Implement a function that merges two arrays into a single array, alternating elements from each array. 
function mergeAlternating(arr2, arr3) {
    const maxLength = Math.max(arr2.length, arr3.length);
    const mergedArray = [];
    for (let i = 0; i < maxLength; i++) {
        if (i < arr2.length) mergedArray.push(arr2[i]);
        if (i < arr3.length) mergedArray.push(arr3[i]);
    }
    return mergedArray;
}
const array4 = [1, 3, 5];
const array5 = [2, 4, 6, 8];
const merged = mergeAlternating(array4, array5);
console.log("Merged Array is:");
console.log(merged); 

//Write a function that finds the second largest number in an array. 
function findSecondLargest(arr5) {
    let first, second;
    if (arr5.length < 2) {
        return "Invalid Input";
    }
    arr5.sort();
    for (let i = arr5.length - 2; i >= 0; i--) {
        if (arr5[i] !== arr5[arr5.length - 1]) {
            return "The second largest element is " + arr5[i];
        }
    }
    return "There is no second largest element";
}
const arr5 = [12, 35, 10, 35, 10, 34, 1];
console.log("The second largest number");
console.log(findSecondLargest(arr5)); 

//Implement a function that groups elements in an array based on a given condition. For example, grouping even and odd numbers into separate arrays. 
function groupByCondition(arr6, condition) {
    return arr6.reduce((groups, item) => {
        const key = condition(item);
        if (!groups[key]) groups[key] = [];
        groups[key].push(item);
        return groups;
    }, {});
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const isEven = num => num % 2 === 0 ? 'even' : 'odd';
const grouped = groupByCondition(numbers, isEven);
console.log("Grouped Array is:");
console.log(grouped);

