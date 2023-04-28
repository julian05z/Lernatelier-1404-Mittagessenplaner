const main = document.querySelector("#main");
   window.location.href = "http://127.0.0.1:5500/Lernatelier-1404-Mittagessenplaner-1-main/Website/#login"
  export const loginPage = () => {
    clearElement(main);
    let form = document.createElement('form');
    form.classList.add('loginpage');
    form.addEventListener('submit', handleLogin);
    let usernameInputField = document.createElement("input");
    usernameInputField.classList.add("usernameInputField");
    usernameInputField.required = true;
    usernameInputField.type = "text";
    usernameInputField.placeholder = "Username";
    form.append(usernameInputField);
    let passwordInputField = document.createElement("input");
    passwordInputField.classList.add("passwordInputField");
    passwordInputField.required = true;
    passwordInputField.type = "password";
    passwordInputField.placeholder = "Password";
    form.append(passwordInputField);
    let submitBTN = document.createElement("button");
    submitBTN.classList.add("submitBTN");
    submitBTN.type = "submit";
    submitBTN.textContent = "Log in";
    form.append(submitBTN);
    main.append(form);

};

loginPage();



function handleLogin(e) {
  e.preventDefault();
  
  const data = {
    "benutzername": e.target[0].value,
    "password": e.target[1].value,
  };
  
  fetch("http://127.0.0.1:3000/data", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Antwort", data);

      if (data.success) {
        alert("Erfolgreich eingeloggt!");
        location.href = "#kalender";
      } else {
        alert("Benutzername oder Passwort falsch.");
        location.href = "#kalender";
      }
    })
    .catch((error) => {
      console.error("Fehler beim Login:", error);
    });
}


  
//   fetch("http://127.0.0.1:3000/data/", {
    
   

//   })


//       console.log(data);
//       if (data.passwort == dataPe.passwort) {
//         alert("Success");
        
//         location.hash = "kalender";
//       } else {
        
//         console.log("mano es gaht nöd");
        
        
//         document.querySelector(".loginPage")
//       }
//     });
// }


  function clearElement(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }