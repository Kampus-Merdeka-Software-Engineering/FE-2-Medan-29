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

//const BASE_URL = "link railway";

// SUBMIT EMAIL MASIH REVISI
function submitComment(event) {
    const email = document.querySelector("#email");

    if (email.value.trim() === '') {
        alert("Email must be filled in!");
        return; // Menghentikan pengiriman jika kolom email kosong
    }

//store-email disesuain sama nama database

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