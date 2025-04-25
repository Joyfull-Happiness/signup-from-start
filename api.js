let container = document.querySelector(".container");

let form = document.querySelector("form");
form.addEventListener("submit", onformsubmit);
console.log("form:", form);

function onformsubmit() {
  event.preventDefault();
  const data = new FormData(event.target);
  const dataObject = Object.fromEntries(data.entries());
  console.log("dataObject:", dataObject);

  form.reset();

  let firstName = dataObject.firstName;
  let lastName = dataObject.lastName;
  let email = dataObject.email;
  let password = dataObject.password;

  let message = `congrats ${firstName} on your free trial!`;

  console.log("first message to user:", message);

  let messageParagraph = document.createElement("p");
  messageParagraph.textContent = message;
  container.appendChild(messageParagraph);
}
