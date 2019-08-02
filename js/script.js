$(document).ready(function () {
  $('#catolog-btn').on('click',function(){
    $('#marker-catalog').toggleClass('marker-catalog-active');
    $('.catalog-block').toggleClass('catalog-block-active');
    $('.menu-catalog').slideToggle();
  });
});