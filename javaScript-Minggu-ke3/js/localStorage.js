// localStorage.setItem : hampir sama seperti cookies, namun cookies dikerjakan hingga server, localStorage hanya dikerjakan sampai script js saja
localStorage.setItem("coba", 100);
localStorage.setItem("tes", "saya belajar js");

// getItem(key) : mengambil value dari key, localStorage
console.log(localStorage.getItem("coba"));
console.log(localStorage.getItem("tes"));

// removeItem(key) : untuk menghapus key beserta valuenya
// localStorage.removeItem("coba");

// clear() : menghapus seluruh isi dari localStorage
// localStorage.clear();

// key(index) : untuk mengambil key sesuai dengan index yang dimasukkan
console.log(localStorage.key(0));

// length : digunakan untuk menghitung jumlah localStorage yang dibuat 
console.log(localStorage.length);