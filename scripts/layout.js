// Header'ı yükle
fetch('includes/header.html')
.then(response => response.text())
.then(data => document.getElementById('header').innerHTML = data);

// Footer'ı yükle
fetch('includes/footer.html')
.then(response => response.text())
.then(data => document.getElementById('footer').innerHTML = data);


var productLinks = document.getElementById("productLinks");
if(productLinks){
    
fetch('includes/productLinks.html')
.then(response => response.text())
.then(data => {
    productLinks.innerHTML = data;
    const currentPage = window.location.pathname.split('/').pop(); 
    console.log(currentPage); 
    const links = productLinks.querySelectorAll('a'); 

    links.forEach(link => {
        if (link.getAttribute('href').includes(currentPage)) {
            link.parentElement.classList.add('active'); 
        }
    });
});
}