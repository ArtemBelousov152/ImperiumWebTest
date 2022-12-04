import Swiper from 'swiper';
import CircleType from 'circletype';

window.addEventListener("DOMContentLoaded", () => {
    const sliderTitle = new Swiper('.title__slider', {
        slidesPerView: 1.7,
        initialSlide: 1,
        centeredSlides: true,
        speed: 800
        
    })

    document.querySelector('.title__slider_prev').addEventListener('click', () => {
        sliderTitle.slideNext();
    })
    document.querySelector('.title__slider_next').addEventListener('click', () => {
        sliderTitle.slidePrev();
    })

    const sliderSticks = new Swiper('.store__slider')
    
    document.querySelector('.store__slider_prev').addEventListener('click', () => {
        sliderSticks.slideNext();
    })
    document.querySelector('.store__slider_next').addEventListener('click', () => {
        sliderSticks.slidePrev();
    })

    const circles = document.querySelectorAll('.title__slide_text')
    circles.forEach(item => {
        new CircleType(item);
    })
    
    // const rect = document.querySelector('.title__slide_text');
    // let a = 1, b = 0, c = 0, d = 1, tx = 10, ty = 10, angle = 0, currentAngle;

    // function getAngleToRAD(){
    //     if(angle === 360){
    //         angle = 0;
    //     }

    //     return angle++ * Math.PI / 180;
    // }
    
    // function update(){
    //     currentAngle = getAngleToRAD();

    //     rect.style.transform = 'matrix(' + Math.cos(currentAngle) + ',' + Math.sin(currentAngle) + ',' + -Math.sin(currentAngle) + ',' + Math.cos(currentAngle) + ',' + tx + ',' + tx + ')'
    //     window.requestAnimationFrame(update);
    // }

    // update();
})