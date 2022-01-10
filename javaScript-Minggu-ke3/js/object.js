// object bisa diisi dengan variabel, array, function
const objek = {
    // variabel
    nama : "ROIHAN",
    telp : 0812345678,
    boleh : true,

    // array
    buah : ['apel', 'jeruk', 'mangga'],

    // function
    coba : function () {
        return "coba function dalam objek";
    },

    // string sebagai variabel
    "tulis aja" : 12345,



};

// menampilkan object
console.log(objek);

console.log("--------------------------");

// menampilkan variabel yang ada didalam object
console.log(objek.nama);
console.log(objek.telp);

// menampilkan array yang ada didalam object
console.log(objek.buah[2]);

// menampilkan function yang ada didalam object
console.log(objek.coba());

// menampilkan string sebagai variabel yang ada didalam objek
console.log(objek["tulis aja"]);