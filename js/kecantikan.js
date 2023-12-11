// Fetch list news and render category "Budaya"
fetch("https://be-2-medan-29-production.up.railway.app/api/v1/posts?category=4")
.then(res => res.json())
.then(data => renderDataToContent(data.data));

function renderDataToContent(articles){
    // get element content
    let parentElement = document.getElementById("news-list");

    for (article of articles){
        console.log(article);
        
        parentElement.innerHTML+=`<div class="article" onclick="redirectToDetail(${article.id})">
        <img src=${article.foto}>
        <div>
            <h2>${article.judul}</h2>
            <h4>${article.pembuat}</h4>
            <h4>${article.tanggal}</h4>
            <div>
                <p>
                ${article.deskripsi.substring(0,290)}
                </p>
                <a>Baca Selengkapnya</a>
            </div>
        </div>
    </div>`
       
    }
    
}

function redirectToDetail(newsId) {
    // You can use window.location.href to redirect to the detail page
    window.location.href = './halaman-berita.html?id=' + newsId;
}