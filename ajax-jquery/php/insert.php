<?php 

    require_once "koneksi.php";

    $data = stripslashes(file_get_contents("php://input"));
    $dataPelanggan = json_decode($data,true);

    $pelanggan = $dataPelanggan['pelanggan'];
    $alamat = $dataPelanggan['alamat'];
    $telp = $dataPelanggan['telp'];


    if (!empty($pelanggan) and !empty($alamat) and !empty($telp)) {

        $sql = "INSERT INTO tblpelanggan VALUES('', '$pelanggan', '$alamat', '$telp', '', '','')";

        if ($result = mysqli_query($con, $sql)) {
            echo "Data Sudah di Simpan";
        } else {
            echo "Data Gagal di Simpan";
        };
    } else {
        echo "DATA BELUM LENGKAP";
    }

    
    
    

?>