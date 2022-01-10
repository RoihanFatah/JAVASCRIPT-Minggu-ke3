// sessionStorage : hampir sama seperti localStorage, bedanya jika localStorage masih tetap 
// ada meskipun browser sudah ditutup. sessionStorage akan hilang jika browser sudah ditutup
console.log(localStorage.getItem("coba"));

sessionStorage.setItem("coba",200);

console.log(sessionStorage.getItem("coba"));

// sessionStorage.removeItem("coba");

sessionStorage.setItem("panjang", 500);

// sessionStorage.clear();

console.log(sessionStorage.length);

console.log(sessionStorage.key(1));