const balls = document.getElementsByClassName('ball');
const eyes = document.getElementsByClassName('eye');

/* move pupils */
function moveBalls(clientX, clientY) {
    const x = (clientX * 30) / window.innerWidth + 35 + '%';
    const y = (clientY * 30) / window.innerHeight + 35 + '%';

    for (let i = 0; i < balls.length; i++) {
        balls[i].style.left = x;
        balls[i].style.top = y;
        balls[i].style.transform = 'translate(-50%, -50%)';
    }
}

function resetBalls() {
    for (let i = 0; i < balls.length; i++) {
        balls[i].style.left = '50%';
        balls[i].style.top = '50%';
        balls[i].style.transform = 'translate(-50%, -50%)';
    }
}

function syncBlink() {
    for (let i = 0; i < eyes.length; i++) {
        eyes[i].classList.remove('blinking');
    }

    void document.body.offsetWidth;

    for (let i = 0; i < eyes.length; i++) {
        eyes[i].classList.add('blinking');
    }
}

document.addEventListener('mousemove', function(event) {
    moveBalls(event.clientX, event.clientY);
});

document.addEventListener('mouseleave', function() {
    resetBalls();
});

document.addEventListener('touchmove', function(event) {
    const touch = event.touches[0];
    moveBalls(touch.clientX, touch.clientY);
}, { passive: true });

document.addEventListener('touchend', function() {
    resetBalls();
}, { passive: true });

for (let i = 0; i < eyes.length; i++) {
    eyes[i].addEventListener('click', function() {
        eyes[i].classList.add('click-close');

        setTimeout(() => {
            eyes[i].classList.remove('click-close');
            syncBlink();
        }, 400);
    });

    eyes[i].addEventListener('touchstart', function() {
        eyes[i].classList.add('click-close');

        setTimeout(() => {
            eyes[i].classList.remove('click-close');
            syncBlink();
        }, 400);
    }, { passive: true });
}

resetBalls();
syncBlink();