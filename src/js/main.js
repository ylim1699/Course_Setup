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

// This section is for the top part of the park's main page
function parkIntroTemplate(info) {
    return `<div class="park-intro">
    <h1>${info.fullName}</h1>
    <p>${info.description}</p>
    </div>`;
}

function setParkIntro(data) {
    const parkIntroSection = document.querySelector(".intro");
    const html = parkIntroTemplate(data);
    parkIntroSection.innerHTML = html;  
}

// This section is for the bottom portion for the park's main page
function mediaCardTemplate(info) {
    return `<div class="media-card">
    <a href="${info.link}">
    <img src="${info.image}" alt="${info.name}" class="media-card_image">
    </a>
    <h3 class="media-card_table">${info.name} > </h3>
    <p>${info.description}</p>
    </div>`;

}

function setParkInfo(data) {
    const parkInfoSection = document.querySelector(".info")
    const html = data.map(mediaCardTemplate);
    parkInfoSection.innerHTML = html.join("");
}

// This section is for the footer of the park page
function parkFooterTemplate(info) {
    return `<div class="park-footer">
    <h3>Contact Info</h3>
    <div class="mailing">
    <p>Mailing Address:</p>
    </div>
    <p>${info.addresses[1].line1}</p>
    <p>${info.addresses[1].city},${info.addresses[1].stateCode} ${info.addresses[1].postalCode}</p>
    <div class="phone">
    <p>Phone:</p>
    </div>
    <p>${info.contacts.phoneNumbers[0].phoneNumber}</p>
    </div>`;
}

function setParkFooter(data) {
    const parkFooterSection = document.querySelector("footer");
    const html = parkFooterTemplate(data);
    parkFooterSection.innerHTML = html;
}

setHeaderInfo(parkData);
setParkInfo(parkInfoLinks);
setParkIntro(parkData);
setParkFooter(parkData);

