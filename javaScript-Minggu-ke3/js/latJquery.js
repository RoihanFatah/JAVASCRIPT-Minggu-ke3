// $( document ).ready(function() {
//     console.log( "ready!" );
// });

// block code yang akan menggunnakan jQuery, harus ditulis didalam sini
$(function() {
    console.log( "ready!" );
});

// sama seperti document.queryselector namun lebih pendek dan mudah
$(function() {
    $("#isi").html("<h1>Belajar Jquery</h1>");

// event click di jQuery
    $(("#klik")).click(function (e) { 
        e.preventDefault();
        alert("belajar js");
    });

    $("#isi").mouseleave(function () { 
        alert("mouse leave");
    });

});
