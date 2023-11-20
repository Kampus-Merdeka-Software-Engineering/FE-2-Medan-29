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
