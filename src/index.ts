console.log(`quicksort-typescript is working!
\u00A9 nordible https://nordible.com`);

export const quickSort = (arr: Array<number>, left: number, right: number) => {
    let pivot,
        partitionIndex;

    if (left < right) {
        pivot = right;
        partitionIndex = partition(arr, pivot, left, right);

        // sort left
        quickSort(arr, left, partitionIndex - 1);
        // sort right
        quickSort(arr, partitionIndex + 1, right);
    }
    return arr;
}

const partition = (arr: Array<number>, pivot: number, left: number, right: number) => {
    var pivotValue = arr[pivot],
        partitionIndex = left;

    for (var i = left; i < right; i++) {
        if (arr[i] < pivotValue) {
            swap(arr, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(arr, right, partitionIndex);
    return partitionIndex;
}

const swap = (arr: Array<number>, i: number, j: number) => {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

console.log(`Performing tests...
input: ${[16, 11, 9, 7, 6, 5, 3, 2]}
after quick sort: ${quickSort([16, 11, 9, 7, 6, 5, 3, 2], 0, 7)}

input: ${[11,8,14,3,6,2,7]}
after quick sort: ${quickSort([11,8,14,3,6,2,7],0,6)}

input: ${[11,8,14,3,6,2,1, 7]}
after quick sort: ${quickSort([11,8,14,3,6,2,1, 7],0,7)}

input: ${[16,11,9,7,6,5,3, 2]}
after quick sort: ${quickSort([16,11,9,7,6,5,3, 2],0,7)}`);
