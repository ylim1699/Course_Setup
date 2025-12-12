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
  return `<h3>Alerts</h3>
        <section class="alert1">
            <svg class="icon" focusable="false" aria-hidden="true">
                <use xlink:href="/images/sprite.symbol.svg#alert-closure"></use>
            </svg>
            <div class="alert-text"> 
                <h4>${info[0].title}</h4>
                <p>${info[0].description}</p>
            </div>    
        </section>
        <section class="alert2">
            <svg class="icon" focusable="false" aria-hidden="true">
                <use xlink:href="/images/sprite.symbol.svg#alert-information"></use>
            </svg>
            <div class="alert-text"> 
                <h4>${info[1].title}</h4>
                <p>${info[1].description}</p>
            </div> 
        </section>`;
}

export function visitorCenterTemplate(info) {
  const centersList = info
    .map(
      (center, index) =>
        `<li class="visitor-center${index + 1}">
            <h4><a href="visitor-center.html?id=${center.id}">${center.name}</a></h4>
            <p>${center.description}</p>
            <p>${center.directionsInfo}</p>
        </li>`
    )
    .join("");

  return ` <h3>Visitor Services</h3>
    <div class="visitor-centers">
    <details name="requirements">
        <summary>Visitor Centers</summary>
        ${centersList}
    </details>
    </div>`;
}

export function activitiesTemplate(info) {
  const activitiesList = info
    .map((activity) => `<li>${activity.name}</li>`)
    .join("");

  return `<h3>Activities</h3> 
        <div class="activities-list">
        <details name="requirements">
            <summary>All Activities</summary>
            <ul>${activitiesList}</ul>
        </details>
        </div>
        `;
}

export function vcTitleTemplate(data) {
  return `
    <h1 class="vc-name">
        <svg class="icon" role="presentation" focusable="false">
            <use
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xlink:href="/images/sprite.symbol.svg#ranger-station">
            </use>
        </svg>
        ${data.name}
    </h1>
    `;
}

export function vcInfoTemplate(data) {
  const images = data.images[0];
  return ` 
        <figure>
        <img src="${images.url}" alt="${images.altText}"></img> 
        <figcaption>
            <span>${images.caption}</span>
        </figcaption>
        </figure>
        <p>${data.description}</p>
    `;
}

export function vcAddressTemplate(data) {
  const physical = data.addresses.find((address) => address.type === "Physical");
  const mailing = data.addresses.find((address) => address.type === "Mailing");

  return `
  <section class="vc-addresses__physical">
              <h3>Physical Address</h3>
              <address>
                ${physical.line1}<br />
                ${physical.city}, ${physical.stateCode} ${physical.postalCode}
              </address>
            </section>
            <section class="vc-addresses__mailing">
              <h3>Mailing Address</h3>
              <address>
                ${mailing.line1}<br />
                ${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}
              </address>
            </section>
    `;
}

export function vcDirectionsTemplate(data) {
  return `
      <p>${data.directionsInfo}</p>
    `;
}

export function vcAmenitiesTemplate(data) {
  const amenitiesList = data.amenities;
  const list = amenitiesList.map((amenity) => vcAmenitiesListTemplate(amenity)).join('');
  return `<ul>${list}</ul>`
}

function vcAmenitiesListTemplate(amenities) {
  return `
    <li>${amenities}</li>
  `;
}

export function vcContactTemplate(data) {
  return `
    <section class="vc-contact__email">
      <h3>Email Address</h3>
      <a href="${data.contacts.emailAddresses[0].emailAddress}:">${data.contacts.emailAddresses[0].emailAddress}</a>
    </section>
    <section class="vc-contact__phone">
      <h3>Phone numbers</h3>
      <a href="tel:${data.contacts.phoneNumbers[0].phoneNumber}">${data.contacts.phoneNumbers[0].phoneNumber}</a>
    </section>
  `;
}

export function listTemplate(data, ContentTemplate) {
  const html = data.map(ContentTemplate);
  return `<ul>${html.join("")}</ul>`;
}

export function vcImageTemplate(data) {
  return `<li><img src="${data.url}" alt="${data.altText}" ></li>`;
}
