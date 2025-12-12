import '../css/style.css';
import  setHeaderFooter  from "./setHeaderFooter.mjs";
import { getParkData, getParkVisitorCenterDetails } from "./parkService.mjs";
import { enableNavigation, enableSubNavigation } from "./navigation.mjs";
import { vcAmenitiesTemplate, vcContactTemplate, vcDirectionsTemplate, vcAddressTemplate, vcImageTemplate, listTemplate, vcTitleTemplate, vcInfoTemplate } from './template.mjs';


function setVisitorCenterPage(centerDetails) {
    const galleryHTML = listTemplate(centerDetails.images, vcImageTemplate);
    document.querySelector('.vc-gallery').insertAdjacentHTML("beforeend", galleryHTML);
    
    const titleHTML = vcTitleTemplate(centerDetails);
    const vcTitle = document.querySelector('.vc-name__container');
    vcTitle.innerHTML = titleHTML;

    const infoHTML = vcInfoTemplate(centerDetails);
    const vcMainImage = document.querySelector(".vc-info");
    vcMainImage.innerHTML = infoHTML;

    const addressHTML = vcAddressTemplate(centerDetails);
    const vcAddress = document.querySelector("#vcAddresses");
    vcAddress.insertAdjacentHTML("beforeend", addressHTML);

    const directionsHTML = vcDirectionsTemplate(centerDetails);
    const vcDirections = document.querySelector('#vcDirections');
    vcDirections.insertAdjacentHTML("beforeend", directionsHTML);

    const contactHTML = vcContactTemplate(centerDetails);
    const vcContact = document.querySelector('#vcContact');
    vcContact.insertAdjacentHTML("beforeend", contactHTML);
    
    const amenitiesHTML = vcAmenitiesTemplate(centerDetails);
    const vcAmenities = document.querySelector('#vcAmenities');
    vcAmenities.insertAdjacentHTML("beforeend", amenitiesHTML);
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