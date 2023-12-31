function searchHospital() {
    var input, filter, hospitalList, hospitals, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    hospitalList = document.querySelector(".hospital-list");
    hospitals = hospitalList.getElementsByClassName("hospital");

    for (i = 0; i < hospitals.length; i++) {
        var h2 = hospitals[i].getElementsByTagName("h2")[0];
        txtValue = h2.textContent || h2.innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            hospitals[i].style.display = "";
        } else {
            hospitals[i].style.display = "none";
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // URL API atau link data JSON
    var apiUrl = 'https://rs-bed-covid-api.vercel.app/api/get-hospitals?provinceid=51prop&cityid=5171&type=1';

    // Fungsi untuk memuat dan menampilkan data JSON dari API
    function fetchData() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => displayData(data))
            .catch(error => console.error('Error fetching data:', error));
    }

    // Fungsi untuk menampilkan data JSON
    function displayData(data) {
        var container = document.getElementById("dataContainer");
        var html = "<tr>";

        data.forEach(function (item) {
            html += "<th><strong>" + item.nama + "</strong><br>Alamat: " + item.alamat + "<br>Telepon: " + item.telepon + "<br>Info: " + item.info +"</th>";
        });

        html += "</tr>";
        container.innerHTML = html;
    }

    // Panggil fungsi fetchData untuk memuat data dari API
    fetchData();
    console.log();
});
