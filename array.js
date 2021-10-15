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

// Sắp xếp sử dụng quicksort
function quickSort(numbers) {
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
//quickSort(numbers)

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