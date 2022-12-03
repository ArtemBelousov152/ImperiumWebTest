import Swiper from 'swiper';
import CircleType from 'circletype';

window.addEventListener("DOMContentLoaded", () => {
    const slider = new Swiper('.title__slider', {
        slidesPerView: 1.7,
        initialSlide: 1,
        centeredSlides: true,
        speed: 800
        
    })

    document.querySelector('.title__slider_prev').addEventListener('click', () => {
        slider.slideNext();
    })
    document.querySelector('.title__slider_next').addEventListener('click', () => {
        slider.slidePrev();
    })

    const circles = document.querySelectorAll('.title__slide_text')
    circles.forEach(item => {
        new CircleType(item);
    })
    
})