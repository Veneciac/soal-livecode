
/*
==================================
Array Mastery: Second Largest
==================================
Nama:________
[INSTRUKSI]
Function secondLargest akan menerima satu parameter berupa array yang berisikan angka, dimana dengan asumsi kemungkinan angka dari 0 - 999, dan angka dalam array minimal 3 angka, dan tidak ada angka yang bernilai sama (ini adalah info tese case, bukan harus divalidasi/dicek).
secondLargest akan mengembalikan angka yang kedua terbesar dari array tersebut.
[CONTOH]
input: [4, 2, 5, 1]
output: 4

[RULE]
- Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan method .filter, atau .reduce!
- Dilarang menggunakan .sort!
*/

/* PSEUDOCODE 
FOR each object in numbers
  STORE 'tampung' with 0
  FOR each object in numbers 
    IF index j of numbers is smaller than index j+1 of numbers // numbers next to numbers[j]
      SET 'tampung' equal to index j of numbers // numbers[j]
      SET numbers[j] equal to numbers[j+1] // SET index j of numbers equal to index j+1 of numbers
      SET numbers[j+1] equal to 'tampung' // SET index j+1 of numbers equal to 'tampung'
    END of if 
  END of loop
END of loop
RETURN index 1 of numbers 

*/

function secondLargest(numbers) {
  for(let i = 0; i < numbers.length; i++){
        var tampung = 0
        for(let j = 0; j < numbers.length; j++){
            if(numbers[j] < numbers[j+1]){
                tampung = numbers[j]
                numbers[j] = numbers[j+1]
                numbers[j+1] = tampung
            }
        }
  }
  return numbers[1]
}

// TEST CASES
console.log(secondLargest([5, 2, 1, 4])); // 4
console.log(secondLargest([999, 5, 0, 1, 4, 998])); // 998
console.log(secondLargest([15, 32, 11, 14])); // 15
console.log(secondLargest([5, 4, 3, 2, 1, 0])); // 4
console.log(secondLargest([123, 321, 143, 313])); // 313
