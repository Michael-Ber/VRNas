export const burger = () => {
    try {
        const burgerBtn = document.querySelector('.burger__btn');
        const menu = document.querySelector('.burger__menu');
        const body = document.querySelector('.page__body');
        const links = document.querySelectorAll('.burger__item');
        const close = document.querySelector('.burger__close');

        burgerBtn.addEventListener('click', (e) => {
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
        })
        
    } catch (error) {
        console.log(error)
    }
}