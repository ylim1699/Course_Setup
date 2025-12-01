import { getParkData, getParkAlertData, getParkVisitorCenterData, getParkActivitiesData } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";   
import { alertsTemplate, visitorCenterTemplate, activitiesTemplate } from "./template.mjs";
import { enableNavigation, enableSubNavigation } from "./navigation.mjs";
import "../css/conditions.css";

async function init() {
    const park = await getParkData();
    const alerts = await getParkAlertData();
    const visitorCenters = await getParkVisitorCenterData();
    const activities = await getParkActivitiesData();
    setHeaderFooter(park, 2);
    setAlertInfo(alerts);
    setVisitorCenterInfo(visitorCenters);
    setParkActivitiesInfo(activities);
    enableNavigation();
    enableSubNavigation();
}

async function setAlertInfo(info) {
    const alertSection = document.querySelector(".alerts");
    const html = alertsTemplate(info);
    alertSection.innerHTML = html;
}

async function setVisitorCenterInfo(info) {
    const visitorCenterSection = document.querySelector(".visitor-services");
    const html = visitorCenterTemplate(info);
    visitorCenterSection.innerHTML = html;
}

async function setParkActivitiesInfo(info) {
    const alertSection = document.querySelector(".activities");
    const html = activitiesTemplate(info);
    alertSection.innerHTML = html;
}


init();
