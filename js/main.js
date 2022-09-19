$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        dots: false,
        margin: 48,
        loop: true
    });
});

/*video*/

const videoPic = document.querySelector('.video__picture')
const videoBtn = document.querySelector('#video-btn');
const videoWrapper = document.querySelector('.video');
const video = document.querySelector('#video-file');

videoWrapper.addEventListener('click', function () {
    if (video.paused) {
        videoPic.classList.add('none');
        videoWrapper.classList.remove('video-overlay');
        videoBtn.classList.add('none');
        video.play();
    } else {
        video.pause();
        videoWrapper.classList.add('video-overlay');
        videoBtn.classList.remove('none');
    }
});
