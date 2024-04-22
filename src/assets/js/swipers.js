import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export const swipers = () => {
    try {
        const articlesCarousel = new Swiper('.content-articles-swiper', {
            loop: true,
            grabCursor: true,
            modules: [Pagination],
            slidesPerView: 1,
            pagination: {
                el: '.content-articles-swiper__pagination',
                type: 'bullets',
                clickable: true
            },
        })
        const blogCarousel = new Swiper('.blog-list__swiper', {
            loop: true,
            grabCursor: true,
            modules: [Pagination],
            slidesPerView: 1,
            pagination: {
                el: '.blog-list__swiper-pagination',
                type: 'bullets',
                clickable: true,
                renderBullet: function(index, className) {
                    return '<span class="' + className + '">' + (index + 1) + '</span>';
                }
            },
        })
    } catch (error) {
        console.log(error)
    }
}