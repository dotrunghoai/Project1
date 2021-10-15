const string = 'hello world'

// Tìm các kí tự trùng lặp/không trùng lặp trong 1 chuỗi cho trước
function getDuplicate(str) {
    const listNoDup = []
    const listDup = []
    for (let i = 0; i < str.length; i++) {
        const number = str[i];
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

    // console.log(Array.from(new Set(str)).join(''));
    // console.log(str
    //     .split('')
    //     .filter(function (item, pos, self) {
    //         return self.indexOf(item) == pos;
    //     })
    //     .join(''));
}
//getDuplicate(string)

// Kiểm tra xem 1 chuỗi có phải là đảo 1 chuỗi khác
function compareStr(strA, strB) {
    strA = strA.split('').reverse().join('')
    if (strA == strB) {
        console.log('areAnagram')
    } else {
        console.log('areNotAnagram');
    }
}
//compareStr('ab', 'ba')

// Đảo ngược 1 chuỗi
function reverseString(str) {
    let newString = ''
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    console.log(newString);

    // console.log(str.split('').reverse().join(''));
}
//reverseString(string)

// Đảo ngược 1 chuỗi sử dụng đệ quy
function reverseStringUseRecursion(str) {
    return str ? reverseStringUseRecursion(str.substr(1)) + str[0] : str;
}
// console.log(reverseStringUseRecursion(string));

// Kiểm tra chuỗi có phải là 1 số
// console.log(!isNaN('192'))      // true
// console.log(!isNaN('boo'))      // false
// console.log(!isNaN('100px'))    // false

// Kiểm tra chuỗi có chứa các số
function stringContainsNumber(str) {
    return /\d/.test(str);
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str.charAt(i)) && str.charAt(i) !== " ") {
            return true;
        }
    }
    return false;
}
//console.log(stringContainsNumber(string))

// 2 cách lấy phần tử của chuỗi
// console.log(string.charAt(1));
// console.log(string[1]);

// Đếm nguyên âm và phụ âm
function countNguyenVaPhu(str) {
    let countNguyen = 0
    let countPhu = 0
    for (i = 0; i < str.length; i++) {
        if ((str.charAt(i).match(/[aeiou]/))) {
            countNguyen++
        } else if ((str.charAt(i).match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/))) {
            countPhu++;
        }
    }
    console.log(countNguyen, countPhu);
}
//countNguyenVaPhu(string)

// Đếm số lần xuất hiện của 1 kí tự trong 1 chuỗi cho trước
function countCharacter(str, char) {
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++
        }
    }
    console.log(count);


}
//countCharacter(string, '')
console.log(("str1,str2,str3,str4".match(/,/g) || []).length); //logs 3

// Kiểm tra chuỗi đối xứng
console.log(string === string.split('').reverse().join(''));

// Add character from position
console.log(string.slice(0, 3) + "bar" + string.slice(3));

// Delete character from position
console.log(string.slice(0, 3) + string.slice(4))

// Xoá kí tự cho sẵn
console.log(string.replace('l', '')); // tìm thấy đầu tiên
console.log(string.replace(/l/g, '')); // xoá toàn bộ
console.log(string.replace(/\s+/g, '')); // loai bo khoang trang

let a = 1
let b = 2
b = [a, a = b][0]
console.log(a, b);