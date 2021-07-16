window.addEventListener('contextmenu', event => event.preventDefault()); 
function clock() {
  var hours = document.getElementById("hours");
  var minutes = document.getElementById("minutes");
  var seconds = document.getElementById("seconds");
  var phase = document.getElementById("phase");
  var hr = new Date().getHours();
  var min = new Date().getMinutes();
  var sec = new Date().getSeconds();
  var am = "AM";
  if (hr > 12) {
    hr -= 12;
    var am = "PM";
  }
  hr = hr < 10 ? "0" + hr : hr;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;
  hours.innerHTML = hr;
  minutes.innerHTML = min;
  seconds.innerHTML = sec;
  phase.innerHTML = am;
}

var interval = setInterval(clock, 1000)
