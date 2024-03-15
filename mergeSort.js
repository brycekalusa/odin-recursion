// Build a function mergeSort that takes in an array and returns a sorted array, 
// using a recursive merge sort methodology. An input of [3, 2, 1, 13, 8, 5, 0, 1] 
// should return [0, 1, 1, 2, 3, 5, 8, 13], and an input of [105, 79, 100, 110] 
// should return [79, 100, 105, 110].
const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    
    const mid = Math.floor(arr.length / 2)
    const left = mergeSort(arr.slice(0, mid))
    const right = mergeSort(arr.slice(mid, arr.length))

    return merge(left, right)
}

const merge = (leftArr, rightArr) => {
    const mergedArr = [];

    while(leftArr.length > 0 && rightArr.length > 0) {
        const arrMin = leftArr[0] < rightArr[0] ? leftArr : rightArr;
        const mergeEle = arrMin.shift();
        mergedArr.push(mergeEle);
    }

    return mergedArr.concat(leftArr, rightArr);
}
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));