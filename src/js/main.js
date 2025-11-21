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
    enableNavigation();
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

function enableNavigation() {
    const menuButton = document.querySelector("#global-header-button");

    menuButton.addEventListener("click", (ev) => {
        let target = ev.target;
        
        if (target.tagName != "BUTTON") {
            target = target.closest("button");
        }
        
        if (document.querySelector("#global-header-button").classList.contains("global-header-toggle")) {  
            target.setAttribute("aria-expanded", true);
        } 
        else {  
            target.setAttribute("aria-expanded", false);
        }
        
        //--------------------// 

        let globalNavSplitBtn = document.querySelector("#global-nav");
        let closedButton = document.querySelector('#global-header-button-closed');
        let openButton = document.querySelector('#global-header-button-open');


        if (openButton.classList.contains("hidden")) {
            openButton.classList.remove('hidden');
            closedButton.classList.add('hidden');
        }

        else if (closedButton.classList.contains("hidden")) {
            openButton.classList.add('hidden');
            closedButton.classList.remove('hidden');    
        }
        
        if (globalNavSplitBtn.classList.contains("global-nav-toggle")) {
            globalNavSplitBtn.classList.remove("global-nav-toggle");
        }
        else {
            globalNavSplitBtn.classList.add("global-nav-toggle");
        }
    });
}


