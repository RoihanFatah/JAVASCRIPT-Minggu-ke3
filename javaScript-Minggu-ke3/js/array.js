let coba = function (){
    return "COBA FUNCTION";
}

let buah = ['apel', 'mangga', 'jeruk', 10, coba(), 
    tes = () => "HASIL RETURN ARROW FUNCTION", 
    function nama() {
        return "ROIHAN"
    }
];

// memanggil array
console.log(buah);

// memanggil salah satu isi array
console.log(buah[1]);

// memanggil seluruh isi array
for(let i in buah){
    console.log(buah[i]);
}

// memanggil function yang ada didalam array
console.log(buah[5]());

console.log(buah[6]());