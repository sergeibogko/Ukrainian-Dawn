const menuBtn = document.querySelector('.menu__btn');
const menuMobile = document.querySelector('.header__list');

menuBtn.addEventListener('click', () => {
  menuMobile.classList.toggle('menu--open');
});

const btnUp = {
  el: document.querySelector('.arrow'),
  show() {
    // удалим у кнопки класс btn-up_hide
    this.el.classList.remove('arrow__hide');
  },
  hide() {
    // добавим к кнопке класс btn-up_hide
    this.el.classList.add('arrow__hide');
  },
  addEventListener() {
    // при прокрутке содержимого страницы
    window.addEventListener('scroll', () => {
      // определяем величину прокрутки
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
      scrollY > 400 ? this.show() : this.hide();
    });
    // при нажатии на кнопку .btn-up
    document.querySelector('.arrow').onclick = () => {
      // переместим в начало страницы
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    };
  },
};

btnUp.addEventListener();
