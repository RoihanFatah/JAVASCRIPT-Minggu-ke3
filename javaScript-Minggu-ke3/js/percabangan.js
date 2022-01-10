if (true) {
    console.log("dijalankan jika benar");
} else {
    console.log("dijalankan jika salah");
}

let nilai = 100;
let standar = 60;
let baik = "lulus";
let gagal = "tidak luulus";
let batasatas = 100;
let batasbawah = 0;
let peringatan = "NILAI SALAH";

if (nilai <= batasatas && nilai >= batasbawah) {
    if (nilai >= standar) {
        console.log(baik);
    } else {
        console.log(gagal);
    }
} else {
    console.log(peringatan);
}

