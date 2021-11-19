// Đảo ngược chuỗi
function revertString(str) {
    let newString = ''
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString
}
console.log(revertString("123456789"));
function name1(params) {
    if (1 === 8) {
        throw new Error("sasdasd")
    }
    return 2
}

function thamTri(string1, number1, boolean1) {
    string1 = "string2"
    number1 = 2
    boolean1 = false
}
let str1 = "string1"
let num1 = 1
let bool1 = true
thamTri(str1, num1, bool1)
console.log(str1 + " " + num1 + " " + bool1);

function thamChieu(object1, array1) {
    object1.name = "name2"
    array1[0] = 2
}
let obj1 = {
    name: "name1"
}
let arr1 = [1, 2]
thamChieu(obj1, arr1)
console.log(obj1.name + " " + arr1);

const array1 = [
    { name: 'name1', age: 2 },
    { name: 'name1', age: 4 },
]
const filterArr = array1.find(item => item.name == 'name1')
console.log(filterArr);

// Thêm comment

// Thêm comment 2, 3, 4

// Thêm comment 5