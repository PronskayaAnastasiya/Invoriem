$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 2,
                margin: 32,
                loop: true,
                dots: false
            },
            // breakpoint from 480 up
            601: {
                items: 3,
                margin: 32,
                loop: true,
                dots: false
            },
            // breakpoint from 768 up
            1001: {
                items: 3,
                margin: 48,
                loop: true,
                dots: false
            }
        }
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


/*Mobile-nav*/
const openNavbtn = document.querySelector('#openMobileNav');
const mobileNav = document.querySelector("#mobileNav");
const closeMobileNav = document.querySelector("#closeMobileNav");

openNavbtn.onclick = function () {
    mobileNav.classList.remove('none');
    document.body.classList.add('no-scroll');
}

closeMobileNav.onclick = function () {
    mobileNav.classList.add('none');
    document.body.classList.remove('no-scroll');
}