import { getParkData } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";   
import { parkIntroTemplate } from "./template.mjs";
import { mediaCardTemplate } from "./template.mjs"; 

const { park, parkInfoLinks } = getParkData();

setHeaderFooter(park);
setParkInfo(parkInfoLinks);
setParkIntro(park);

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




