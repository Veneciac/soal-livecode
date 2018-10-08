/*
==================================
Array Mastery: Group Odd Evens
==================================

[INSTRUKSI]
Function groupOddEven akan menerima satu parameter berupa array yang berisi number.
Function akan mengelompokkan setiap number yang ganjil (odd) dan setiap number yang genap (even),
dan akan mereturn sebuah string dengan format berikut:
"ODDS: <OddNum1>,<OddNum2>,<OddNum3> EVENS: <EvenNum1>,<EvenNum2>,<EvenNum3>"
aturan:
  - Apabila tidak ada angka ganjil, hanya tampilkan:
  "EVENS: <EvenNum1>, <EvenNum2>"
  - Apabila tidak ada angka genap, hanya tampilkan:
  "ODDS: <OddNum1>, <OddNum2>"
  - Apabila tidak ada angka sama sekali, tampilkan string kosong!
  - Angka tidak perlu diurutkan!
[CONTOH]
input: [1, 5, 8, 2, 3]
output: "ODDS: 1, 5, 3 EVENS: 8, 2"
input: [1, 1, 1]
output: "ODDS: 1, 1, 1"
input: [2, 8, 10]
output: "EVENS: 2, 8, 10"
[RULE]
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan .map, .filter, dan .reduce!
*/

function groupOddEven(students) {
  if(students.length < 1){
    return []
  }

  var odd = 'ODDS: '
  var even = 'EVENS: '
  for(let i = 0; i < students.length; i++){
    if(students[i] % 2 !== 0){
      odd += students[i] + ', '
    }else{
      even += students[i] + ', '
    }
  }
  
  var tampungOdd = ''
  var tampungEven = ''
  for(let i = 0; i < odd.length-2; i++){
    tampungOdd += odd[i]
  }
  for(let j = 0; j < even.length-2; j++){
    tampungEven += even[j]
  }
  
  var hasil = ''
  if(tampungOdd.length > 6 && tampungEven.length > 7){
    hasil += tampungOdd + ' ' + tampungEven
  }else if(tampungOdd.length > 6 || tampungEven.length < 7){
    hasil += tampungOdd
  }else if(tampungOdd.length < 6 || tampungEven.length > 7){
    hasil += tampungEven
  }

  return hasil
}
  
// TEST CASES
console.log(groupOddEven([1, 5, 8, 2, 3])); // "ODDS: 1, 5, 3 EVENS: 8, 2"
console.log(groupOddEven([1, 1, 1])); // "ODDS: 1, 1, 1"
console.log(groupOddEven([2, 8, 10])); // "EVENS: 2, 8, 10"
console.log(groupOddEven([2, 111])); // "ODDS: 111 EVENS: 2"
console.log(groupOddEven([])); // ""
