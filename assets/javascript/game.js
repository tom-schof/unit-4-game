var total = 0;
var win = 0;
var loss = 0;
var lockGame = false;


function generateNumber() {
    var computerPick = Math.floor(Math.random() * 120) + 1;
    if (computerPick >= 19) {
        $("#random-number").html(computerPick);
    } else {
        generateNumber();
    }
    return computerPick;
}

function generateGemValue() {
    var gemValue = Math.floor(Math.random() * 12) + 1;
    $("#button-1").val(gemValue);
    gemValue = Math.floor(Math.random() * 12) + 1;
    $("#button-2").val(gemValue);
    gemValue = Math.floor(Math.random() * 12) + 1;
    $("#button-3").val(gemValue);
    gemValue = Math.floor(Math.random() * 12) + 1;
    $("#button-4").val(gemValue);

}
function display() {
    $("#wins").html("Wins: " + win);
    $("#losses").html("Losses: " + loss);
    $("#score").html(total);
    console.log("ran display");

}

function reset() {
    lockGame == false;
    total = 0;
    $("#score").html(total);
    generateGemValue();
    generateNumber();
    console.log("ran reset");
}

$(document).ready(function () {

    // Here we create the on click event that gets the user"s pick
    $(".btn-choice").on("click", function () {

        // Here this lockGame line prevents the user from changing the option after the game is done.
        if (lockGame !== true) {

            var yourPick = $(this).val();
            var computerPick = $("#random-number").html();
            // console.log("Your Pick: " + yourPick);
            // console.log("Computer Pick: " + computerPick);
            var yourPickInt = parseInt(yourPick);

            total += yourPickInt;

            $("#score").html(total);
            $("#wins").html("Wins: " + win);
            $("#losses").html("Losses: " + loss);

            if (total == computerPick) {
                win++;
                lockGame == true;
                alert("You Win!");
                display();
                reset();
            } else if (total > computerPick) {
                loss++;
                lockGame == true;
                alert("You Lose!");
                display();
                reset();
            }
        } else {
            reset();
        }
    });
});
window.onload = function () {
    reset();
}
