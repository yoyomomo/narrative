var answer = document.getElementById('guess-input').name;
var hint = document.getElementById('guess-input').value;
var a = document.getElementById('lockChap2');
var answer2 = document.getElementById('guess-input2').name;
var hint2 = document.getElementById('guess-input2').value;
var answer3 = document.getElementById('guess-input3').name;
var hint3 = document.getElementById('guess-input3').value;

//     THIRD QUESTION START
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
//     THIRD QUESTION END


//     SECOND QUESTION START
function guessAnswer2() {
    $("button.guess-submit2").click(function (event) {

        var guess2 = $('#guess-input2').val();
        guess2 = guess2.toLowerCase();

        if (guess2 == answer2) {
            document.getElementById('sign-in').style.display = "block";
            window.location = "#sign-in";


        } else {
            $('#wrong2').show().fadeOut(1000);
            $('#guess-input2').val(hint);
        }

    });

}

function enterSubmit2() {
    $("#guess-input2").keyup(function (event) {
        if (event.keyCode == 13) {
            $("#guess-submit2").click();
        }
    });

    guessAnswer2();
}

enterSubmit2();
//     SECOND QUESTION END

//     FIRST QUESTION START

function guessAnswer3() {
    $("button.guess-submit3").click(function (event) {

        var guess3 = $('#guess-input3').val();
        guess3 = guess3.toLowerCase();

        if (guess3 == answer3) {
            document.getElementById('sign-in2').style.display = "block";
            window.location = "#sign-in2";

        } else {
            $('#wrong').show().fadeOut(1000);
        }

    });

}

function enterSubmit3() {
    $("#guess-input3").keyup(function (event) {
        if (event.keyCode == 13) {
            $("#guess-submit3").click();
        }
    });

    guessAnswer3();
}

enterSubmit3();

//     FIRST QUESTION END
