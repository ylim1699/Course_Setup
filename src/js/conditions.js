import { getParkData, getParkAlertData } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";   
import { alertsTemplate } from "./template.mjs";

async function init() {
    const park = await getParkData();
    const alerts = await getParkAlertData();
    setHeaderFooter(park, 2);
    setAlertInfo(alerts);
}

async function setAlertInfo(info) {
    const alertSection = document.querySelector(".alerts");
    const html = alertsTemplate(info);
    alertSection.innerHTML = html;
}

init();



