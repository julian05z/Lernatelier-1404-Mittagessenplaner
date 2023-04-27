const main = document.querySelector("#main");
const kalenderContainer = document.getElementById("kalenderContainer")

export function kalender() {
  clearElement(main);
  // Erstelle eine Liste von Wochentagen
const daysOfWeek = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"];

// Erstelle eine Tabelle mit 7 Spalten für jeden Wochentag und 24 Zeilen für jede Stunde des Tages
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

// Funktion zum Hinzufügen eines Eintrags bei Klick auf eine Zelle
function handleCellClick(e) {
  const day = e.target.getAttribute("data-day");
  const hour = e.target.getAttribute("data-hour");
  const title = prompt("Titel des Eintrags:");
  const description = prompt("Beschreibung des Eintrags:");
  const entry = { day, hour, title, description };
  console.log("Eintrag hinzugefügt:", entry);
  updateCellClass(e.target);
}

function updateCellClass(cell) {
  cell.classList.add("has-entry");
  cell.removeEventListener("click",handleCellClick)
  
}
// Füge die Tabelle zum Dokument hinzu
// console.log(kalenderContainer.textContent)
main.append(table);
}

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}


kalender();


