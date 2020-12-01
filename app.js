const btn = document.querySelector(".talk");

const content = document.querySelector(".content");

const grettings = [
  `howdy mister how's your day going`,
  `you sure got a lot of free time uhnn`,
  "hello nerd",
];

const weather = ["its a little bit sunny today at osun state"];
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

// recognition.onstart = function () {
//   console.log("voice is activated , you can speak");
// };
recognition.continuous = true;

recognition.onresult = function (event) {
  const current = event.resultIndex;
  const transcript = event.results[current][0].transcript;
  content.textContent = transcript;
  readOutLoad(transcript);
};

// console.log(recognition);

recognition.onaudiostart = function () {
  return true;
};

btn.addEventListener("click", () => {
  if (recognition.onaudiostart()) recognition.stop();
  recognition.start();

  console.log(recognition);
});

function readOutLoad(message) {
  const speech = new SpeechSynthesisUtterance();
  speech.text = "say something else";

  if (message.includes("how are you")) {
    speech.text = grettings[Math.floor(Math.random() * grettings.length)];
  } else if (message.includes("weather")) {
    speech.text = weather[Math.floor(Math.random() * weather.length)];
  }
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
}
