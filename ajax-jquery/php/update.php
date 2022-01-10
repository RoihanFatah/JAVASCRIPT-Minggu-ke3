<?php 

    require_once "koneksi.php";

    $data = stripslashes(file_get_contents("php://input"));
    $dataPelanggan = json_decode($data,true);

    $idpelanggan = $dataPelanggan['idpelanggan'];
    $pelanggan = $dataPelanggan['pelanggan'];
    $alamat = $dataPelanggan['alamat'];
    $telp = $dataPelanggan['telp'];


    if (!empty($pelanggan) and !empty($alamat) and !empty($telp)) {

        $sql = "UPDATE tblpelanggan 
        SET pelanggan = '$pelanggan',
        alamat = '$alamat',
        telp = '$telp'
        WHERE idpelanggan=$idpelanggan";
        // -- ('', '$pelanggan', '$alamat', '$telp', '', '','')";

        if ($result = mysqli_query($con, $sql)) {
            echo "Data Sudah di Update";
        } else {
            echo "Data Gagal di Update";
        };
    } else {
        echo "DATA BELUM LENGKAP";
    }

    
    
    

?>