//Elementos HTML
var $cartWidget = document.querySelector('#cart');
var $cartClose = document.querySelector('#close');
var $widgetCart = document.querySelector('#widget');

$cartWidget.addEventListener('click', () => {
  $widgetCart.classList.add('widget__open');
});

$cartClose.addEventListener('click', () => {
  $widgetCart.classList.remove('widget__open');
});
