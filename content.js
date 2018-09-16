console.log(`Content Script started`);

const synth = window.speechSynthesis;

let voices;
voices = synth.getVoices();


window.addEventListener('select', speak())

function speak() {
  let selectedText = window.getSelection().toString().trim();

  const message = {
    text : selectedText
  }
  browser.runtime.sendMessge(message)

}
