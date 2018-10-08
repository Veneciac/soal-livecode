/*
 Buatlah sebuah algoritma atau pseudocode untuk menghitung tarif tol dengan ketentuan sebagai berikut
  1. Tol dalamkota berlaku tarif flat sesuai tipe kendaraan sebagai berikut
    - sedan, minibus, van Rp. 9.500,00
    - bus, trek, mobilbox Rp. 11.000,00
    - trek gandeng Rp. 15.000,00
  2. Tol antar kota berlaku tarif flat sesuai tipe kendaraan sebagai berikut
    - sedan, minibus, van Rp. 11.500,00
    - bus, trek, mobilbox Rp. 13.000,00
    - trek gandeng Rp. 18.000,00
*/

Pseudocode

1 

STORE 'dalam' wtihout any value 
STORE 'mobil biasa dalam' with 9500
STORE 'bus dalam' with 11000
STORE 'trek dalam' with 15000

STORE 'luar' without any value
STORE 'mobil biasa luar' with 11500
STORE 'bus luar' with 13000
STORE 'trek luar' with 18000

STORE 'total' without any value 

STORE 'MOBIL' without any value
IF 'MOBIL' equal to 'dalam'
  plus 9500
ELSE IF 
  plus 11500
SET 'MOBIL' to calculation above


STORE 'bus' without any value
IF 'bus' equal to 'dalam'
  plus 11000
ELSE IF 
  plus 13000
SET 'bus' to calculation above

STORE 'truk' without any value
IF 'truk' equal to 'dalam'
  plus 15000
ELSE IF 
  plus 18000
SET 'truk' to calculation above

