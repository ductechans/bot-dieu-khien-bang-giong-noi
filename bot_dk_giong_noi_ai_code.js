function p5speechRecGotResult() {
  background('#ffffff');
  text((p5SpeechRec.resultString.toLowerCase()) , 100, 250);
  if (new RegExp('bật đèn'.split(",").map(function(item) {return item.trim();}).join("|")).test(p5SpeechRec.resultString.toLowerCase())) {
    parent.commandUtils.sendTerminalData('A');
  }
  if (new RegExp('tắt đèn'.split(",").map(function(item) {return item.trim();}).join("|")).test(p5SpeechRec.resultString.toLowerCase())) {
    parent.commandUtils.sendTerminalData('B');
  }
  if (new RegExp('đi thẳng'.split(",").map(function(item) {return item.trim();}).join("|")).test(p5SpeechRec.resultString.toLowerCase())) {
    parent.commandUtils.sendTerminalData('1');
  }
  if (new RegExp('đi lui'.split(",").map(function(item) {return item.trim();}).join("|")).test(p5SpeechRec.resultString.toLowerCase())) {
    parent.commandUtils.sendTerminalData('2');
  }
  if (new RegExp('rẽ trái'.split(",").map(function(item) {return item.trim();}).join("|")).test(p5SpeechRec.resultString.toLowerCase())) {
    parent.commandUtils.sendTerminalData('3');
  }
  if (new RegExp('rẽ phải'.split(",").map(function(item) {return item.trim();}).join("|")).test(p5SpeechRec.resultString.toLowerCase())) {
    parent.commandUtils.sendTerminalData('4');
  }

}

function p5speechRecOnEnd() {
  p5SpeechRec.start();
}

function sleep(s) {
  ms = s * 1000
  return new Promise(resolve => setTimeout(resolve, ms));
}


let p5SpeechRec = new p5.SpeechRec("vi-VN", p5speechRecGotResult);
p5SpeechRec.onEnd = p5speechRecOnEnd;

function preload() {

}

function setup() {
  createCanvas(window.parent.document.getElementById('js-runner-container').offsetWidth-50, window.parent.document.getElementById('js-runner-container').offsetHeight-50);
    p5SpeechRec.start(); // start listening

}

function draw() {

}
