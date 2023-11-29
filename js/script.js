// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Get all elements with the class "article"
    var articles = document.querySelectorAll('.article');

    // Add a click event listener to each article
    articles.forEach(function (article) {
        article.addEventListener('click', function () {
            // Find the link inside the clicked article
            var link = this.querySelector('a');

            // Check if the link exists
            if (link) {
                // Get the link's href attribute
                var linkUrl = link.getAttribute('href');
            }
        });
    });
});


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