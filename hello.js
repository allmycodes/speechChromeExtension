document.addEventListener("DOMContentLoaded", function(event) {
      everything();

});

var transcript = "";
function everything() {
  
window.SpeechRecognition = window.webkitSpeechRecognition || 
window.SpeechRecognition;
if ('webkitSpeechRecognition' in window) {
  // creating voice capture object
  this.recognition = new webkitSpeechRecognition();
}
var record1 = document.getElementsByClassName("record")[0];
var stop1 = document.getElementsByClassName("stop")[0];
var save1 = document.getElementsByClassName("save")[0];
var pause1 = document.getElementsByClassName("pause")[0];
var speech = document.getElementById('speechToText');
var speech1 = document.getElementById('speechToText1');
this.recognition.lang = "en-GB";
this.recognition.continuous = true;
this.recognition.interimResults = true;
this.recognition.addEventListener('result', e=> {
    const transcript = Array.from(e.results)
    .map(result =>result[0])
    .map(result=>result.transcript)
    speech.value = transcript;
})

function record() {   
  this.recognition.start();
}

record1.addEventListener("click", function onClick() {
  record()});


function pause() {
     speech1.value += " " + speech.value;
}


pause1.addEventListener("click",function onClick() {
  pause()});
function stop() {
   this.recognition.stop();
}

stop1.addEventListener("click", function onClick() {
  stop()});


  function everyTwo(str){
    return str.replace(/(\S+\s*){1,25}/g, "$&\n")
}

function save() {
    var ok = everyTwo(speech1.value);
    var a = document.createElement("a");
    a.href = window.URL.createObjectURL(new Blob([ok], {type: "text/plain"}));
    a.download = "demo.txt";
    a.click();
}

save1.addEventListener("click", function onClick() {
  save()});
}

