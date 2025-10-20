import { parkFooterTemplate } from "./template.mjs"

function setHeaderInfo(data, number) {
    
    const disclaimer = document.querySelector(".disclaimer > a");
    disclaimer.href = data.url;
    disclaimer.textContent = data.fullName;
    
    const title = document.querySelector(".park-header_title");
    title.textContent = data.name;
    
    const image = document.querySelector("#park-image > img");
    image.src = data.images[number].url;
    image.alt = data.images[number].altText;
    
    const designation = document.querySelector(".park-header_subtitle > p");
    designation.textContent = data.designation;
    
    const states = document.querySelector(".park-header_subtitle p:nth-of-type(2)");
    states.textContent = data.states;  
}

function setParkFooter(data) {
    const parkFooterSection = document.querySelector("footer");
    const html = parkFooterTemplate(data);
    parkFooterSection.innerHTML = html;
}

export default function setHeaderFooter(park, number) {
    setHeaderInfo(park, number);
    setParkFooter(park);
}