/*
==================================
Array Mastery: Fish Filter
==================================
[INSTRUKSI]
Fish Filter merupakan fungsi untuk menyaring data kumpulan spesies laut dan akan mengembalikan spesies
yang berisi kumpulan ikan dalam bentuk string
[CONTOH]
input: ['ikan indosiar', 'gurita', 'cumi-cumi', 'ikan bandeng']
output: ikan indosiar, dan ikan bandeng
[RULE]
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan .map, .splice, .slice, .filter, dan .reduce!
*/

function fishFilter(students) {
  // Code here
var ikanarr = []
 for(var i = 0; i < students.length; i++){
   var kataIkan = ''
    for(var j = 0; j < 4; j++){
      {
        kataIkan += students[i][j]
      }
      if(kataIkan === 'ikan'){
        ikanarr.push(students[i])
      }
    }
   }
   if(ikanarr[0] === undefined){
     return 'tidak ada data'
   }
   var tampung = ''
   for(l = 0; l < ikanarr.length; l++){
     if(l === ikanarr.length-1){
       tampung += 'dan ' + ikanarr[l]
     }else{
       tampung += ikanarr[l] + ', '
     }
   }
   return tampung
 }

// TEST CASES
console.log(fishFilter(['ikan indosiar', 'gurita', 'cumi-cumi', 'ikan bandeng'])); // ikan indosiar, dan ikan bandeng
console.log(fishFilter(['gurita', 'ikan kerapu', 'ikan hiu'])); // ikan kerapu, dan Ikan hiu
console.log(fishFilter(['bintang laut', 'spongebob', 'patrick', 'ikan paus', 'ikan hiu', 'ikan tongkol'])); // ikan paus, ikan hiu, dan ikan tongkol
console.log(fishFilter(['gurita', 'udang'])); // tidak ada data