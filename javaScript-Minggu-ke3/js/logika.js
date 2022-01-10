let a = true;
let b = false;
let c = true;
let d = false;

// OR : akan bernilai true jika salah satu dari argumen bernilai true
console.log(a || b );
console.log(b || a);
console.log(b || d);
console.log(b || d || a);

// AND : akan bernilai false jika salah satu argumen bernilai false
console.log(a && b && c);

let x = 8;
let y = 7;

// PERBANDINGAN
console.log(x > y);
console.log(x < y);
console.log(x == y);
// LEBIH BESAR SAMA DENGAN
console.log(x >= y);
// LEBIH KECIL SAMA DENGAN
console.log(x <= y);

let lima = "5";
let limo = 5 ;

// IDENTIK : tipe data dan isinya harus sama
console.log(lima === limo);