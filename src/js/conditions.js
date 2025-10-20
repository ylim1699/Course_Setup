import { getParkData, getParkAlertData } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";   

async function init() {
    const park = await getParkData();
    const alerts = await getParkAlertData();
    setHeaderFooter(park, 2);
    setAlertInfo(alerts);
}

function setAlertInfo(data) {
    const alertSection = document.querySelector(".alerts");
    const html = getParkAlertData(data);
    alertSection.innerHTML = html;
}

init();



