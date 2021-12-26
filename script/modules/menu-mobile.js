export default class MenuMobile {
    constructor(icon, menu) {
        this.icon = document.querySelector(icon)
        this.menu = document.querySelector(menu)
        this.iconMenu = document.querySelector('.menu-hamb')
        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        console.log(event.target) 
        this.menu.classList.toggle('ativo')
        this.iconMenu.classList.toggle('ativo')
    }

    addEvents() {
        this.icon.addEventListener('click', this.handleClick);
    }

    init() {
        this.addEvents();
    }
}