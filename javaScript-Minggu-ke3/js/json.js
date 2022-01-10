// fetch() : untuk mengambil dta dari API
document.querySelector("#klik").addEventListener("click", tampil);

function tampil(params) {
    let url = "js/tblmenu.json";

    fetch(url)
    .then(function (res) {
    return res.json();
    })

    .then(function (data) {
        let output = "<h1>DATA MENU</h1> <table><th>Menu</th> <th>Harga</th> <th>Warna</th>";
        data.forEach(element => {
            output += `<tr>
                <td>${element.menu}</td>
                <td>${element.harga}</td>
                <td>${element.warna[0]}</td>
            </tr>`;
        });
        output += "</table>";
        document.querySelector("#isi").innerHTML = output ;
    })

    
}


// CONTOH PENULISAN BENTUK JSON
// let tblmenu = [{

//     "idmenu" : 8,
//     "idkategori" : 17,
//     "menu" : "Beef Burger",
//     "harga" : 25000,
//     "warna" : ["merah", "kuning", "hijau"],
//     "stok" : true,
//     "keterangan" : null

// },
// {

//     "idmenu" : 9,
//     "idkategori" : 17,
//     "menu" : "Chicken Wings",
//     "harga" : 15000,
//     "warna" : ["merah", "kuning"],
//     "stok" : false,
//     "keterangan" : null

// }

// ]

// console.log(tblmenu[0].menu);