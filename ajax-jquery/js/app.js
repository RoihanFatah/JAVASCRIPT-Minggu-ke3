$(document).ready(function () {
    let id = "";
    let pelanggan = "";
    let alamat = "";
    let telp = "";

    // function untuk tombol simpan
    $("#submit").click(function (e) { 
        e.preventDefault();

        id = $("#id").val();
        pelanggan = $("#pelanggan").val();
        alamat = $("#alamat").val();
        telp = $("#telp").val();

        if (id == "") {
            insertData();
        } else {
            updateData();
        }

        $("#id").val("");
        $("#pelanggan").val("");
        $("#alamat").val("");
        $("#telp").val("");


    });

    // $("#btn-tambah").click(function (e) { 
    //     e.preventDefault();

    //     // alert("tes");

    //     $("#id").val("");
    //     $("#pelanggan").val("");
    //     $("#alamat").val("");
    //     $("#telp").val("");


    // });

    // event untuk button delete
    $("tbody").on("click", "#btn-del", function () {
        let id = $(this).attr("data-id");
        deleteData(id);
    });

    // event untuk button update
    $("tbody").on("click", "#btn-ubah", function () {
        let id = $(this).attr("data-id");
        // $("#titel").html("<h5>Update Data</h5>");
        selectUpdate(id);
    });

    // function untuk selectUpdate
    function selectUpdate(id) {
        let idpelanggan = {
            idpelanggan : id
        }

        $.ajax({
            type: "post",
            url: "php/selectUpdate.php",
            cache: false,
            data: JSON.stringify(idpelanggan),
            // dataType: "dataType",
            success: function (response) {
                let data = JSON.parse(response);

                $("#id").val(data.idpelanggan);
                $("#pelanggan").val(data.pelanggan);
                $("#alamat").val(data.alamat);
                $("#telp").val(data.telp);

            }
        });

        selectData();
    }

    // function SELECT
    function selectData() {
        $.ajax({
            type: "get",
            url: "php/select.php",
            cache : false,
            dataType: "json",
            success: function (response) {
                let out = "";
                let no = 1;
                $.each(response, function (key, val) { 
                    out += `<tr>
                    <td>${no++}</td>
                    <td>${val.pelanggan}</td>
                    <td>${val.alamat}</td>
                    <td>${val.telp}</td>
                    <td><button type="button" class="btn btn-danger" id="btn-del" data-id=${val.idpelanggan} >Delete</button></td>
                    <td><button type="button" class="btn btn-warning" id="btn-ubah" data-id=${val.idpelanggan} >Update</button></td>
                    </tr>`;
                });

                $("#isidata").html(out);
            }
        });
    }

    // function INSERT
    function insertData() {
        let dataPelanggan = {
            pelanggan : pelanggan,
            alamat : alamat,
            telp : telp
        }

        $.ajax({
            type: "post",
            url: "php/insert.php",
            cache: false,
            data: JSON.stringify(dataPelanggan),
            // dataType: "dataType",
            success: function (response) {
                alert(response);
            }
        });

        selectData();
    }

    // function DELETE
    function deleteData(id) {
        let idpelanggan = {
            idpelanggan : id
        }

        $.ajax({
            type: "post",
            url: "php/delete.php",
            cache: false,
            data: JSON.stringify(idpelanggan),
            // dataType: "dataType",
            success: function (response) {
                alert(response);
            }
        });

        selectData();
    }
    
    function updateData() {
        let dataPelanggan = {
            idpelanggan : id,
            pelanggan : pelanggan,
            alamat : alamat,
            telp : telp
        }

        $.ajax({
            type: "post",
            url: "php/update.php",
            cache: false,
            data: JSON.stringify(dataPelanggan),
            // dataType: "dataType",
            success: function (response) {
                alert(response);
            }
        });

        selectData();
    }

    selectData();
});