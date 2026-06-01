/* Soal 2 
pada soal yg kedua, kalian harus belajar method `splice`, `slice`, `join`, 'split', dan lainnya

let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input) {

}

dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */

let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
function dataHandling(input) {
    // for(let i=0; i<input.length;i++){
    //     console.log(input[i]);
    // }
    input.splice(1,1,"Roman Alamsyah Elsharawy");
    input.splice(2, 1, "Provinsi Bandar Lampung");
    input.splice(4,1, "Pria");
    input.push("SMA Internasional Metro")

    let namaBulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    let Bulan = input[3].split('/');

    let date = input[3].split('/');
    let date_f = [date[2], date[0], date[1]];



    console.log(input);
    console.log(namaBulan[Bulan[1] - 1]);
    console.log(date_f);
    console.log(input[3].split('/').join("-"));
    console.log(input[1].slice(0,15));
}

dataHandling(input);
