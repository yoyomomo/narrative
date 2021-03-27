// Code by GBra 4.669 (https://stackoverflow.com/questions/66834196/how-to-make-multiple-divs-appear-one-after-the-other-using-javascript/66834457?noredirect=1#comment118141166_66834457) *** START ***

const myHTMLCollection = document.getElementsByClassName("invisible");
const HTMLElementsArr = [...myHTMLCollection];
var objDiv = document.getElementById("chat-window");


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
    setTimeout(show_msg4, 1500);

}

function show_msg4() {
    document.getElementById("msg4").style.display = "block";
    setTimeout(show_msg5, 1500);

}

function show_msg5() {
    document.getElementById("msg5").style.display = "block";
    setTimeout(show_msg6, 3000);
    objDiv.scrollTop = objDiv.scrollHeight;

}

function show_msg6() {
    document.getElementById("msg6").style.display = "block";
    setTimeout(show_msg7, 3000);
    objDiv.scrollTop = objDiv.scrollHeight;


}

function show_msg7() {
    document.getElementById("msg7").style.display = "block";
    setTimeout(show_msg8, 2500);
    objDiv.scrollTop = objDiv.scrollHeight;

}

function show_msg8() {
    document.getElementById("msg8").style.display = "block";
    setTimeout(show_msg9, 1500);
    objDiv.scrollTop = objDiv.scrollHeight;

}

function show_msg9() {
    document.getElementById("msg9").style.display = "block";
    objDiv.scrollTop = objDiv.scrollHeight;


}
