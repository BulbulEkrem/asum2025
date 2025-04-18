async function ulkeYukle() {

    const alan = document.getElementById('ulkeler');
    if (alan) {
        const response = await fetch(`data/projects/projects.json`);
        const data = await response.json();
        const ulkeler = data.ulkeler;
        let ulkeListesi = "";
        ulkeler.forEach(ulke => {
            ulkeListesi += `
    <a href='index.html#' class='dot' style='top: ${ulke.top}%;left: ${ulke.left}%;' data-toggle="modal" data-target='#referenceModal_${ulke.code}'></a>`;
        });
        alan.innerHTML = ulkeListesi;


    }
}
async function ulkeListeYukle() {


    const alan = document.getElementById('ulkeListesi');
    if (alan) {
        const response = await fetch(`data/projects/projects.json`);
        const data = await response.json();
        const ulkeler = data.ulkeler;
        let ulkeListesi = "";
        ulkeler.forEach(ulke => {
            ulkeListesi += `
            <li>
                <a href="pages/references.html#" title="" data-toggle="modal" data-target="#referenceModal_${ulke.code}">${ulke.name}</a>
            </li>`;
        });
        alan.innerHTML = ulkeListesi;

    }


}





async function modalYukle() {
    const alan = document.getElementById('ulkeReferanslari');
    if (alan) {
        const response = await fetch(`data/projects/countries.json`);
        const data = await response.json();
        const ulkeler = data.countries;
    
        const projectJson = await fetch(`data/projects/projects.json`);
        const perojectData = await projectJson.json();
        const projectUlkeler = perojectData.ulkeler;
        let ulkeListesi = "";
        projectUlkeler.forEach(projeler => {
            ulkeListesi += `<div class="modal fade" tabindex="-1" role="dialog" id="referenceModal_${projeler.code}">
                                            <div class="modal-dialog" role="document">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <button type="button" class="close" data-dismiss="modal"
                                                            aria-label="Close"><span class="close-modal-x"
                                                                aria-hidden="true">&times;</span></button>
                                                        <h4 class="modal-title">References in ${projeler.name}</h4>
                                                    </div>
                                                    <div class="modal-body">`;
            if (projeler.projects != undefined && projeler.projects.length > 0) {
    
                projeler.projects.forEach(ulkeProjesi => {
                    ulkeListesi += `<p
                                                        style="margin: 0cm 0cm 8pt; font-size: 15px; font-family: Aptos, sans-serif;">
                                                        <strong><span style='font-family:"Calibri",sans-serif;'> 
                                                        ${ulkeProjesi.name}
                                                        </span></strong></p>
                                                    <p
                                                        style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:15px;font-family:"Aptos",sans-serif;'>
                                                        <strong><span style='font-family:"Calibri",sans-serif;'>End-User:</span></strong><span
                                                            style='font-family:"Calibri",sans-serif;'>&nbsp;${ulkeProjesi.endUser}</span>
                                                    </p>
                                                    <p
                                                        style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:15px;font-family:"Aptos",sans-serif;'>
                                                        <strong><span
                                                                style='font-family:"Calibri",sans-serif;'>Year:</span></strong><span
                                                            style='font-family:"Calibri",sans-serif;'>&nbsp;${ulkeProjesi.endUser}</span>
                                                    </p>
                                                    <p
                                                        style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:15px;font-family:"Aptos",sans-serif;'>
                                                        <strong><u><span
                                                                    style='font-family:"Calibri",sans-serif;'>Scope:</span></u></strong>
                                                    </p>
                                                    <ul>`;
                    if (ulkeProjesi.Scope != undefined && ulkeProjesi.Scope.length > 0) {
                        ulkeProjesi.Scope.forEach(aciklamalar => {
                            ulkeListesi += `<li><span style='font-family:"Calibri",sans-serif;'>${aciklamalar}</span>
                                                            </li>`;
    
                        });
                    }
                    ulkeListesi += `</ul>`;
                    if (ulkeProjesi.photNames != undefined && ulkeProjesi.photNames.length > 0) {
                        ulkeProjesi.photNames.forEach(resimadi => {
                            ulkeListesi += `
                                                    <p style="text-align: center;"><strong><span style='font-family:"Calibri",sans-serif;'>
                                                    <img width="162" src="assets/images/${resimadi}" class="fr-fic fr-dii" style="width: 608px;"></span></strong>
                                                    </p>
                                                    `
    
                        });
                    }
    
                });
            }
    
            ulkeListesi += `</div>
                                                </div>
                                            </div>
                                        </div>`;
        });
        alan.innerHTML = ulkeListesi;
    }
    


}

window.addEventListener('DOMContentLoaded', () => {
    ulkeYukle();
    modalYukle();
    ulkeListeYukle()
});