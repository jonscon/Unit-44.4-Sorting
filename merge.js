function merge(arr1, arr2) {
    let mergedArr = [];
    let pointer1 = 0;
    let pointer2 = 0;
    
    // loop through arrays until one array is exhausted
    while(pointer1 < arr1.length && pointer2 < arr2.length) {
        if (arr1[pointer1] <= arr2[pointer2]) {
            mergedArr.push(arr1[pointer1]);
            pointer1++;
        }
        else {
            mergedArr.push(arr2[pointer2]);
            pointer2++;
        }
    }
    // push remaining elements from second array
    while (pointer1 < arr1.length) {
        mergedArr.push(arr1[pointer1]);
        pointer1++;
    }
    while (pointer2 < arr2.length) {
        mergedArr.push(arr2[pointer2]);
        pointer2++;
    }
    return mergedArr;
}

function mergeSort(arr) {
    // if array is split into one element, return it
    if (arr.length <= 1) return arr;

    // else, recursively split array into half
    const mid = Math.floor(arr.length/2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid, arr.length));
    
    return merge(left, right);
}

module.exports = { merge, mergeSort};