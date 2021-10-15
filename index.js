// var _ = require('lodash')

// /**
//  * 
//  * @param {Object} values
//  * Trả về mảng các giá trị bị Duplicate 
//  */
// const getDuplicatedValues = (values) => {
//     let s = new Set(), dup = [], ds = new Set();
//     for (let i = 0; i < values.length; i++) {
//         const element = values[i];
//         if (!s.has(element)) {
//             s.add(element)
//         } else if (!ds.has(element)) {
//             ds.add(element)
//             dup.push(element)

//         }
//     }
//     console.log("s", s)
//     console.log('dup', dup)
//     console.log('ds', ds)
// }

// // getDuplicatedValues([
// //     {
// //         name: 'a',
// //         age: 1
// //     },
// //     {
// //         name: 'b',
// //         age: 1
// //     },
// //     {
// //         name: 'a',
// //         age: 1
// //     },
// //     {
// //         name: 'b',
// //         age: 2
// //     },
// //     {
// //         name: 'a',
// //         age: 1
// //     },
// // ])

// // const arr = [1, 1, 2, 3, 4, 4, 5, 5, 6, 6, 6];
// // let max = arr[0]
// // let maxSub1
// // for (let i = 1; i < arr.length; i++) {
// //     if (arr[i] > max) {
// //         maxSub1 = max
// //         max = arr[i]
// //     } else if (arr[i] > maxSub1 && arr[i] !== max) {
// //         maxSub1 = arr[i]
// //     }
// // }
// // console.log(maxSub1)

// const bnb = {
//     supported_browers: {
//         IE: {
//             uuid: 'abc',
//             minVersion: 1
//         },
//         Chrome: {
//             uuid: 'abc',
//             minVersion: 2
//         }
//     },
//     upsupported_or_non_browers: [
//         {
//             uuid: 'nas',
//             desc: 'asasdsadsads'
//         },
//         {
//             uuid: 'ert',
//             desc: 'ewrsdjhxdcbksjdasijh'
//         },
//         {
//             uuid: 'ewt',
//             desc: 'ewrsdjhxdcbksjdasijh'
//         }
//     ]
// }

// // const arr1 = _.map(bnb.supported_browers, 'uuid')
// // console.log(arr1)
// // const arr2 = _.map(bnb.upsupported_or_non_browers, 'uuid')
// // console.log(arr2)
// // const joinArr = arr1.concat(arr2)
// // console.log(joinArr)

// const sup = bnb.supported_browers
// const unsup = bnb.upsupported_or_non_browers
// let merg = []
// console.log('CCCCCCCCC', sup)
// merg = merg.concat(_.values(sup)).concat(unsup)
// console.log('AAAAAAAAA', merg)
// console.log('BBBBBBBBB', _.values(sup))
// console.log(_.values(sup).concat(unsup))

// const mang = [
//     {
//         uuid: 'asdasd'
//     }
// ]
// mang.push({ uuid: '' })
// mang[1].uuid = 'asdasdasdsad'
// const reToMatch = new RegExp(['/host \=\=\= \"admin.menlosecurity.com/',
//     '/\"[\S\s]*\"menlosecurity.com\"/ '].join(''));

// function find_max(nums) {
//     nums = [1, 2, 3, 4, 5, 6, 0, 2];
//     let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
//     for (let num of nums) {
//         if (num > max_num) {
//             max_num = num
//         }
//     }
//     console.log(max_num);
// }

// find_max()

// try {
//     const m = 1;
//     const n = m + z
//     console.log(n)
// } catch (error) {
//     console.log(error.name)
// }

// async function name1() {
//     await setTimeout(() => {
//         console.log("object")
//     }, 1000)
//     console.log('object2')
// }
// name1()

// console.log(e);
// let e = 2

for (var i = 0; i < 3; i++) {
    console.log('AAA', i);
    setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
}