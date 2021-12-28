export default class MenuMobile {
    constructor(icon, menu) {
        this.icon = document.querySelector(icon)
        this.menu = document.querySelector(menu)
        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.menu.classList.toggle('ativo')
        this.icon.classList.toggle('ativo')
    }

    addEvents() {
        this.icon.addEventListener( 'click', this.handleClick )
    }

    init() {
        this.addEvents();
        return this;
    }
}