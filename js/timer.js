
var timer = document.getElementById("timer");
var now = new Date().getTime();
var time = function () {

  var now2 = new Date().getTime();
  now2 -= now + 1000 * 60 * 60 * 2;
  now3 = new Date(now2).toLocaleTimeString("it");
  timer.innerHTML = now3;
};
function start() {
  now = new Date().getTime();
  begin = setInterval("time()", 1000);
}
function stop() {
  clearInterval(begin);
  gameTime = timer.innerHTML;
  console.log(gameTime);
  checkBest(gameTime);
}

function checkBest(gameTime) {
  var best = localStorage.getItem('bestTime')
  var user = localStorage.getItem('userName')
  if (best > gameTime || best === null) {
    localStorage.setItem("bestTime", gameTime);
    localStorage.setItem("bestPlayer",user)
    var bestPlayer = localStorage.getItem('bestPlayer')
    document.getElementById('highScore').innerHTML = "Best Time:" + gameTime+"by:"+bestPlayer;
  } else {
    var bestPlayer = localStorage.getItem('bestPlayer')
    document.getElementById('highScore').innerHTML = "Best Time:"  + best+ "by:"+ bestPlayer;
  }
  console.log(best);
}