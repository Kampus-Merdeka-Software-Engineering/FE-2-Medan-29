


document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM Content Loaded");
    // Get the product ID from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const newsId = urlParams.get('id');
    console.log(newsId);

    // Fetch berita
    fetch(`https://be-2-medan-29-production.up.railway.app/api/v1/posts/${newsId}`)
    .then(res => res.json())
    .then(data => renderDataToContent(data.data[0]));

    // Get selected news
    // const berita = news[newsId-1];

    // const content = document.getElementById('news');
    // content.innerHTML = berita;
});

function renderDataToContent(article){
    console.log(article);
    // get element content
    let parentElement = document.getElementById("artikel-berita");

    
        parentElement.innerHTML+=`
        <article class="berita">
          <div class="header-content">
            <h1>
              ${article.judul}
            </h1>
            <p class="author">${article.pembuat}</p>
            <p class="date">${article.tanggal}</p>
          </div>

          <div class="berita-img">
            <img class="img-team" src=${article.foto} />
            <figcaption>
              ${article.deskripsi_foto}
            </figcaption>
          </div>

          <div class="main-content">
            <p>
              ${article.deskripsi}
            </p>
          </div>
        </article>
      `
    renderRekomendasiBerita(article.kategori_id);
}

function redirectToDetail(newsId) {
    // You can use window.location.href to redirect to the detail page
    window.location.href = './halaman-berita.html?id=' + newsId;
}

async function renderRekomendasiBerita(kategoriId){
    try {
        const response = await fetch(`https://be-2-medan-29-production.up.railway.app/api/v1/posts?category=${kategoriId}`);
        const data = await response.json();

        let parentElement = document.getElementById("recommend-content");
        data.data.slice(0, 4).forEach(article =>{
            parentElement.innerHTML+= `<div class="box" onclick="redirectToDetail(${article.id})">
            <img class="img-content" src=${article.foto} alt="Foto Rekomendasi"/>
            <h1>${article.judul}</h1>
          </div>`
        });
    } 
    catch (error) {
        console.error(error);
    }
}