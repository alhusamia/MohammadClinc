var modal = document.getElementById("Modal");
const body = document.getElementById("body");
const greet = document.getElementById("greet");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
var span = document.getElementsByClassName("close")[0];
var contact = document.getElementById("contact");
var cont_select = document.getElementById("contact_select");
var submit = document.getElementById("submit");
const name = document.getElementById("name");
var formel = document.getElementById("myForm");
var loader = document.getElementById("loader");
var method = "";

function Book() {
  modal.style.display = "block";  
  greet.style.display = "none";
  body.style.display = "block";
  label1.style.display = "block";
  label2.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal && loader.style.display === "none") {
    modal.style.display = "none";
  }
};

contact.onchange = function () {
  const placeholder = () => {
    if (contact.value == "phone") {
      cont_select.value = "";
      return "+962 *** *** ***";
    } else if (`${contact.value}` === "WhatsApp") {
      cont_select.value = "";
      return "+962 *** *** ***";
    } else if (`${contact.value}` === "Email") {
      cont_select.value = "";
      return "****@gmail.com";
    }
  };
  cont_select.placeholder = placeholder();
  value = `${contact.value}`;
};

formel.onsubmit = async (e) => {
  e.preventDefault();
  loader.style.display = "block";
  submit.disabled = true;
  let obj = {
    name: name.value,
    contactMethod: `${method} ${cont_select.value} -Clinic : Mohammad Orthodontic  Center`,
  };

  let response = await fetch(
    "https://gwhb7l31r0.execute-api.eu-central-1.amazonaws.com/default/clinicsMailerFunction",
    {
      method: "POST",
      body: JSON.stringify(obj),
    }
  );

  if (response.status == 200) {
    body.style.display = "none";
    label1.style.display = "none";
    label2.style.display = "none";
    formel.reset();
    greet.style.display = "block";
    loader.style.display = "none";
    submit.disabled = false;
  }
};
