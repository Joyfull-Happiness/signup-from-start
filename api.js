let container = document.quereySelector(".container");

let form = document.quereySelector("form");
form.addEventlistener("submit", onformsubmit);
console.log("form:", form); 

function onformsubmit(){
    event.preventDeafult();
    const data = new FormData(event.target);
    const dataObject = Object.fromEntries(data.entries());
    console.log(dataObject);

    form.rest();

    let firstName = dataObject.firstName;
    let lastName  = dataObject.lastName;
    let email = dataObject.email;
    let password = dataObject.password;

    let message =
}
)

/* 
Code the following design for desktop only:
https://assets.codepen.io/t-15440/itp-w11-signup-desktop-design.jpg

The screenshot shows the design at 1440px wide. You may make yours narrower as it's likely you have a smaller screen. This will make the padding and spacing look a little different -- and that's OK. Try to get your design as close as possible to the design in the screenshot.

Make the email and password fields required.

Include the boilerplate code for the form submission in your JavaScript.

The words "Terms and Services" are a link and should be styled as such. However, the link does not need to go anywhere (you can link to #).

"Try it Free..." is a banner. It's not clickable.

BONUS IF YOU HAVE TIME: Mobile design:
https://assets.codepen.io/t-15440/itp-w11-signup-mobile-design.jpg

Try to get as close as possible to the design in the screenshot.

*/
