function postSubmitEmail(event){
    event.preventDefault();
    console.log("test");
    // Ambil data dari form
    // const formBox = document.querySelector('.formbox');
    const form = event.target;
    const email = form.querySelector('[name="email"]').value;

    // simpan ke dalam object javascript
    const data = {
        email: email,
      };

    // post ke BE
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

document.querySelector("#newsletter form")
.addEventListener("submit", postSubmitEmail);