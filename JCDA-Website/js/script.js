const form = document.getElementById("contactForm");


if(form){

form.addEventListener("submit", function(event){


    event.preventDefault();


    let name = document.getElementById("name").value;

    let email = document.getElementById("email").value;

    let subject = document.getElementById("subject").value;

    let message = document.getElementById("message").value;


    let formMessage = document.getElementById("formMessage");



    if(
        name === "" ||
        email === "" ||
        subject === "" ||
        message === ""
    ){

        formMessage.innerHTML =
        "Please fill in all required fields.";

        formMessage.style.color = "red";

    }

    else {


        formMessage.innerHTML =
        "Your message has been sent successfully!";

        formMessage.style.color = "green";


        form.reset();

    }



});


}
const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");


if(menuBtn){

menuBtn.addEventListener("click", function(){

    navLinks.classList.toggle("show");

});

}