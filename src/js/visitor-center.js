import '../css/style.css';
import  setHeaderFooter  from "./setHeaderFooter.mjs";
import { getParkData, getParkVisitorCenterDetails } from "./parkService.mjs";
import { enableNavigation, enableSubNavigation } from "./navigation.mjs";

function getParam(param) {
    const search = location.search;
    const params = new URLSearchParams(search);
    return params.get(param);
}

async function init() {
    const parkData = await getParkData();
    const id = getParam("id");
    const centerDetails = getParkVisitorCenterDetails(id);
    setHeaderFooter(parkData, 3);
    enableNavigation();
    enableSubNavigation();
}

init();