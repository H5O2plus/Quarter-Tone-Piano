function sayThatWasEasy() {
    var thatWasEasy = new Audio("./assets/audio/that_was_easy.mp3");

    thatWasEasy.play();
}

$("#easy").on("click", sayThatWasEasy);

$(document).keypress(delegateKeypress);

function delegateKeypress(event) {
    if (event.charCode == 32) {
        $("#easy").trigger("click");
    }
}

var pitches = [];

var frameFreq = 440;
var startStep = -18;
var fundamentalStep = Math.pow(2, 1 / 24);
var pitchesCt = 25;
var curWaveForm = "square";

function relStepToFreq(relStep) {
    return frameFreq * Math.pow(fundamentalStep, relStep);
}

for (let i = 0; i < pitchesCt; i++) {
    let relStep = i + startStep;
    pitches.push(relStepToFreq(relStep));
}

//playSound("sine", pitches[9], 1);
//playSound("sine", 360, 3);

function playPitch(note) {
    playSound(curWaveForm, pitches[note], 0.5);
}

for (let i = 0; i < pitchesCt; i++) {
    $("#n" + i).on("click", function () { playPitch(i) });
}

$(document).ready(function() {
    $('input:radio[name=prefWF]').change(function() {
        curWaveForm = this.value;
    });
});

/*
$("#n1").on("click", function () { playPitch(1) });
$("#n2").on("click", function () { playPitch(2) });
$("#n3").on("click", function () { playPitch(3) });
$("#n4").on("click", function () { playPitch(4) });
$("#n5").on("click", function () { playPitch(5) });
$("#n6").on("click", function () { playPitch(6) });
$("#n7").on("click", function () { playPitch(7) });
$("#n8").on("click", function () { playPitch(8) });
$("#n9").on("click", function () { playPitch(9) });
$("#n10").on("click", function () { playPitch(10) });
$("#n11").on("click", function () { playPitch(11) });
$("#n12").on("click", function () { playPitch(12) });
*/