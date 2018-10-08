/**
Number Letters
--------------
Implementasikan function `numberLetters` untuk mengganti angka-angka
yang ada di dalam `str` menjadi sebuah huruf yang sesuai dengan aturan:
1 = i
4 = a
3 = e
7 = u
0 = o
Contoh ada di test cases

RULES:
  - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE
  - DILARAANG MENGGUNAKAN BUILT IN FUNCTION APAPUN (HANYA PERLU MENGGUNAKAN LOOP DAN CONDITION)
*/

/* ALGORITMA
1. Buat variabel baru bernama stri benilai ' ' untuk menampung hasil katanya nanti.
2. Buat looping untuk mengecek string dari awal ke akhir apakah ada angka atau tidak. Jika ada angka, maka lanjut ke step 2. Jika tidak ada lanjut ke step 3.
3. Buat conditional if jika ada angka dan assign angka pada huruf yang diinginkan. Seperti jika str index ke i adalah 1, maka stri sama dengan stri ditambah i. Jika str index ke i adalah 4 maka stri sama dengan stri ditambah a. begitu seterusnya sampai ke 0.
4. Jika tidak ada angka maka lanjut dan display string yang sudah diubah.
5. Selesai 
*/
function numberLetters (str) {
  var stri = ''
  for (let i = 0; i < str.length ; i++){
    if (str[i]== '1'){
      stri += 'i'
    }else if (str[i] == 4){
      stri += 'a'
    }else if (str[i]== '3'){
      stri += 'e'
    }else if(str[i] == '7'){
      stri += 'u'
    }else if (str[i] == '0'){
      stri += 'o'
    }else {
      stri += str[i]
    }
    
  }
  return stri
}

// Test cases
console.log(numberLetters('d1m1tr1w4hy7d1p7tr4')); // dimitriwahyudiputra
console.log(numberLetters('s3rg31dr4g7n0v')); // sergeidragunov
console.log(numberLetters('j1nk4z4m4')); // jinkazama
console.log(numberLetters('s7m3t4l')); // sumetal
console.log(numberLetters('m04m3t4l')); // moametal
console.log(numberLetters('')); //
