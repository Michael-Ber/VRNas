export const headerBGAfterScrolling = () => {
    try {
        const header = document.querySelector('.header');
        addHeaderBorder();
        window.addEventListener('scroll', () => {
            addHeaderBorder()
        })

        function addHeaderBorder() {
            if (window.scrollY > 50) {
                header.classList.add('header_scrolling')
            } else {
                header.classList.remove('header_scrolling')
            }
        }
    } catch (error) {
        console.log(error)
    }
}