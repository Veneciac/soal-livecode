/**

Instruksi
=========
Buatlah sebuah function tampilAngkaGanjil yang menjalankan proses menampilkan angka-agka bernilai ganjil.
function tersebut menerima 1 parameter berupa string yang setiap karakternya mewakili satu angka

contoh 1:
test case : tampilAngkaGanjil('12345678')
output : '1357'
angka 1,3,5,7 merupakan angka ganjil
angka 2,4,6,8 merupakan angka genap
maka outputnya '1357'

contoh 1:
test case : tampilAngkaGanjil('1346789')
output : '1379'
angka 1,3,7,9 merupakan angka ganjil
angka 4,6,8 merupakan angka genap
maka outputnya '1379'
 */

function tampilAngkaGanjil(stringAngka){
  var baru = 
  for(var i =stringAngka[1]; i<=stringAngka.length; i++){
    var str=''
    if (stringAngka[i]%2!===0){
      str+= stringAngka[i]
      baru = str
    }
    else if (string.Angka[i]%2==0){
      console.log('')
    }
    console.log(str)
  }
}

function tampilAngkaGanjil(stringAngka){
  var str=''
for(var i =0; i<=stringAngka.length-1; i++){
  if (stringAngka[i]%2!==0){
    //str+= stringAngka[i]
    str = str + stringAngka[i]
    
  }
  else if (stringAngka[i]%2==0){
    str +=''
  }
}
console.log(str)
}
//Test case
tampilAngkaGanjil('12345678') // '1357'
tampilAngkaGanjil('1346789') // '1379'
tampilAngkaGanjil('1298967') // '1997'
tampilAngkaGanjil('43447453') // '3753'
tampilAngkaGanjil('46824') // ''

