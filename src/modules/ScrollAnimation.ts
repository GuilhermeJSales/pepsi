import debounce from './debounce.js';

export default class ScrollAnimation {
  section: HTMLElement;
  windowPercent: number;
  offSet: number;
  widthWindow: number;
  pageOffSet: number;
  constructor(section: HTMLElement) {
    this.section = section;
    this.windowPercent = window.innerHeight * 1;
    this.pageOffSet = window.scrollY;
    this.offSet = Math.floor(this.section.offsetTop - this.windowPercent);
    this.widthWindow = window.innerWidth;

    this.checkDistance = debounce(this.checkDistance.bind(this));
    this.onResize = debounce(this.onResize.bind(this), 1000);

    this.init();
  }

  checkDistance() {
    if (this.pageOffSet > this.offSet) {
      this.section.classList.add('active');
    }
  }

  onResize() {
    this.widthWindow = window.innerWidth;
    if (this.widthWindow <= 1180) {
      this.init();
    }
  }

  addResizeEvent() {
    window.addEventListener('resize', this.onResize);
  }

  init() {
    this.addResizeEvent();
    if (this.widthWindow <= 1180) {
      this.checkDistance();
      window.addEventListener('scroll', () => {
        this.pageOffSet = window.scrollY;
        this.checkDistance();
      });
    }
    return this;
  }
}
