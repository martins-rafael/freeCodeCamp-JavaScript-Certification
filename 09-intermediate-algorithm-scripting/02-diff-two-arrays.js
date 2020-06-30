function diffArray(arr1, arr2) {
        return arr1
                .concat(arr2)
                .filter(value =>
                        !arr1.includes(value) || !arr2.includes(value))
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
