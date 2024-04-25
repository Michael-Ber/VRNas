import { burger } from "./burger.js"
import { playVideo } from "./video.js";
import { accordion } from "./accordion.js";
import { swipers } from "./swipers.js";
import { headerBGAfterScrolling } from "./header-scrolling.js";
import { circleMovement } from "./circleMovement.js";
import { tabs } from "./tab.js";
import { modal } from "./modal.js";

window.addEventListener('DOMContentLoaded', () => {
    burger();
    playVideo();
    accordion();
    swipers();
    headerBGAfterScrolling();
    circleMovement();
    tabs();
    modal();
})