/*Hobby List*/
const hobbies = ['Drawing', 'Playing Games', 'Playing a Kalimba', 'Animating', 'Creating aesthetic caard.co websites'];

for (const hobby of hobbies) {

  console.log('I Like: ' + hobby);

  let item = document.createElement('li');
  item.innerText = 'I Like: ' + hobby;
  /*Element created and added to the list area*/
  document.getElementById('hobbyList').appendChild(item);
}

/*contact area*/
let sendBtn = document.getElementById("sendBtn");
let nameInput = document.getElementById("nameInput");
let msgInput = document.getElementById("msgInput");
let greetingEl = document.getElementById("greeting");

function greetUser(name) {
  greetingEl.textContent = "Hi, " + name + "! Thanks for your feedback.";
}
/*Function defined and called and Button / event interaction area*/
sendBtn.addEventListener("click", function () {
  let name = nameInput.value.trim();
  let message = msgInput.value.trim();
/*if/else condition*/
  if (name === "" || message === "") {
    greetingEl.textContent = "Please fill in all fields.";
    greetingEl.classList.add("error");
    greetingEl.classList.remove("success");
  } else {
    greetUser(name);
    greetingEl.classList.add("success");
    greetingEl.classList.remove("error");
  }
});