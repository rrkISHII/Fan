document.addEventListener('DOMContentLoaded', () => {

    
    const buttons = document.querySelectorAll('.bottom-buttons button');
    const fanImage = document.querySelector('.fan-image');

    // variables para sa sound files
    let fanSounds = {
        1: new Audio('speed1.mp3'),
        2: new Audio('speed2.mp3'),
        3: new Audio('speed3.mp3')
    };
    let clicky= new Audio('../audio/clicky.mp3');

    // object para sa loop ng sounds
    // check mo voices nila
    Object.values(fanSounds).forEach(sound => {
        sound.loop = true;
    });
    Object.values(clicky).forEach(sound => {
        sound.loop = false;
    });

    // function para end ng sound.lahat ng sound
    function stopAllAudio() {
        Object.values(fanSounds).forEach(sound => {
            sound.pause();
            sound.currentTime = 0;
        });
    }
    

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            clicky.play();
            buttons.forEach(btn => btn.classList.remove('clicked'));
            
            button.classList.add('clicked');
            fanImage.classList.remove('speed-1', 'speed-2', 'speed-3');

            stopAllAudio();

            switch (index) {
                case 0:
                    break;

                case 1:
                    clicky.play();
                    fanImage.classList.add('speed-1');
                    fanSounds[1].play();
                    break;

                case 2:
                    clicky.play();
                    fanImage.classList.add('speed-2');
                    fanSounds[2].play();
                    break;

                case 3:
                    clicky.play();
                    fanImage.classList.add('speed-3');
                    fanSounds[3].play();
                    break;
            }
        });
    });
});
