export const accordion = () => {
    try {
        const accordions = document.querySelectorAll('.accordion');

        accordions.forEach(accordion => {
            const items = accordion.querySelectorAll('.accordion__item');

            items.forEach(item => {
                const btn = item.querySelector('.accordion__control');
                processAccordion(item, accordion, 'init');
                btn.addEventListener('click', () => {
                    processAccordion(item, accordion);
                })
            })
        })

        function processAccordion (item, accordion, condition='process'){
            try {
                const control = item.querySelector('.accordion__control');
                const content = item.querySelector('.accordion__content');
                const arrow = item.querySelector('.arrow');
                if(condition !== 'init') {
                    item.classList.toggle('accordion__item_active');
                    if(accordion.classList.contains('need-border')) {
                        item.classList.toggle('accordion-item-border');
                    }
                }
                if(item.classList.contains('accordion__item_active')) {
                    content.style.maxHeight = content.scrollHeight + 'px';
                    content.setAttribute('aria-hidden', false);
                    control.setAttribute('aria-expanded', true);
                    arrow.classList.add('arrow_active');
                }else {
                    content.style.maxHeight = 0 + 'px';
                    content.setAttribute('aria-hidden', true);
                    control.setAttribute('aria-expanded', false);
                    arrow.classList.remove('arrow_active');
                }
            } catch (error) {
                console.log(error)
            }
        }
        
    } catch (error) {
        console.log(error)
    }
}