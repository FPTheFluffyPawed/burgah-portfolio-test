fsLightbox.props.types = ["image", "image", "image", "image"];
fsLightbox.props.exitFullscreenOnClose = true;

const buttonComics = document.getElementById("button-comics");
const buttonCommissions = document.getElementById("button-commissions");
const buttonVehicle = document.getElementById("button-vehicle");
const buttonPersonal = document.getElementById("button-personal");

const pageComics = document.getElementById("comics");
const pageCommissions = document.getElementById("commissions");
const pageVehicle = document.getElementById("vehicles");
const pagePersonal = document.getElementById("personal");

const buttons = [];

buttons.push(buttonComics);
buttons.push(buttonCommissions);
buttons.push(buttonPersonal);
buttons.push(buttonVehicle);

buttonComics.addEventListener("click", (event) => {
    setCurrentButton("comics");
    hideOtherPages("comics");
});

buttonCommissions.addEventListener("click", (event) => {
    setCurrentButton("commissions");
    hideOtherPages("commissions");
});

buttonPersonal.addEventListener("click", (event) => {
    setCurrentButton("personal");
    hideOtherPages("personal");
});

buttonVehicle.addEventListener("click", (event) => {
    setCurrentButton("vehicle");
    hideOtherPages("vehicle");
});

function setCurrentButton(current) {
    for(let i = 0; i < buttons.length; i++) {
        if(buttons[i].classList.contains("current")) {
            buttons[i].classList.remove("current");
        }
    }

    var currentButton = "button-" + current;
    document.getElementById(currentButton).classList.add("current");
}

function hideOtherPages(current) {
    switch (current) {
        case "commissions":
            pageCommissions.className = "current";
            pageComics.className = "hidden";
            pageVehicle.className = "hidden";
            pagePersonal.className = "hidden";
            break;
        case "comics":
            pageCommissions.className = "hidden";
            pageComics.className = "current";
            pageVehicle.className = "hidden";
            pagePersonal.className = "hidden";
            break;
        case "vehicle":
            pageCommissions.className = "hidden";
            pageComics.className = "hidden";
            pageVehicle.className = "current";
            pagePersonal.className = "hidden";
            break;
        case "personal":
            pageCommissions.className = "hidden";
            pageComics.className = "hidden";
            pageVehicle.className = "hidden";
            pagePersonal.className = "current";
            break;
    }
}