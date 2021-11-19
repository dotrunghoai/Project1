const numbers = [1, 2, 3, 4, 1, 10, 0, 7, 0, 6, 6, 3, 3]

// Tìm các số trùng lặp/không trùng lặp trong 1 mảng cho trước
function getDuplicate(numbers) {
    const listNoDup = []
    const listDup = []
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        if (!listNoDup.includes(number)) {
            listNoDup.push(number)
        } else if (listDup.includes(number)) {
            continue
        } else {
            listDup.push(number)
        }
    }
    console.log(listNoDup); // Không trùng lặp
    console.log(listDup); // Có trùng lặp

    // console.log(new Set(numbers));
    // console.log(Array.from(new Set(numbers)));
}
console.time('doSomething')
// getDuplicate(numbers)
console.timeEnd('doSomething')

// Tìm số lớn nhất và nhỏ nhất trong 1 mảng cho trước
function findMinMax(numbers) {
    let min = numbers[0]
    for (let i = 1; i < numbers.length; i++) {
        const number = numbers[i];
        if (number < min) {
            min = number
        }
    }
    console.log(min);
    // let min = Math.min(...numbers)
    // let max = Math.max(...numbers)
}
// findMinMax(numbers)

// Tìm các cặp số nguyên có tổng bằng số cho trước
function findNumberBySum(numbers, compareNumber) {
    const list = []
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === compareNumber) {
                list.push({ a: numbers[i], b: numbers[j] })
            }
        }
    }
    console.log(list);
}
//findNumberBySum(numbers, 8)

// Sắp xếp sử dụng Bubble sort
function bubbleSort(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] > numbers[j]) {
                const swap = numbers[i]
                numbers[i] = numbers[j]
                numbers[j] = swap
            }
        }
    }
    console.log(numbers);
}
//bubbleSort(numbers)

// Sắp xếp sử dụng insert sort
function insertSort(numbers) {
    let j
    for (let i = 1; i < numbers.length; i++) {
        const element = numbers[i];
        j = i - 1;
        while (j >= 0 && numbers[j] > element) {
            numbers[j + 1] = numbers[j];
            j = j - 1;
        }
        numbers[j + 1] = element;
    }
    console.log(numbers)
}
// insertSort(numbers);

// Sắp xếp sử dụng quick sort
function quickSortHandle(numbers) {
    function swap(items, leftIndex, rightIndex) {
        const temp = items[leftIndex];
        items[leftIndex] = items[rightIndex];
        items[rightIndex] = temp;
    }
    function partition(items, left, right) {
        let pivot = items[Math.floor((right + left) / 2)]; //middle element
        let i = left; //left pointer
        let j = right; //right pointer
        while (i <= j) {
            while (items[i] < pivot) {
                i++;
            }
            while (items[j] > pivot) {
                j--;
            }
            if (i <= j) {
                swap(items, i, j); //sawpping two elements
                i++;
                j--;
            }
        }
        return i;
    }

    function quickSort(items, left, right) {
        var index;
        if (items.length > 1) {
            index = partition(items, left, right); //index returned from partition
            if (left < index - 1) { //more elements on the left side of the pivot
                quickSort(items, left, index - 1);
            }
            if (index < right) { //more elements on the right side of the pivot
                quickSort(items, index, right);
            }
        }
        return items;
    }
    // first call to quick sort
    const sortedArray = quickSort(numbers, 0, numbers.length - 1);
    console.log(sortedArray);
}
quickSortHandle(numbers);

// Đảo ngược phần tử trong 1 mảng
function reverseArray(numbers) {
    const newArray = []
    for (let i = numbers.length - 1; i >= 0; i--) {
        newArray.push(numbers[i])
    }
    console.log(newArray);
    // console.log(numbers.reverse());
}
//reverseArray(numbers)

// Tìm số lớn thứ 2
function findMax2th(numbers) {
    let max = numbers[0]
    let max2th
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max2th = max
            max = numbers[i]
        } else if (numbers[i] > max2th && numbers[i] !== max) {
            max2th = numbers[i]
        }
    }
    console.log(max2th)
}
//findMax2th(numbers)

//Trả về true nếu ba phần tử liên tiếp bất kỳ có tổng bằng 7
function checkSum(numbers, sum) {
    for (let i = 0; i < numbers.length - 2; i++) {
        if (numbers[i] + numbers[i + 1] + numbers[i + 2] === sum) {
            return console.log(true);
        }
    }
    return console.log(false);
}
checkSum(numbers, 7)

// Tìm số lớn thứ 4

function asdasdasd(params) {

}
console.log(typeof asdasdasd());

const obj1 = {
    name: "asd",
    age: 13
}
for (const property in obj1) {
    console.log(obj1[property]);
}

function findMinInList(numbers) {
    if (!Array.isArray(numbers)) {
        console.log('Input is not array')
    } else if (numbers.length === 0) {
        console.log('Length array = 0');
    } else if (numbers.length === 1) {
        console.log(numbers.length);
        console.log(numbers[0]);
        console.log(numbers[0]);
    } else {
        let min = numbers[0];
        for (let i = 1; i < numbers.length; i++) {
            if (numbers[i] < min) {
                min = numbers[i];
            }
        }
        console.log(numbers.length);
        console.log(...numbers);
        console.log(min);
    }
}
findMinInList(undefined);
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    console.log(element);
}