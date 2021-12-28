export default function parametros() {
    const parametros = new URLSearchParams(location.search);

    parametros.forEach(item => {
        const element = document.getElementById(item)
        console.log(element)
        if(element) {
            element.checked = true;
        }
    })
}