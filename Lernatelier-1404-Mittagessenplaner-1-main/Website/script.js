fetch('http://127.0.0.1:3000/data/')
 .then((response) => response.text())
 .then(data => {
    console.log(data)
 })
 .catch((error) => {
   console.log(error)
 })
