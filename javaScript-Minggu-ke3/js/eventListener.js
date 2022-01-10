// cara 1
function coba() {
    a = document.querySelector(".isi");
    a.innerHTML = "belajar event listener";

    console.log("coba event listener");
}
                    //event    //function
// judul.addEventListener("click", coba);

// cara 2
// judul.onmouseover = coba;

// cara 3
judul.onmouseover = function () {
    console.log("coba function anonymous");
};