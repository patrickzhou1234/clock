window.addEventListener('contextmenu', event => event.preventDefault()); 
function clock() {
  var hr = new Date().getHours();
  var min = new Date().getMinutes();
  var sec = new Date().getSeconds();
  if (hr > 24) {
    hr -= 12;
  }
  var hourangle = ((hr*30)-90);
  var minuteangle = (min*6)-90;
  var secondangle = (sec*6)-90;
  document.getElementById("hour").style.transform = 'rotate('+hourangle+'deg)';
  document.getElementById("minute").style.transform = 'rotate('+minuteangle+'deg)';
  document.getElementById("second").style.transform = 'rotate('+secondangle+'deg)';
}

var interval = setInterval(clock, 1000)
