export default function galeria() {
    const imgGaleria = document.querySelectorAll('.bicicleta-imagens img');
    const imgContainer = document.querySelector('.bicicleta-imagens');

    function handleClick(event) {
        const img = event.target;
        const media = matchMedia('(min-width: 940px)').matches;
        if(media) {
            imgContainer.prepend(img);
        }

    }

    imgGaleria.forEach( item => {
        item.addEventListener('click', handleClick);
    })
}