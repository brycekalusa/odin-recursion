// Odin Project
// Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the Fibonacci sequence. Using an example input of 8, this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].
function fibs(n) {
    let arr = [0, 1];
    for (let i = 2; i < n; i++) {
        arr.push(arr[arr.length -2 ] + arr[arr.length - 1]);
    }
    console.log(arr);
}
fibs(8)

// Now write another function fibsRec which solves the same problem recursively.
function fibsRec(n, arr = [0, 1]) {
    if (arr.length >= n) {
        return arr;
    }
    return fibsRec(n, [...arr, arr[arr.length -2 ] + arr[arr.length - 1]]);
}
console.log(fibsRec(8));