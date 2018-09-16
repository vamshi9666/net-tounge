console.log(`Background script Started`);
browser.runtime.onMessage.addListener(handleMessage);
const synth = window.speechSynthesis;
let voices = [];
function handleMessage(req,sender,res) {
  voices = synth.getVoices()

  const speakText = new SpeechSynthesisUtterance(request.text);
}
