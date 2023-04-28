const main = document.querySelector("#main");
const kalenderContainer = document.getElementById("kalenderContainer")

//dieser Code wurde mit der Hilfe von ChatGPT gemacht (anpassungen und änderungen eigenleistung)


export function kalender() {
  clearElement(main);

const daysOfWeek = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"];


const table = document.createElement("table");
for (let i = 0; i < 24; i++) {
  const row = table.insertRow();
  for (let j = 0; j < 7; j++) {
    const cell = row.insertCell();
    if (j === 0) {
      cell.innerText = i + ":00";
    } else {
      cell.setAttribute("data-day", daysOfWeek[j - 1]);
      cell.setAttribute("data-hour", i);
      cell.addEventListener("click", handleCellClick);
    }
  }
}



function handleCellClick(e) {
  const day = e.target.getAttribute("data-day");
  const hour = e.target.getAttribute("data-hour");
  const title = prompt("Titel des Eintrags:");
  const description = prompt("Beschreibung des Eintrags:");
  const entry = { day, hour, title, description };
  //eigenleistung
  console.log("Eintrag hinzugefügt:", entry);
  updateCellClass(e.target);
}
//eigenleistung
function updateCellClass(cell) {
  cell.classList.add("has-entry");
  cell.removeEventListener("click",handleCellClick)
  
}


main.append(table);
}

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}


kalender();


