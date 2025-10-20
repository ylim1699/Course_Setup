import { getParkData, getInfoLinks } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";   
import { parkIntroTemplate } from "./template.mjs";
import { mediaCardTemplate } from "./template.mjs"; 

async function init() {
    const park = await getParkData();
    const links = await getInfoLinks()
    setHeaderFooter(park, 0);
    setParkInfo(links);
    setParkIntro(park);
}

init();

function setParkIntro(data) {
    const parkIntroSection = document.querySelector(".intro");
    const html = parkIntroTemplate(data);
    parkIntroSection.innerHTML = html;  
}

function setParkInfo(data) {
    const parkInfoSection = document.querySelector(".info")
    const html = data.map(mediaCardTemplate);
    parkInfoSection.innerHTML = html.join("");
}




