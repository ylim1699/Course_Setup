import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

// parkData selections
const parkFullName = parkData.fullName;
const parkLink = parkData.url;
const parkName = parkData.name;
const parkImg1 = parkData.images[0].url;
const parkImgAlt = parkData.images[0].altText;
const parkDesignation = parkData.designation;
const parkStates = parkData.states;

// DOM inputs
const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = parkLink;
disclaimer.textContent = parkFullName;

const title = document.querySelector(".park-header_title");
title.textContent = parkName;

const image = document.querySelector("#park-image > img");
image.src = parkImg1;
image.alt = parkImgAlt;

const designation = document.querySelector(".park-header_subtitle > p")
designation.textContent = parkDesignation;

const states = document.querySelector(".park-header_subtitle p:nth-of-type(2)");
states.textContent = parkStates;

// Try making this into a template function
