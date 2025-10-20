export function parkIntroTemplate(info) {
    return `<div class="park-intro">
    <h1>${info.fullName}</h1>
    <p>${info.description}</p>
    </div>`;
}

export function mediaCardTemplate(info) {
    return `<div class="media-card">
    <a href="${info.link}">
    <img src="${info.image}" alt="${info.name}" class="media-card_image">
    </a>
    <h3 class="media-card_table">${info.name} > </h3>
    <p>${info.description}</p>
    </div>`;
}

export function parkFooterTemplate(info) {
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

export function alertsTemplate(info) {
    return `<div class="alert-card">
        
    </div>`;
}