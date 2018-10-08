/**
Reverse Odd
Implementasikan function reverseOdd untuk membalikkan setiap elemen string dengan urutan genap
yang ada di dalamnya.
Contoh:
- input: ['awtian', 'raijin', 'thunderkeg']
  output: ['awtian', 'nijiar', 'thunderkeg']
- input: ['alisa', 'xiaoyu', 'nina', 'lili']
  output: ['alisa', 'uyoaix', 'nina', 'ilil']
- input: []
  output: []
Aturan coding:
WAJIB MENYERTAKAN ALGORITHMA ATAU PSEUDOCODE
Dilarang menggunakan built-in function:
- .map()
- .filter()
- .reduce()
- .reverse()
- .split()
- .join()
*/

// ALGORITMA
// 1. Buat looping index arr
// 2. Jika looping index arr adalah angka genap
//   2.a buat perulangan dan balik kata tersebut
//   2.b tampung kata tersebut
//   2.c hapus kata dalam array yang mengandung angka genap
//   2.d push kata yang telah dibalik kedalam array
// 3. Tampilkan arr

// function reverseOdd (arr) {
//   // Code disini
//   var strarr = []
//   for (var i = 0; i < arr.length; i++){
//     if(i%2 !== 0){
//       var tampungbalik = ''
//       for(var j = arr[i].length - 1; j >= 0; j--){
//       tampungbalik += arr[i][j]
//       }
//       strarr.push(tampungbalik)
//     }
//     else{
//       strarr.push(arr[i])
//     }
//   }
//   return strarr
// }

// console.log(reverseOdd(['clinkz', 'jahrakal', 'kael']));
// // [ 'clinkz', 'lakarhaj', 'kael' ]

// console.log(reverseOdd(['moonfang', 'nightshade', 'lightbringer', 'strygwyr']));
// // [ 'moonfang', 'edahsthgin', 'lightbringer', 'rywgyrts' ]

// console.log(reverseOdd([]));
// // []

function reverseEven (arr) {
  // Code disini
  var names = arr
  for (var i = 0; i < names.length; i++){
    if(i%2 === 0){
        var counter = names[i].length-1
        var tempStr = ''
        while(counter >= 0){
          tempStr = tempStr + names[i][counter]
          counter = counter - 1
        }
        names[i] = tempStr
      }
    }
  return names
}

console.log(reverseEven(['clinkz', 'jahrakal', 'kael']));
// [ 'clinkz', 'lakarhaj', 'kael' ]

// console.log(reverseOdd(['moonfang', 'nightshade', 'lightbringer', 'strygwyr']));
// // [ 'moonfang', 'edahsthgin', 'lightbringer', 'rywgyrts' ]

// console.log(reverseOdd([]));
// // []