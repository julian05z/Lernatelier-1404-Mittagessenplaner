
import { loginPage } from "./loginPage.js";
import { kalender } from "./kalender.js";

export const main = document.querySelector("#main");


export const renderLogin = () => {
  clearElement(main);
  loginPage();
};


export const renderKalender = () => {
  clearElement(main);
    kalender();
};

export const renderNotFound = () => {
  main.innerHTML = "Not Found";
};

function handleLogin(e) {
  e.preventDefault();
  console.log("working");
}



function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}