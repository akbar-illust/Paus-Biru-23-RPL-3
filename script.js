const semuaData = [
    {
        informasi: `Paus biru adalah mamalia laut dan paus balin. Dengan panjang maksimum yang dikonfirmasi mencapai 29,9 meter dan berat hingga 199 ton, paus ini merupakan hewan terbesar yang pernah ada.`,
        link: `https://id.m.wikipedia.org/wiki/Paus_biru`,
        animasi: `fade-up`
    },
    {
        informasi: `
        Paus biru terkadang berenang dalam kelompok kecil, tetapi lebih sering ditemukan sendiri atau berpasangan. Mereka biasanya menghabiskan musim panas untuk mencari makan di perairan kutub dan melakukan migrasi panjang menuju perairan khatulistiwa saat musim dingin tiba.
        <br><br>
        Paus biru biasanya berenang dengan kecepatan sekitar 5 mil per jam saat mencari makan dan bepergian, tetapi dapat melaju lebih dari 20 mil per jam untuk waktu yang singkat. Mereka termasuk hewan yang paling berisik di planet ini, mengeluarkan serangkaian denyut, erangan, dan rintihan, dan diperkirakan bahwa dalam kondisi oseanografi yang tepat, suara yang dikeluarkan oleh paus biru dapat didengar oleh paus lain hingga 1.000 mil jauhnya. Para ilmuwan berpikir mereka menggunakan vokalisasi ini untuk berkomunikasi dan—bersama dengan pendengaran mereka yang sangat baik—mungkin untuk menavigasi kedalaman laut yang gelap dengan sonar.
        <br><br>
        Makanan utama paus biru adalah krill—hewan kecil mirip udang, tetapi ikan dan copepoda (krustasea kecil) terkadang menjadi bagian dari makanan paus biru. Saat paus biru berburu makanan, mereka menyaring makanan dengan berenang ke arah kawanan besar krill dengan mulut terbuka dan menutup mulut di sekitar krill sambil mengembangkan lipatan tenggorokan. Setelah menutup, paus biru kemudian mendorong air yang terperangkap keluar dari mulut mereka dengan lidah mereka dan menggunakan lempeng balin mereka untuk menjaga krill tetap terperangkap di dalam.
        <br><br>
        Paus biru memiliki tubuh yang panjang dan bentuk tubuh yang ramping. Warna abu-abu kebiruan yang berbintik-bintik tampak biru muda di dalam air—maka dari itu mereka disebut paus biru. Pola berbintik-bintik tersebut bervariasi dan dapat digunakan untuk mengidentifikasi individu.
        <br><br>
        Paus biru Antartika umumnya lebih besar daripada subspesies paus biru lainnya. Misalnya, di Atlantik Utara dan Pasifik Utara, paus biru dapat tumbuh hingga sekitar 90 kaki dan beratnya lebih dari 100.000 pon, tetapi di Antartika, mereka dapat tumbuh hingga sekitar 110 kaki dan beratnya lebih dari 330.000 pon. Seperti banyak paus balin lainnya, paus biru betina umumnya lebih besar daripada jantan.
        `,
        link: `https://www-fisheries-noaa-gov.translate.goog/species/blue-whale?_x_tr_sl=en&_x_tr_tl=id&_x_tr_hl=id&_x_tr_pto=tc`,
        animasi: `fade-up`
    },
    {
        informasi: `
        Dari sekian banyak hewan yang tinggal di lautan, paus biru menjadi salah satu yang memesona karena ukurannya yang besar. Paus biru juga merupakan salah satu mamalia yang kehidupannya berada di laut. Namun, mamalia terbesar di dunia ini berstatus terancam punah.
        <br><br>
        Menurut laman Whale and Dolphin Conservation (WDC), populasi paus biru yang tersisa saat ini diperkirakan 10.000 hingga 25.000 ekor. Jumlah ini memang terlihat besar, namun populasi laut biru menurun drastis dibandingkan di masa lalu. Pada masa lalu terdapat 350.000 ekor paus biru yang berenang bebas di lautan.
        <br><br>
        Selain untuk kebutuhan pangan, perburuan dilakukan karena minyak yang dihasilkan paus bisa dimanfaatkan untuk berbagai aktivitas manusia, terutama untuk sumber bahan bakar.
        <br><br>
        Hal yang menjadikan paus biru terancam punah adalah tingkat regenerasi paus biru yang bisa dibilang kecil. Paus biru hanya bereproduksi setiap dua atau tiga tahun sekali.
        `,
        link: `https://www.kompas.com/cekfakta/read/2024/07/01/090900882/infografik--fakta-menarik-paus-biru-mamalia-terbesar-yang-terancam`,
        animasi: `fade-up`
    }
]

function dataDisplay() {
    const personalityElement = document.getElementById('personality');
    let personalityContent = '';

    for (const data of semuaData) {
        if (data.informasi !== undefined && data.informasi !== null) {
            const tampildata = data.informasi;
            const linkSource = data.link;
            const animasi = data.animasi;

            personalityContent += `
                <div class="grid justify-center select-none" data-aos="${animasi}" data-aos-duration="500" data-aos-delay="100" data-aos-offset="320">
                    <div class="card  bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 grid justify-center p-5 rounded-2xl">
                        <div>
                            <div class="">
                                ${tampildata}<br>
                            </div>
                            <br>
                            <div>
                                <a href="${linkSource}" target="_blank" class="text-sky-400 hover:text-gray-300">Sumber Informasi</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else {
            console.log('error');
        }
    }
    personalityElement.innerHTML = personalityContent;
}

dataDisplay();
