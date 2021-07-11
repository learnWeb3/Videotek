function playVideoClickedOnPlayerModal() {
    $('.card-body').click(function() {
        var videoSource = $(this).find('video source');
        $('#modal-video-player').removeClass('h-0').addClass('d-flex').addClass('h-100').removeClass('w-0').addClass('w-100');
        $('#video-player-modal').attr('src', videoSource.attr('src'));
        // SET VIDEO POSITION BASED ON COOKIE PREVIOUSLY REGISTERED
        setTimeOfVideoOnModalOpen('video-player-modal');
    });
    $('#video-modal-close').click(function() {
        // GET VIDEO POSITION AND SRC TO CREATE COOKIE
        setCookieVideoPosition('video-player-modal');
        var videoOnModal = document.getElementById('video-player-modal')
        $('#modal-video-player').removeClass('h-100').addClass('h-0').removeClass('d-flex').removeClass('w-100').addClass('w-0');
        if (videoOnModal.paused) {} else { videoOnModal.pause() };
    })
};


// Function to remember user position on video modal
function getVideoPosition(idVideo) {

    var video = document.getElementById(idVideo);

    var videoPosition = `${video.currentTime}`;
    return videoPosition

};

// Function to set cookie remembering associating video url and video position IMPORTANT: ON MODAL CLOSE

function setCookieVideoPosition(idVideo) {
    var video = document.getElementById(idVideo);
    document.cookie = `${video.src}=${getVideoPosition(idVideo)}`;
};

// Function to split video url from user position

function setVideoUrlAppartFromUserPosition() {
    var cookies = document.cookie.split(';');

    for (i = 0; i < cookies.length; i++) {
        cookies[i] = cookies[i].split('=');
    };
    return cookies
};

// Function to retrieve matching url of video currently playing and appropriate time IMPORTANT: MOST important method
// adding trim to remove trailing whitespace and converting to integer for later usage 
function checkCurrentVideoSrcAndRetrieveUserPosition(idVideo) {
    var videoTimeNestedArray = setVideoUrlAppartFromUserPosition();
    var objectlinkedTimeToVideo = {};
    videoTimeNestedArray.forEach(element => { objectlinkedTimeToVideo[element[0].trim()] = parseInt(element[1]) });

    var videoSrc = document.getElementById(idVideo).src;

    var currentUserVideoPosition = objectlinkedTimeToVideo[videoSrc]

    if (currentUserVideoPosition != undefined) {
        return currentUserVideoPosition
    } else {
        return 0
    };

};

// Function to set position on video acoording previous method IMPORTANT: ON MODAL OPEN

function setTimeOfVideoOnModalOpen(idVideo) {
    var video = document.getElementById(idVideo);
    video.currentTime = checkCurrentVideoSrcAndRetrieveUserPosition(idVideo);
}