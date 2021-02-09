
let currentSpeaker = 0;
let allSpeakerTimes = [0];
// setze intervall: jede sekunde wird die callback function ausgeführt und incrementiert die Zeit eines Redners
// oder des leerlaufs bei currentspeaker = 0
let interval = setInterval(function () {
    if(allSpeakerTimes.length ){
        allSpeakerTimes[currentSpeaker] += 1;
        let mytime = document.getElementById(String("0"+currentSpeaker));
        mytime.innerHTML = changeTimeFormat(allSpeakerTimes[currentSpeaker]);
    }
}, 1000);


// eventlistener für den hinzufügen button
const button = document.getElementById('hinzufuegen');
button.addEventListener('click', function () {

    let redner = document.getElementById('redner').value;

    if( redner !== ""){
        let newIndex = allSpeakerTimes.length;

        let entry = document.createElement('li');
        entry.innerHTML = redner +' <p id='+ String("0"+newIndex)+'>00:00:00</p> <button id='+String(newIndex)+' onclick="startTime('+newIndex+')" class="buttons">Stop</button>';
        let list = document.getElementById('redner-list');
        list.appendChild(entry);

        allSpeakerTimes[newIndex] = 0;
        startTime(newIndex);
    }
    document.getElementById('redner').value= "";
});


function changeTimeFormat(seconds) {
    let s = seconds%60;
    let m = Math.floor(seconds/60)%60;
    let h = Math.floor(Math.floor(seconds/60)/60);
    return ' '+String(h).padStart(2,"0")+':'+String(m).padStart(2,"0")+':'+String(s).padStart(2,"0");
}

function startTime(index) {
    currentSpeaker = index;
    [...document.getElementsByClassName("buttons")].forEach(function (b) {
        if(b.id !== String(currentSpeaker)){
            b.innerHTML = "Start!";
            b.onclick = () => startTime(b.id);
        } else {
            b.innerHTML = "Stopp!";
            b.onclick = () => stopTime();
        }
    });
}

function stopTime() {
    currentSpeaker = 0;
    [...document.getElementsByClassName("buttons")].forEach(function (b) {
        if(b.id !== String(currentSpeaker)){
            b.innerHTML = "Start!";
            b.onclick = () => startTime(b.id);
        }
    });
}