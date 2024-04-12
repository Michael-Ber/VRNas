export const accordion = () => {
    try {
        const accordions = document.querySelectorAll('.accordion');
        

        accordions.forEach(accordion => {
            const items = accordion.querySelectorAll('.accordion__item');
            items.forEach(item => {
                const arrow = item.querySelector('.arrow');
                item.addEventListener('click', () => {
                    
                    const control = item.querySelector('.accordion__control')
                    const content = item.querySelector('.accordion__content');
                    item.classList.toggle('accordion__item_active');
                    arrow.classList.toggle('arrow_active');
    
                    if(item.classList.contains('accordion__item_active')) {
                        content.style.maxHeight = content.scrollHeight + 'px';
                        content.setAttribute('aria-hidden', false);
                        control.setAttribute('aria-expanded', true);
    
                    }else {
                        content.style.maxHeight = 0 + 'px';
                        content.setAttribute('aria-hidden', true);
                        control.setAttribute('aria-expanded', false);
                    }
                })
            })
        })
        
    } catch (error) {
        console.log(error)
    }
}