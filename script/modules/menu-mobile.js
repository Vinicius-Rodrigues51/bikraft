import outsideClick from "./outsideClick.js";

export default class MenuMobile {
    constructor(icon, menu) {
        this.icon = document.querySelector(icon)
        this.menu = document.querySelector(menu)
        this.events = ['click', 'touchstart']
        this.iconMenu = document.querySelector('.menu-hamb')
        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.menu.classList.toggle('ativo')
        this.iconMenu.classList.toggle('ativo')

        outsideClick(this.icon, this.events, () => {
            this.menu.classList.remove('ativo')
            this.icon.classList.remove('ativo')
            this.iconMenu.classList.remove('ativo')
        })
    }

    addEvents() {
        this.icon.addEventListener( 'click', this.handleClick )
    }

    init() {
        this.addEvents();
        return this;
    }
}