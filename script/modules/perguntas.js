export default function perguntas() {
    const perguntas = document.querySelectorAll('.perguntas button');


    function handleClick(event) {
        event.preventDefault();
        const pergunta = event.target;
        const controls = pergunta.getAttribute('aria-controls');
        const resposta = document.getElementById(controls);

        resposta.classList.toggle('ativo');
        const ativa = resposta.classList.contains('ativo');
        pergunta.setAttribute("aria-expanded", ativa);
    }

    perguntas.forEach( pergunta => {
        pergunta.addEventListener('click', handleClick)
    })
}