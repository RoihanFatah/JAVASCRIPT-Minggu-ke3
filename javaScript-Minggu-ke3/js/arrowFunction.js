// ARROW FUNCTION V.1
let fungsi = function (nama) {
    console.log("belajar function" + nama);
}

// ARROW FUNCTION V.2
let contoh = (nama) => {
    console.log("belajar function" + nama);
}

// ARROW FUNCTION V.3 dua argumen
let plus = (a,b) => a + b;

// ARROW FUNCTION V.3 satu argumen
let hasil = a => a * 2;

// ARROW FUNCTION V.4 no argumen
let lagi = () => console.log("cob lagi");

let belajar = () => {
    console.log("BARIS SATU");
    console.log("BARIS DUA");
    console.log("BARIS TIGA");
}

// ARROW FUNCTION V.5
let nilai = 10;
let uji1 = (nilai < 7) ? () => console.log("GAGAL") : () => console.log("BERHASIL");
let uji = (nilai < 7) ? () => (predikat = "GAGAL") : () => (predikat = "BERHASIL");

// console.log(plus(20,10));
console.log(uji());