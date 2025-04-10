async function ulkeYukle() {
    const response = await fetch(`data/projects/countries.json`);
    const data = await response.json();
    const ulkeler = data.countries;
    let ulkeListesi = "";
    ulkeler.forEach(ulke => {
        ulkeListesi += `
    <a href='index.html#' class='dot' style='top: ${ulke.top}%;left: ${ulke.left}%;' data-toggle="modal" data-target='#referenceModal_${ulke.code}'></a>`;
    });
    const alan = document.getElementById('ulkeler');
    alan.innerHTML = ulkeListesi;


}

window.addEventListener('DOMContentLoaded', () => {
    ulkeYukle();
});