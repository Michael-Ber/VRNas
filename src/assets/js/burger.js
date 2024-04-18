export const burger = () => {
    try {
        const header = document.querySelector('.header');
        const burgerBtn = document.querySelector('.burger__btn');
        const menu = document.querySelector('.burger__menu');
        const body = document.querySelector('.page__body');
        const links = document.querySelectorAll('.burger__item');
        const close = document.querySelector('.burger__close');

        burgerBtn.addEventListener('click', (e) => {
            header.classList.toggle('header__under');
            menu.classList.toggle('burger__menu_active');
            burgerBtn.classList.toggle('burger__btn_active');
            if(burgerBtn.classList.contains('burger__btn_active')) {
                burgerBtn.setAttribute('aria-expanded', true);
            }else {
                burgerBtn.setAttribute('aria-expanded', false);
            }
            if(!menu.classList.contains('burger__menu_active')) {
                body.style.overflow = 'auto';
                menu.setAttribute('aria-hidden', true)
            }else {
                menu.setAttribute('aria-hidden', false)
            }
        })
        window.addEventListener('resize', () => {
            menu.classList.remove('burger__menu_active');
            burgerBtn.classList.remove('burger__btn_active');
            header.classList.remove('header__under');
        })
        window.addEventListener('scroll', () => {
            if(menu.classList.contains('burger__menu_active')) {
                body.style.overflow = 'hidden';
            }else {
                body.style.overflow = 'auto';
            }
        })
        links.forEach(item => {
            item.addEventListener('click', () => {
                menu.classList.remove('burger__menu_active');
                burgerBtn.classList.remove('burger__btn_active');
            })
        })
        close.addEventListener('click', () => {
            menu.classList.remove('burger__menu_active');
            burgerBtn.classList.remove('burger__btn_active');
            burgerBtn.setAttribute('aria-expanded', false);
            menu.setAttribute('aria-hidden', true);
            body.style.overflow = 'auto';
            header.classList.remove('header__under');
        })
        
    } catch (error) {
        console.log(error)
    }
}