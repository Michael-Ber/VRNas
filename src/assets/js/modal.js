export const modal = () => {
    try {
        const body = document.querySelector('.page__body');
        const modals = document.querySelectorAll('.modal');
        const modalOverlay = document.querySelector('.modal-overlay');
        const btns = document.querySelectorAll('[data-open]');


        btns.forEach(btn => {
            btn.addEventListener('click', function() {
                showModal(btn)
            })
        })
        modalOverlay.addEventListener('click', (e) => {
            hideModal()
        })

        function showModal(btn) {
            const btnAttr = btn.getAttribute('data-open');
            const modal = document.querySelector(`[data-modal = ${btnAttr}]`)
            switch(btnAttr) {
                case 'video': setVideoSource(modal, btn); break;
                default: break;
            }
            body.style.overflow = 'hidden';
            modalOverlay.classList.add('modal-overlay_visible');
            modal.classList.add('modal_visible')
        }
        
        function hideModal() {
            modals.forEach(modal => {
                modal.classList.remove('modal_visible');
            })
            modalOverlay.classList.remove('modal-overlay_visible');
            body.style.overflow = 'auto';
        }

        function setVideoSource(modal, btn) {
            const video = modal.querySelector('video');
            const source = document.createElement('source');
            Array.from(video.children).forEach(child => child.remove())
            source.setAttribute('src', btn.getAttribute('data-src'));
            source.setAttribute('type', 'video/mp4');
            video.appendChild(source);
        }

    } catch (error) {
        console.log(error)
    }
}