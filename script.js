let finger = 0;
let song = new Audio('embrace.mp3');
let master = document.getElementById('masterplay')
let masterpause = document.getElementById('masterpause')
let progressbar = document.getElementById('progressbar')
let gif = document.getElementById('gif')

let songs = [
    { songname: "Take me to church", filepath: " ", coverpath: "", },
    { songname: "Take me to church", filepath: " ", coverpath: "", },
    { songname: "Take me to church", filepath: " ", coverpath: "", },
    { songname: "Take me to church", filepath: " ", coverpath: "", },
    { songname: "Take me to church", filepath: " ", coverpath: "", },
    { songname: "Take me to church", filepath: " ", coverpath: "", },
]

body.document.getElementById('masterpause').style.display = 'none'

master.addEventListener('click', () => {
    if (song.paused || song.currentTime <= 0) {
        song.play();
        gif.style.opacity = 1;
        masterpause.style.display = "none";
        master.remove('masterplay');
        masterpause.add('masterpause');
    }

    else {
        song.pause();
        master.add('masterplay');
        masterpause.remove('masterpause');
    }



})

// progressbar.addEventListener('timeupdate', ()