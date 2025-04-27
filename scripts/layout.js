// Header'ı yükle
fetch('includes/header.html')
.then(response => response.text())
.then(data => {
    document.getElementById('header').innerHTML = data;
    // Header yüklendikten sonra mobil menü için gerekli JavaScript kodlarını çalıştır
    if (jQuery().superfish) {
        jQuery('ul.sf-menu').superfish({
            delay:       300,
            animation:   {opacity:'show'},
            animationOut: {opacity: 'hide'},
            speed:       'fast',
            disableHI:   false,
            cssArrows:   true,
            autoArrows:  true
        });
    }

    //toggle mobile menu
    jQuery('.toggle_menu').on('click', function(){
        jQuery('.toggle_menu').toggleClass('mobile-active');
        jQuery('.page_header').toggleClass('mobile-active');
    });

    jQuery('.mainmenu a').on('click', function(){
        if (!jQuery(this).hasClass('sf-with-ul')) {
            jQuery('.toggle_menu').toggleClass('mobile-active');
            jQuery('.page_header').toggleClass('mobile-active');
        }
    });
});

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

var sectorLinks = document.getElementById("sectorLinks");
if(sectorLinks){
    
fetch('includes/sectorLinks.html')
.then(response => response.text())
.then(data => {
    sectorLinks.innerHTML = data;
    const currentPage = window.location.pathname.split('/').pop(); 
    console.log(currentPage); 
    const links = sectorLinks.querySelectorAll('a'); 

    links.forEach(link => {
        if (link.getAttribute('href').includes(currentPage)) {
            link.parentElement.classList.add('active'); 
        }
    });
});
}

var solutionsLinks = document.getElementById("solutionsLinks");
if(solutionsLinks){
    
fetch('includes/solutionsLinks.html')
.then(response => response.text())
.then(data => {
    solutionsLinks.innerHTML = data;
    const currentPage = window.location.pathname.split('/').pop(); 
    console.log(currentPage); 
    const links = solutionsLinks.querySelectorAll('a'); 

    links.forEach(link => {
        if (link.getAttribute('href').includes(currentPage)) {
            link.parentElement.classList.add('active'); 
        }
    });
});
}