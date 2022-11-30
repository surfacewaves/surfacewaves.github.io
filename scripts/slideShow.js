function slider() {
    let currentPosition = 0;
    const slider = document.getElementById('_slider');
    const track = document.getElementById('slidertrack');
    const items = document.getElementsByClassName('sliderItem');
    const sliderWidth = slider.clientWidth;
    const trackWidth = items.length * sliderWidth - sliderWidth;
    const prev = document.getElementById('arrowLeft');
    const next = document.getElementById('arrowRight');
    track.style.transform = 'translateX(0px)';

    const sliderButtons = () => {
        if (currentPosition == 0)
            prev.style.display = 'none';
        else
            prev.style.display = 'block';
        if (currentPosition == -trackWidth)
            next.style.display = 'none';
        else
            next.style.display = 'block';
    };
    sliderButtons();

    next.addEventListener('click', function () {
        currentPosition -= sliderWidth;
        if (currentPosition < -trackWidth)
            currentPosition = -trackWidth;
        track.style.transform = `translateX(${currentPosition}px)`;
        sliderButtons();
    });

    prev.addEventListener('click', function () {
        currentPosition += sliderWidth
        if (currentPosition > 0)
            currentPosition = 0;
        track.style.transform = `translateX(${currentPosition}px)`;
        sliderButtons();
    });
}