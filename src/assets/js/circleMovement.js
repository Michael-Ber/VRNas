export const circleMovement = () => {
    try {
        const wrapper = document.querySelector('.design__radial-center');
        const items = wrapper.querySelectorAll('.design__radial-item');
        const controls = document.querySelector('.design__controls');
        const prev = controls.querySelector('.design__controls-btn_prev');
        const next = controls.querySelector('.design__controls-btn_next');

        const val = getTransformValues(items);

        let index = Array.from(items).findIndex(item => item.classList.contains('design__radial-item_active'));

        let enableClicking = true; //Задержка для корректного считывания getComputedStyle.transform
        prev.addEventListener('click', () => {
            if(index > 0 && enableClicking) {
                enableClicking = false;
                next.disabled = false;

                items[index-1].classList.add('design__radial-item_active');
                items[index].classList.remove('design__radial-item_active');
                
    
                items.forEach((item, i) => {
                    if(i === items.length-1 ) {
                        items[items.length-1].style.transform = getTransformValues(items)[0]
                    }
                    item.style.transform = getTransformValues(items)[i+1];
                })
                index--;
                setTimeout(() => {
                    enableClicking = true
                }, 500)
            }
            if(index < 1){
                prev.disabled = true
            }
        })
        

        

        next.addEventListener('click', () => {
            
            if(index < items.length-1 && enableClicking) {
                enableClicking = false;
                prev.disabled = false;

                items[index+1].classList.add('design__radial-item_active');
                items[index].classList.remove('design__radial-item_active');
            
    
                items.forEach((item, i) => {
                    if(i === 0 ) {
                        items[i].style.transform = getTransformValues(items)[items.length-1]
                    }
                    item.style.transform = getTransformValues(items)[i-1];
                })
                index++;
                setTimeout(() => {
                    enableClicking = true
                }, 500)
            }
            if(index > items.length-2){
                next.disabled = true
            }
        })

        function getTransformValues(items) {
            let transformValues = [];
            items.forEach((item, i) => {
                const transform = window.getComputedStyle(item).transform;
                transformValues.push(transform)
            })
            return transformValues
        }

    } catch (error) {
        console.log(error)
    }
}