// mobile navbar menu
function toggleMenu() {
    const navigation = document.querySelector('.main-navigation');
    navigation.classList.toggle('mobile-menu-open');
  }

//page berita agar bisa diklik tiap div
document.addEventListener('DOMContentLoaded', function () {
    var articles = document.querySelectorAll('.article');

    articles.forEach(function (article) {
        article.addEventListener('click', function () {
            var link = this.querySelector('a');
            if (link) {
                var linkUrl = link.getAttribute('href');
            }
        });
    });
});

const BASE_URL = "https://be-2-medan-29-production.up.railway.app/";

// SUBMIT EMAIL MASIH REVISI
function submitEmail(event) {
    const email = document.querySelector("#email");

    if (email.value.trim() === '') {
        alert("Email must be filled in!");
        return; // Menghentikan pengiriman jika kolom email kosongcd
    }


    fetch(`${BASE_URL}/store-email`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: email.value,
        }),
    })
    .then((response) => response.json())
    .then((response) => {
        alert("Email successfully sent!")
        console.log(response);
    })
    .catch((error) => {
        console.error(error);
    });
}


// Fetch list news and render
fetch("https://be-2-medan-29-production.up.railway.app/api/v1/posts")
.then(res => res.json())
.then(data => renderDataToContent(data.data));

function renderDataToContent(articles){
    // get element content
    let parentElement = document.getElementById("berita-list");

    for (article of articles){
        console.log(article);
        
        parentElement.innerHTML+=`<div class="berita-card" onclick="redirectToDetail(${article.id})">
        <img src=${article.foto}>
        <div class="berita-caption">
          <h5 style="color: #d6816e;">${getCategoryName(article.kategori_id)}</h5>
          <h3>${article.judul}</h3>
          <h5 style="font-weight: bold;">${article.pembuat}, ${article.tanggal}</h5>
          <div>
            <p style="font-size: small;">
              ${article.deskripsi.substring(0,290)}
            </p>
            <a href='#' style="font-size: small;"> Baca Selengkapnya</a>
          </div>
        </div>
      </div>`
       
    }
}

function redirectToDetail(newsId) {
    // You can use window.location.href to redirect to the detail page
    window.location.href = './halaman-berita.html?id=' + newsId;
}

function getCategoryName(id){
    switch (id) {
        case 1:
            return "Budaya";
            break;
        case 2:
            return "Fashion";
            break;
        case 3:
            return "Gaya Hidup Sehat";
            break;
        case 4:
            return "Kecantikan";
            break;
        case 5:
            return "Kuliner";
            break;
        case 6:
            return "Travel";
            break;

    }
}
