let nilai = [
    {nama:"roihan", ipa:90, bahasa:70, matematika:70},
    {nama:"deny", ipa:80, bahasa:90, matematika:60},
    {nama:"fance", ipa:75, bahasa:70, matematika:90},
    {nama:"jalu", ipa:90, bahasa:70, matematika:90},
];

let nama = ["roihan", "deny", "fance", "jalu"];

let mapel = ['ipa', 'bahasa', 'matematika'];

// .push : untuk menambahkan isi array, menambahkan dari belakang
// nama.push("dimas", "ilham");

// .pop : untuk mengambil item dari suatu array, mengambil dari belakang
// console.log(nama.pop());

// .shift() : untuk mengambil item dari suatu array, mengambil dari depan/awal
// console.log(nama.shift());

// unshift : untuk menambahkan isi array, menambahkan dari depan/awal
// nama.unshift("galih");

// splice (seperti CUT) : untuk mengambil item dari array, item tersebut dihapus dari array setelah diambil
// console.log(nama.splice(0, 2));

// slice (seperti COPY) : untuk mengambil item dari array, item yang diambil masih ada di array sebelumnya
// console.log(nama.slice(0,2))

// concat() : menggabungkan beberapa array menjadi satu array
// CARA 1
// console.log(nama.concat(mapel));

// CARA 2
// console.log(nama.concat(['ips', 'pkn', 'sejarah']));

// forEach() : hampir sama seperti for()
// CARA 1
// nama.forEach(function (a) {
//     console.log(a);
// })

// CARA 2
// nama.forEach(a => console.log(a));

// filter() : untuk mem filter/menyaring item array sesuai kondisi yang kita butuhkan
// CARA 1
// nilai.filter(function (a) {
//     if (a.ipa > 80) {
//         console.log(a.nama);
//     }
// })

// CARA 2
// nilai.filter(a => a.ipa > 80 ? console.log(a) : null);

// nilai.filter(a => a.ipa > 80 && a.matematika > 70 ? console.log(a) : null);

// map() : untuk mengambil id dari sebuah array lalu mengubahnya menjadi array baru

// CARA 1
// let siswa = nilai.map(function(a) {
//     return a.nama;
// })

// CARA 2 menggunakan arrow function
// let siswa = nilai.map(a => [a.nama, a.ipa, a.bahasa ]);

// console.log(siswa);

// sort() : untuk mengurutkan id di sebuah array
// mapel.sort();

// console.log(mapel);

// reduce() : untuk menjumlahkan value dari id sebuah array

// CARA 1
// let hasil = nilai.reduce(function(a, b) {
//     return a = a + b.ipa;
// }, 0);

// CARA 2 menggunakan arrow function
let hasil = nilai.reduce( (a,b) => (a = a + b.bahasa), 0 );

console.log(hasil);


// console.log(nilai[0].nama);
// console.log(nama);