var state = {
  pizza: false
}

function showAbout() {
  var text = `"Sweet dreams are made of this <br><br>Who am I to disagree<br><br>I travel the world <br><br>And the seven seas, <br><br>Everybody's looking for something. "`;
  var about = document.getElementById('info');
  about.innerHTML = text;

}

function showContact() {

  about = document.getElementById('info');
  about.innerHTML = "Contact Me: <br><br>tel: +972-544-512735<br><br>";
  var git = document.createElement('a');
  git.innerHTML = ` https://github.com/eyalganor123 <br><br>`;
  git.setAttribute("href", "https://github.com/eyalganor123")
  about.appendChild(git);
  var email = document.createElement('a');
  email.innerHTML = 'eyalganor@gmail.com';
  email.setAttribute("href", "mailto:eyalganor@gmail.com")
  about.appendChild(email);
}

function showHobbies() {
  var text = `music <br><br>drawing<br><br>travelling the world.`;
  about = document.getElementById('info');
  about.innerHTML = text;
}

function getPizza() {
  var pizza = document.getElementById('pizza');
  var pizzaButton = document.getElementById('pizzaButton');
  if (state.pizza === false) {
    pizza.setAttribute('style', 'display: block');
    pizzaButton.innerHTML = 'clean up'
    state.pizza = true;
  }
  else {
    pizza.setAttribute('style', 'display: none');
    pizzaButton.innerHTML = 'get pizza'
    state.pizza = false;
  }
}

setInterval(function () {
  var d = new Date().toLocaleTimeString();
  document.getElementById("time").innerHTML = d;
}, 1000);




// to do: connect to actual location and weather 