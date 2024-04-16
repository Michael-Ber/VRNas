import { burger } from "./burger.js"
import { playVideo } from "./video.js";
import { accordion } from "./accordion.js";
import { swipers } from "./swipers.js";

window.addEventListener('DOMContentLoaded', () => {
    burger();
    playVideo();
    accordion();
    swipers();
})