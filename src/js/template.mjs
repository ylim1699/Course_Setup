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
  let icon = "ranger-station";

  return `
    <h1 class="vc-name">
        <svg class="icon" role="presentation" focusable="false">
            <use
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xlink:href="/images/sprite.symbol.svg#${icon}}">
            </use>
        </svg>
        ${data.name}
    </h1>
    `;
}

export function vcInfoTemplate() {
  return ` 
        <section class="vc-info">
            <figure>
            <img src="https://via.placeholder.com/150" alt="center image" />
            <figcaption>
                [visitor center image] <span>[attribution]</span>
            </figcaption>
            </figure>
            <p>[info here]</p>
        </section>
    `;
}
export function vcAddressesTemplate() {
  return `
    
    `;
}

export function vcDirectionsTemplate() {
  return `
    
    `;
}

export function vcAmenitiesTemplate() {
  return `
    
    `;
}

export function listTemplate(data, ContentTemplate) {
  const html = data.map(ContentTemplate);
  return `<ul>${html.join("")}</ul>`;
}

export function vcImageTemplate(data) {
  let index = 0;
  return `<li><img src="${data.url}" alt="${data.altText}" ></li>`;
}
