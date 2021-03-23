var answer = document.getElementById('guess-input').name;

var hint = document.getElementById('guess-input').value;
var a = document.getElementById('lockChap2');

function guessAnswer() {
    $("button.guess-submit").click(function (event) {

        var guess = $('#guess-input').val();
        guess = guess.toLowerCase();

        if (guess == answer) {

            a.href = "chapter2.html";
            window.location = "chapter2.html";

        } else {
            $('#wrong').show().fadeOut(1000);
            $('#guess-input').val(hint);
        }

    });

}

function enterSubmit() {
    $("#guess-input").keyup(function (event) {
        if (event.keyCode == 13) {
            $("#guess-submit").click();
        }
    });

    guessAnswer();
}

enterSubmit();
