import AOS from "aos";
import 'aos/dist/aos.css';
import gsap from "gsap";

AOS.init({
    duration: 1000,
    // 'inset' is not a valid AOS option; you might mean 'offset'
    // offset: 100
});

let menu = document.getElementById('menu');
let cross = document.getElementById('cross');

let timeline = gsap.timeline({ paused: true, reversed: true });

timeline.to('#page1', {
    right: 0,
    duration: 0.5
})
.from('#ullist li a', {
    opacity: 0,
    x: -400,
    duration: 0.6,
    stagger: 0.4,
}, "-=0.3") // Adjust the overlap as needed
.from("#cross", {
    opacity: 0,
    x: 100,
    duration: 0.5
}, "-=0.3"); // Adjust the overlap as needed

menu.addEventListener("click", () => {
    if (timeline.reversed()) {
        timeline.play();
    }
});

cross.addEventListener('click', () => {
    if (!timeline.reversed()) {
        timeline.reverse();
    }
});
