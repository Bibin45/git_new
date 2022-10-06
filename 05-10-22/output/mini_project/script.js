
let seconds = 00; 
let tens = 00; 
let outtens = document.getElementById("tens");
let outseconds = document.getElementById("seconds");
let buttonStart = document.getElementById('button-start');
let buttonStop = document.getElementById('button-stop');
let buttonReset = document.getElementById('button-reset');
let clear ;

buttonStart.onclick = function start() {     
  // clearInterval(clear);
    clear = setInterval(startTimer, 10);
}
    
buttonStop.onclick = function stop() {
  clearInterval(clear);
}

buttonReset.onclick = function reset() {
  clearInterval(clear);
    tens = "00";
    seconds = "00";
    outtens.innerHTML = tens;
    outseconds.innerHTML = seconds;
}
    
function startTimer () {
  tens++; 
      
  if(tens <= 9){
    outtens.innerHTML = "0" + tens;
  }
      
  if (tens > 9){
    outtens.innerHTML = tens;
  } 
      
  if (tens > 99) {
    console.log("seconds");
    seconds++;
    outseconds.innerHTML = "0" + seconds;
    tens = 0;
    outtens.innerHTML = "0" + 0;
  }
      
  if (seconds > 9){
    outseconds.innerHTML = seconds;
  }
    
}