import AnimateNumbers from './modules/AnimateNumbers.js';
import MobileMenu from './modules/MobileMenu.js';
import ScrollAnimation from './modules/ScrollAnimation.js';

const section = document.getElementById('numeros');

if (section) {
  const scroll = new ScrollAnimation(section);
}

const hero = document.getElementById('hero');
if (hero) {
  const heroScroll = new ScrollAnimation(hero);
}

const copy = document.getElementById('copy');
if (copy) {
  const copyScroll = new ScrollAnimation(copy);
}

const number = document.querySelectorAll<HTMLElement>('#numeros [data-count]');
const numberSection = document.querySelector<HTMLElement>('#numeros');

if (number && numberSection && number.length) {
  const animaNumber = new AnimateNumbers(Array.from(number), numberSection);
}

const menu = document.querySelector<HTMLElement>('.menu');
const mobileButton = document.querySelector<HTMLElement>('.mobileMenu');

if (menu && mobileButton) {
  const menuMobile = new MobileMenu(menu, mobileButton);
}
