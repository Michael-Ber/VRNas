export const playVideo = () => {
    try {
        const player = document.querySelector('.dreams__video-player');
        const playBtn = document.querySelector('.dreams__video-play');
        const comments = document.querySelector('.dreams__video-comments');

        window.addEventListener('click', (e) => {
            if((e.target.tagName === 'svg' && e.target.parentNode.className === 'dreams__video-play') || (e.target.tagName === 'path' && e.target.parentNode.parentNode.className === 'dreams__video-play')) {
                player.play();
                playBtn.style.display = 'none';
            }
        })
        player.onplay = () => {
            playBtn.style.display = 'none';
            comments.style.display = 'none';
        }
        player.onpause = () => {
            playBtn.style.display = 'block';
        }
    } catch (error) {
        console.log(error)
    }
}