const name = document.querySelector(".User-Name-Input");
const quantity = document.querySelector(".Quantity-Increase-Input");
const submitBtn = document.querySelector(".Submit-Btn");

function increaseView() {
    for (let i = 1; i <= quantity.value; i++) {
        window.open(`https://github.com/${name.value}`);
    };
};


// Event Listeners 

submitBtn.addEventListener("click", increaseView);

name.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        increaseView();
    };
});

quantity.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        increaseView();
    };
});