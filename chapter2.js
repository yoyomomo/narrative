var answer5 = document.getElementById('guess-input5').name;

//     THIRD QUESTION START
function guessAnswer5() {
    $("button.guess-submit5").click(function (event) {

        var guess5 = $('#guess-input5').val();
        guess5 = guess5.toLowerCase();

        if (guess5 == answer5) {
            //a.href = "chapter3.html";
            window.location = "chapter3.html";


        } else {
            $('#wrong5').show().fadeOut(1000);
        }

    });

}


function enterSubmit5() {
    $("#guess-input5").keyup(function (event) {
        if (event.keyCode == 13) {
            $("#guess-submit5").click();
        }
    });

    guessAnswer5();
}

enterSubmit5();
//     THIRD QUESTION END