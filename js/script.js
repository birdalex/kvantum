$(document).ready(function () {
  $('#catolog-btn').on('click',function(){
    $('#marker-catalog').toggleClass('marker-catalog-active');
    $('.catalog-block').toggleClass('catalog-block-active');
    $('.menu-catalog').slideToggle();
  });
  $('.basket-block').on('click', function () {
    $('.basket-block__marker').toggleClass('basket-block__marker-active');
    $('.basket-block-active').slideToggle();
  });
});