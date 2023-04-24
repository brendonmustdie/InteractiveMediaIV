const totalPopUps = 10;
const popUpContainer = document.getElementById("trans");
const popUpTemplate = document.getElementById("pop-up-template");

const options = [
    {heading: "Warning", text: "Your teeth are falling out."},
    {heading: "Warning", text: "There are spiders all over your body."},
    {heading: "Warning", text: "Your head is covered in lice."},
    {heading: "Warning", text: "You left the stove on."},
];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function resetPopUp(popUp) {

    popUp.style.display = "block";

    popUp.style.left = getRandomInt(0, window.innerWidth) + "px";
    popUp.style.top = getRandomInt(0, window.innerHeight) + "px";

    const selectedOption = Math.floor(Math.random() * options.length);
    popUp.querySelector("#pop-up-heading").innerHTML = options[selectedOption].heading;
    popUp.querySelector("#pop-up-text").innerHTML = options[selectedOption].text;

    popUp.querySelector("#pop-up-button-okay").addEventListener("click", function() {

        popUp.style.display = "none";

        setTimeout(function() {

            resetPopUp(popUp);    

        }, getRandomInt(5000, 30000));
    });

    popUp.querySelector("#pop-up-button-stop").addEventListener("click", function() {

        popUp.style.display = "none";
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        
        setTimeout(function() {

            resetPopUp(popUp);    

        }, getRandomInt(5000, 30000));
    });
}

for(var i = 0; i < totalPopUps; i++) {

    let popUpInstance = popUpTemplate.cloneNode(true);
    popUpInstance.removeAttribute("id");
    popUpContainer.appendChild(popUpInstance);
    setTimeout(function() {

        resetPopUp(popUpInstance);      

    }, getRandomInt(5000, 30000));
}