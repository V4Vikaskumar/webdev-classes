const songlist = document.querySelectorAll('#song-list')
const audioplayer = document.getElementById('audio-player')
let last = document.querySelector('.third')

songlist.forEach(song => {
    song.addEventListener('click', function() {
        // stop current music
        audioplayer.pause();
        audioplayer.currentTime = 0; // Reset the time

        // change the current song to new song
        audioplayer.src = this.getAttribute('data-src')

        // play the new song
        audioplayer.play();
        const songspanchecker = last.querySelector('span')
        if(songspanchecker){
            songspanchecker.remove();
        }

        let songname = document.createElement('span')
        let songtext = song.querySelector('.song-name')
        let checksongtext = songtext ? songtext.innerText : "";
        songname.innerText = checksongtext
        last.append(songname)
    })
})