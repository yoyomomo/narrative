// Cody by GBra 4.669 (Stackoverflow User) *** START ***

const myHTMLCollection = document.getElementsByClassName("invisible");
const HTMLElementsArr = [...myHTMLCollection];

function showMessage() {
    if (HTMLElementsArr.length > 0) {
        HTMLElementsArr.shift().classList.remove('invisible');
    }
}

// Cody by GBra 4.669 (Stackoverflow User) *** END ***
