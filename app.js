function playSound(ev) {
    const audio = document.querySelector(`audio[data-key="${ev.keyCode}"]`);
    const key   = document.querySelector(`.key[data-key="${ev.keyCode}"]`);

    if(!audio) return; // stop the function from running when there is no audio associated with the key 
    audio.currentTime = 0; // remind to the start
    audio.play();

    key.classList.add('playing');
}

function removeTransition(ev) {
    if(ev.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll(".key");

window.addEventListener('keydown', playSound);
keys.forEach(key => key.addEventListener('transitionend', removeTransition));