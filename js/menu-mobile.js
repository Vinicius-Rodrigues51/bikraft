export default class MenuMobile {
    constructor(item, menu, back) {
        this.item = document.querySelector(item);
        this.menu = document.querySelector(menu);
        this.back = document.querySelector(back)

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        event.preventDefault();
        console.log(event.target)
        this.menu.classList.add('ativo');
        this.back.classList.add('ativo');
    }

    outsideClick(event) {
        this.menu.classList.remove('ativo');
        this.back.classList.remove('ativo');
    }

    consolead(event) {
        console.log(event.target)
    }

    addEvent() {
        this.item.addEventListener('click', this.handleClick);
    }

    init() {
        this.addEvent();
        return this;
    }
}