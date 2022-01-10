document.querySelector("#klik").addEventListener("click",tampil);

function tampil(params) {
    let url = "https://jsonplaceholder.typicode.com/todos/";
    // mengambil dari URL
    fetch(url)

    // merubah yang diambil
    // cara 1 : anonymous function

    // .then(function (res) {
    //     return res.json();
    // })

    // cara 2 : arrow function

    .then(res => res.json())

    // menampilkan data yang diambil
    // cara 1 : anonymous function

    // .then(function (data) {
    //     console.log(data);
    // })

     // cara 2 : arrow function
    
    .then(data => {
        // console.log(data);
        let out = "<ul>";
        data.forEach(el => {
            out += `<li>${el.title}</li>`
            // console.log(el.title);
        });

        out += "</ul>";
        document.querySelector("#isi").innerHTML = out;
    })
}