import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export const swipers = () => {
    try {
        const swipers = document.querySelectorAll('.swiper');
        swipers.forEach(swiper => {
            const articlesCarousel = new Swiper(swiper, {
                loop: true,
                grabCursor: true,
                modules: [Pagination],
                slidesPerView: 1,
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true
                },
            })
        })
        // const articlesCarousel = new Swiper('.swiper', {
        //     loop: true,
        //     grabCursor: true,
        //     modules: [Pagination],
        //     slidesPerView: 1
        // })
    } catch (error) {
        console.log(error)
    }
}