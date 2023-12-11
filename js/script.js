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


// Fetch list news and render
fetch("https://be-2-medan-29-production.up.railway.app/api/v1/posts")
.then(res => res.json())
.then(data => renderDataToContent(data.data));

function renderDataToContent(articles){
    // get element content
    let parentElement = document.getElementById("berita-list");
    let parentElement2 = document.getElementById("container-berita"); 
    let parentElement3 = document.getElementById("rekomendasi-list");
    let parentElement4 = document.getElementById("tren-list");

    for (article of articles){
        console.log(article);
        
        // berita terkini
        if (article.id == 12){
            parentElement2.innerHTML+=`<div class="berita-terkini-box" onclick="redirectToDetail(${article.id})">
                <img src=${article.foto}>
                <div class="berita-terkini-caption">
                    <h5>${getCategoryName(article.kategori_id)}</h5>
                    <h1>${article.judul}</h1>
                    <h4>${article.pembuat}, ${article.tanggal}</h4>
                    <div>
                        <p>
                        ${article.deskripsi.substring(0,880)}...
                        </p>
                        <a style="margin: 0;"> Baca Selengkapnya</a>
                    </div>
                </div>
            </div>`
        }

        // list berita
        if (article.id % 7 === 0) {
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
                <a style="font-size: small;"> Baca Selengkapnya</a>
            </div>
            </div>
        </div>`
        }

        // list tren
        if (article.id % 6 === 0) {
            parentElement4.innerHTML+=`<div class="tren-card" onclick="redirectToDetail(${article.id})">
            <div class="tren-caption">
              <h5>${article.judul}</h5>
              <h6 style="font-weight: bold;">${article.pembuat}, ${article.tanggal}</h6>
            </div>
          </div>`
        }

        // list rekomendasi
        if (article.id % 5 === 0) {
            parentElement3.innerHTML+=`<div class="rekomen-card" onclick="redirectToDetail(${article.id})">
            <img src=${article.foto}>
            <div>
              <h5>${getCategoryName(article.kategori_id)}</h5>
              <h3>${article.judul}</h3>
              <h5 style="font-weight: bold;">${article.pembuat}, ${article.tanggal}</h5>
            </div>
          </div>`
        }
       
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

function postSubmitEmail(event) {
    event.preventDefault();
    console.log("test");
    
    const form = event.target;
    const email = form.querySelector('[name="email"]').value;
    
    const data = {
        email: email,
    };
    
    fetch('https://be-2-medan-29-production.up.railway.app/api/v1/emails/subscribe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        form.reset();
        alert(data.message);
    });
}

document.querySelector(".form-card form")
document.addEventListener("submit", postSubmitEmail);
