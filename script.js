const mic = document.getElementById('mic');
const screen = document.getElementById('screen');
const panelData = document.getElementById('panel-data');

const commands = ['Mangia', 'Balla', 'Dormi'];

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recog = new SpeechRecognition();

function onStart() {
    console.log('Start listening. . .')
    panelData.classList.add('listening');
    recog.start();
    
}

function onResult(e) {
    const testo = e.results[0][0].transcript;

    // Controllare risultati nel transcript
    const action = commands.find(function(cmd){
        return testo.toLowerCase().includes(cmd);
    });

    console.log('action', action);

    // mostrare animazione giusta

    const actionClassname = 'codigotchi-screen_'+ action;
    screen.classList.add(actionClassname)

    // reset stato iniziale
    panelData.classList.remove('listening');

    setTimeout (function(){
        screen.classList.remove(actionClassname);
        
    }, 2000);
}

mic.addEventListener('click', onStart);

recog.addEventListener('result', onResult)