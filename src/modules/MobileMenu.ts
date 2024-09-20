export default class MobileMenu {
  menu: HTMLElement;
  button: HTMLElement;
  activeClass: string;
  outside: string;
  html: HTMLElement;
  constructor(menu: HTMLElement, button: HTMLElement) {
    this.menu = menu;
    this.button = button;

    this.activeClass = 'active';
    this.outside = 'outside';
    this.html = document.documentElement;

    this.addClassMenu = this.addClassMenu.bind(this);
    this.outsideClick = this.outsideClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.init();
  }

  addClassMenu() {
    if (this.menu.classList.contains(this.activeClass)) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }

  closeMenu() {
    this.menu.classList.remove(this.activeClass);
    this.button.classList.remove(this.activeClass);
    this.menu.removeAttribute(this.outside);
    document.removeEventListener('keydown', this.handleKeyPress);
    this.html.removeEventListener('click', this.handleOutsideClick);
  }

  openMenu() {
    this.menu.classList.add(this.activeClass);
    this.button.classList.add(this.activeClass);
    this.outsideClick();
    document.addEventListener('keydown', this.handleKeyPress);
  }

  outsideClick() {
    if (!this.menu.hasAttribute(this.outside)) {
      this.menu.setAttribute(this.outside, '');
      setTimeout(() => {
        this.html.addEventListener('click', this.handleOutsideClick);
      });
    }
  }

  handleOutsideClick(event: Event) {
    if (this.menu !== event.target) {
      this.closeMenu();
    }
  }

  handleKeyPress(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.closeMenu();
    }
  }

  addEventMenu() {
    this.button.addEventListener('click', this.addClassMenu);
  }

  init() {
    this.addEventMenu();
  }
}
