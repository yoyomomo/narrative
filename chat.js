// Code by GBra 4.669 (https://stackoverflow.com/questions/66834196/how-to-make-multiple-divs-appear-one-after-the-other-using-javascript/66834457?noredirect=1#comment118141166_66834457) *** START ***

const myHTMLCollection = document.getElementsByClassName("invisible");
const HTMLElementsArr = [...myHTMLCollection];

function blueMessage() {
    if (HTMLElementsArr.length > 0) {
        HTMLElementsArr.shift().classList.remove('invisible');

    }

    if (!HTMLElementsArr.length) {
        greyMessage();

    }
}

// Code by GBra 4.669 (https://stackoverflow.com/questions/66834196/how-to-make-multiple-divs-appear-one-after-the-other-using-javascript/66834457?noredirect=1#comment118141166_66834457) *** END ***


function greyMessage() {
    setTimeout(show_second, 1000);
}

function show_second() {
    document.getElementById("msg4").style.display = "block";
    setTimeout(show_third, 1000);
}

function show_third() {
    document.getElementById("msg5").style.display = "block";
    setTimeout(show_fourth, 1000);
}

function show_fourth() {
    document.getElementById("msg6").style.display = "block";
    setTimeout(show_fifth, 1000);
}

function show_fifth() {
    document.getElementById("msg7").style.display = "block";
    setTimeout(show_sixth, 1000);
}

function show_sixth() {
    document.getElementById("msg8").style.display = "block";
    setTimeout(show_seventh, 1000);
}

function show_seventh() {
    document.getElementById("msg9").style.display = "block";
}
