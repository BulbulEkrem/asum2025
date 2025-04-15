// Header'ı yükle
fetch('includes/header.html')
.then(response => response.text())
.then(data => document.getElementById('header').innerHTML = data);

// Footer'ı yükle
fetch('includes/footer.html')
.then(response => response.text())
.then(data => document.getElementById('footer').innerHTML = data);
