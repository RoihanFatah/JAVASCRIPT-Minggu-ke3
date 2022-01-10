let tblmenu = [
    {idmenu:8, idkategori:17, menu:"Beef Burger",  gambar:"beefburger.jpg", harga:25000},
    {idmenu:9, idkategori:17, menu:"Chicken Wings",  gambar:"ayam.jpg", harga:15000},
    {idmenu:10, idkategori:17, menu:"Beef Steak",  gambar:"steak.jpg", harga:30000},
    {idmenu:11, idkategori:17, menu:"Papperoni Pizza",  gambar:"pizza.jpg", harga:25000},
    {idmenu:12, idkategori:17, menu:"Beef Taco",  gambar:"taco.jpg", harga:20000},
    {idmenu:13, idkategori:17, menu:"Spaghetti",  gambar:"spaghetti.jpg", harga:20000},
];

let tampil = tblmenu.map(function (kolom) {
    return `
    <div class="product-content">
        <div class="image">
            <img src="images/${kolom.gambar}" alt="laptop" />
        </div>
        <div class="title">
            <h3>${kolom.menu}</h3>
        </div>
        <div class="prize">
            <h4>Rp. ${kolom.harga}</h4>
        </div>
        <div class="btn-beli">
            <button data-idmenu=${kolom.idmenu}>BELI</button>
        </div>
    </div>`;
});

let isi = document.querySelector(".product");
isi.innerHTML = tampil;

let btnbeli = document.querySelectorAll(".btn-beli > button");

let cart = [];

for (let index = 0; index < btnbeli.length; index++) {
    btnbeli[index].onclick = function () {
        // console.log(btnbeli[index].dataset["idmenu"]);
        // cart.push(btnbeli[index].dataset["idmenu"]);
        
        tblmenu.filter(function (a) {
            if (a.idmenu == btnbeli[index].dataset["idmenu"]) {
                cart.push(a);
                console.log(cart);
            }
        })
    };
};

// console.log(cart);



