document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector("#form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    var Nombre = document.getElementById("Nombre").value;
    var Correo = document.getElementById("Correo").value;

    var my_text = `Mensaje de formulario:%0A - Nombre:${Nombre} %0A Correo: ${Correo}`;

    var token = "7120335608:AAHZCcLcTa8hlLUYd_TWK6fBFBV63DarjvE";

    var chat_id = -1002062098373;
    var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}`;

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    console.log("Message successfully sended!")
  })
})