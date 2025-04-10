const diller = [
    {
        kisatma: "tr",
        dilAdi: "Türkçe",
        bayrak: "theme/img/flag/tr.svg"
    },
    {
        kisatma: "en",
        dilAdi: "English",
        bayrak: "theme/img/flag/en.svg"
    },
    {
        kisatma: "ru",
        dilAdi: "Russian",
        bayrak: "theme/img/flag/ru.svg"
    }
];

// ✅ Dil yükleme fonksiyonu
async function dilYukle(lang) {
    const response = await fetch(`data/locales/${lang}.json`);
    const translations = await response.json();

    document.querySelectorAll("[data-i18n]").forEach(elem => {
        const key = elem.getAttribute("data-i18n");
        if (translations[key]) {
            elem.innerText = translations[key];
        }
    });

    localStorage.setItem('selectedLanguage', lang);

    // 👉 Bayrakları da tekrar yükle
    await dilSecimAlaniniOlustur(lang);
}

// ✅ Bayrakları HTML olarak oluşturur
function bayraklariYukle(varsayilanBayrak) {
    let liste = "<ul>";
    diller.forEach(x => {
        if (x.kisatma !== varsayilanBayrak) {
            liste += `
                <li>
                    <a href='#' data-lang='${x.kisatma}'>
                        <img style='width: 24px;' src='${x.bayrak}' alt='${x.dilAdi}'>
                        <span style='margin-left: 5px'>${x.dilAdi}</span>
                    </a>
                </li>`;
        }
    });
    liste += "</ul>";
    return liste;
}

// ✅ Dil seçim alanını oluşturur ve event'leri yeniden tanımlar
async function dilSecimAlaniniOlustur(secilenDil) {
    const varsayilan = diller.find(l => l.kisatma === secilenDil);

    let linkler = `
        <img style="width: 24px;" src="${varsayilan.bayrak}" alt="${varsayilan.dilAdi}">
        <span class="hidden-lg" style="margin-left: 5px">${varsayilan.dilAdi}</span>
    `;

    linkler += bayraklariYukle(secilenDil);

    const alan = document.getElementById('dilSecimAlani');
    alan.innerHTML = linkler;

    // 🔁 Yeni event listener'ları her dil değişiminden sonra tekrar tanımla
    alan.querySelectorAll("[data-lang]").forEach(item => {
        item.addEventListener("click", function (e) {
            e.preventDefault();
            const selectedLang = this.getAttribute('data-lang');
            dilYukle(selectedLang);
        });
    });
}

// ✅ Sayfa yüklendiğinde çalıştırılır
window.addEventListener('DOMContentLoaded', () => {
    const kayitliDil = localStorage.getItem('selectedLanguage') || 'tr';
    dilYukle(kayitliDil);
});
