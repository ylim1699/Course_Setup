import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

const parkInfoLinks = [
        {
            name: "Current Conditions",
            link: "conditions.html",
            image: parkData.images[2].url,
            description:
            "See what conditions to expect in the park before leaving your trip",
        },
        {
            name: "Fees and Passes",
            link: "fees.html",
            image: parkData.images[3].url,
            description: "Learn about the fees and passes that are available",
        },
        {
            name: "Vistor Centers",
            link: "visitor_centers.html",
            image: parkData.images[9].url,
            description: "Learn about the visitor concerns in the park",
        },
    ];

function setHeaderInfo(data) {
    
    const disclaimer = document.querySelector(".disclaimer > a");
    disclaimer.href = data.url;
    disclaimer.textContent = data.fullName;
    
    const title = document.querySelector(".park-header_title");
    title.textContent = data.name;
    
    const image = document.querySelector("#park-image > img");
    image.src = data.images[0].url;
    image.alt = data.images[0].altText;
    
    const designation = document.querySelector(".park-header_subtitle > p");
    designation.textContent = data.designation;
    
    const states = document.querySelector(".park-header_subtitle p:nth-of-type(2)");
    states.textContent = data.states;  
}

function mediaCardTemplate(info) {
    return `<div class="media-card">
    <a href="${info.link}">
    <img src="${info.image}" alt="${info.name}" class="media-card_image">
    </a>
    <h3 class="media-card_table">${info.name}</h3>
    <p>${info.description}</p>
    </div>`;
}

function parkFooterTemplate(info) {
    return `<div class = park-footer>
    
    </div>`;
}

function setParkIntro(info) {

}

function setParkInfo(data) {
    const parkInfoSection = document.querySelector(".info")
    const html = data.map(mediaCardTemplate);
    parkInfoSection.innerHTML = html.join("");
}

function setParkFooter(info) {

}

setHeaderInfo(parkData);
setParkInfo(parkInfoLinks);
setParkIntro();
setParkFooter();

