const hari = 8;
let hasil;

switch (hari) {
    case 1:
        hasil = "minggu";
        break;
    case 2:
        hasil = "senin";
        break;
    case 3:
        hasil = "selasa";
        break;
    case 4:
        hasil = "rabu";
        break;
    case 5:
        hasil = "kamis";
        break;
    case 6:
        hasil = "jumat";
        break;
    case 7:
        hasil = "sabtu";
        break;

    default:
        hasil = "HARI TIDAK ADA";
        break;
}

console.log(hasil);

const bln = "desember";
let bulan;

switch (bln) {
    case "januari":
        bulan = 1;
        break;
    case "februari":
        bulan = 2;
        break;
    case "maret":
        bulan = 3;
        break;
    case "april":
        bulan = 4;
        break;

    default:
        bulan = "belum dibuat";
        break;
}

console.log(bulan);