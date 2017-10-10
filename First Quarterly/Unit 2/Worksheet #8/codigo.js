// 1
var startVideo = () => {
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

    if (navigator.getUserMedia) {
        navigator.getUserMedia({video: true}, handleVideo, videoError);
    }

    function handleVideo(stream) {
        var video = document.querySelector("#videoElement");
        video.src = window.URL.createObjectURL(stream);
    }

    function videoError(e) {
        // do something
    }
};
startVideo();

// 2
var startAudio = () => {
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

    if (navigator.getUserMedia) {
        navigator.getUserMedia({
            audio: true,
            video: false
        }, handleAudio, audiooError);
    }

    function handleAudio(stream) {
        var audio = document.querySelector("#audioElement");
        audio.src = window.URL.createObjectURL(stream);
    }

    function audiooError(e) {
        // do something
    }
};
startAudio();