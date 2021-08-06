let numbers = [340, 2, 3000, 79, 546];

function sorting(array) {
    let sorted = array.sort(
        function (a,b) {
            return b - a;
        }
    );
    console.log(sorted);
}

function addNumber(array, callBack) {
    array.push(390868);
    console.log(array);
    callBack(array);
}

addNumber(numbers, sorting);