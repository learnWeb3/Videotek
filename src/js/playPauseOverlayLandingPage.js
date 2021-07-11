function playPauseVideoWithButton() {
    var video = document.getElementById('video-landing-page')
    var playpauseButton = document.getElementById('play-pause-switch')

    if (video.paused) {
        video.play();
        playpauseButton.src = 'src/img/icons/pause_button.png';
    } else {
        video.pause();
        playpauseButton.src = 'src/img/icons/play_button.png';

    }
}