export const tabs = () => {
    try {
        const faqTab = document.querySelector('.page-faq__tab');
        const controls = faqTab.querySelector('.tab-faq__controls').children;
        const contentItems = faqTab.querySelectorAll('.tab-faq__content-item');

        Array.from(controls).forEach((control, i, arr) => {
            control.addEventListener('click', (e) => {
                const self = e.target;
                const attr = self.getAttribute('data-tab');
                const items = Array.from(contentItems);
                removeBtnActive(arr);
                showAllItems(items);
                self.classList.add('tab-faq__btn_active');
                items.forEach(contentItem => {
                    if(contentItem.getAttribute('data-tab') !== attr && attr !== 'all') {
                        contentItem.style.display = 'none';
                    }
                })
                if(attr === 'all') {
                    showAllItems(items);
                }

            })
        })

        function showAllItems(items) {
            items.forEach(item => {
                item.style.display = 'block';
            })
        }
        function removeBtnActive(btns) {
            btns.forEach(btn => {
                btn.classList.remove('tab-faq__btn_active')
            })
        }
    } catch (error) {
        console.log(error)
    }
}