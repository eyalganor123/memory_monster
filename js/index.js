var state = {
  appIsOpen: false,
  movieIsOpen: false
}
var hobbies = ["music", "drawing", "being creative"];
function show(i, text) {
  if (i == 0) {
    document.getElementById("name").innerHTML = "Web Development";
    document.getElementById("title").innerHTML = "EYAL GANOR";
    return;
  }
  document.getElementById(i).innerHTML = "";
  document.getElementById("name").innerHTML = text;
}

function getHobbies() {
  var target = document.getElementById("name");
  var ul = document.createElement("ul");
  for (i = 0; i < hobbies.length; i++) {
    var li1 = document.createElement("li");
    li1.innerHTML = hobbies[i];
    ul.appendChild(li1);
  }
  target.appendChild(ul);

  return ul.innerHTML;
}
function showApp() {
  var frame = document.getElementById("frame");
  if (state.appIsOpen === false) {
    frame.setAttribute('style', 'display:block');
    state.appIsOpen=true;
  }
  else {
    frame.setAttribute('style', 'display:none');
    state.appIsOpen=false;
  }
};
function showMovie() {
  var movie = document.getElementById("movie");
  if (state.movieIsOpen === false) {
    movie.setAttribute('style', 'display:block');
    state.movieIsOpen=true;
  }
  else {
    movie.setAttribute('style', 'display:none');
    state.movieIsOpen=false;
  }
  
}