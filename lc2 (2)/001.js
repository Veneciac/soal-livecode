/*
===================
Jumlah Huruf Vocal
===================
[INSTRUCTIONS]

SumVocal adalah sebuah function yang menerima satu parameter berupa array of string.
function akan mereturn sebuah nilai jumlah dari huruf vocal yang ada di array tersebut.
Jika tidak ada angka ganjil dalam array tersebut, maka function akan mereturn angka -1

[RULE]
- Wajib menuliskan pseudocode atau algorithma. Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan sintaks .split()! .findIndex .indexOf .filter .map
- Dilarang menggunakan regex .match, .replace dan lainnya!
- Asumsi input selalu upper case atau huruf besar
- Jika tidak ada huruf vocal maka function akan mengembalikan nilai -1
[EXAMPLE]
SumVocal('ABCDEFG')

output: 2
*/
// ALGORITMA
// 1. Buat variabel 'vokal' yang berisi huruf vokal dengan tipe data string
// 2. Buat varialbel 'counter' yang berisi angka 0
// 3. Buat perulangan sepanjang parameter function
//     3.a Masi didalam perulangan tersebut, buat lagi perulangan sebagai pembanding


function SumVocal(array) {
    var vokal = 'AIUEO'
    var counter = 0
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < vokal.length; j++){
            if(array[i] === vokal[j]){
                counter++
            }
        }
    }
    if(counter === 0){
        return -1
    }
    return counter
}

console.log(SumVocal('AIUEO')); // 5
console.log(SumVocal('HACKTIV8')); // 2
console.log(SumVocal('JAKARTA')); // 3
console.log(SumVocal('QWRTYP')); // -1

