import '../css/style.css';
import  setHeaderFooter  from "./setHeaderFooter.mjs";
import { getParkData, getParkVisitorCenterDetails } from "./parkService.mjs";
import { enableNavigation, enableSubNavigation } from "./navigation.mjs";
import { vcImageTemplate, listTemplate, vcTitleTemplate } from './template.mjs';


function setVisitorCenterPage(centerDetails) {
    const galleryHTML = listTemplate(centerDetails.images, vcImageTemplate);
    document.querySelector('.vc-gallery').insertAdjacentHTML("beforeend", galleryHTML);
    
    const html = vcTitleTemplate(centerDetails);
    const vcTitle = document.querySelector('.vc-name__container');
    vcTitle.innerHTML = html;
}

function getParam(param) {
    const search = location.search;
    const params = new URLSearchParams(search);
    return params.get(param);
}

async function init() {
    const parkData = await getParkData();
    const id = getParam("id");
    const centerDetails = await getParkVisitorCenterDetails(id);

    setVisitorCenterPage(centerDetails);
    setHeaderFooter(parkData, 3);
    enableNavigation();
    enableSubNavigation();
}

init();