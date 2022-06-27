// 1. Always Hungry

function alwaysHungry(arr) {
    let hungry = true;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == 'food') 
        {
            console.log('yummy');
            hungry = false;
        }
    }
    if (hungry == true)
        console.log("I'm hungry");
}
alwaysHungry([3.14, "food", "pie", true, "food"]);

// 2. High Pass Filter

function highPass(arr, cutoff) {
    var filteredArr = [];

    for(let i = 0; i < arr.length; i++) {
        if (arr[i] > cutoff)
            filteredArr.push(arr[i]);
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);

// 3. Better than average

function betterThanAverage(arr) {
    var sum = 0;
    var count = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > sum / arr.length)
            count++;
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result);

// 4. Array Reverse

function reverse(arr) {
    for (let i = 0; i < arr.length/2; i++){
        var rightBound = arr.length - 1 - i;
        var temp = arr[i];
        arr[i] = arr[rightBound];
        arr[rightBound] = temp;
    }
    return arr;
}

var arrResult = reverse(["a", "b", "c", "d", "e", "f"]);
console.log(arrResult);

// 5. Fibonacci Array

function fibonacciArray(n) {
    var fibArr = [0, 1];
    for (let i = 0; i < n-2; i++) {
        fibArr.push(fibArr[i] + fibArr[i+1]);
    }
    return fibArr;
}
var fibResult = fibonacciArray(11);
console.log(fibResult);
