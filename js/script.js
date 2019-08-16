$(document).ready(function () {
  
  // КНОПКА КАТАЛОГ
  $('#catolog-btn').on('click',function(){
    $('#marker-catalog').toggleClass('marker-catalog-active');
    $('.catalog-block').toggleClass('catalog-block-active');
    $('.menu-catalog').slideToggle();
    // СКРЫВАЕМ КОРЗИНУ ЕСЛИ АКТИВНА
    $('.basket-block-active').hide(1000);
    $('#marker-basket').removeClass('marker-basket-active');
  });
  // ФУНКИЦИЯ ВИДЕН ЛИ КАТАЛОГ 
  function visibleCatalog(){
    if ($('.menu-catalog').is(":visible")){
      $('.menu-catalog').hide(1000);
      $('#marker-catalog').removeClass('marker-catalog-active');
      $('.catalog-block').removeClass('catalog-block-active');
      
    }
  }
  $('.basket-block').on('click', function () {
    $('#marker-basket').toggleClass('marker-basket-active');
    $('.basket-block-active').slideToggle();
    visibleCatalog()
  });
  // КНОПКА ПОИСК 
  let serchBlock = $('.form-block');
  $('.search-icon__mob').on('click', function () {
    serchBlock.slideToggle();
    visibleCatalog()

  });
  // КНОПКА КОРЗИНА
  $('.basket-icon__mob').on('click', function () {
    $('.basket-block-active').slideToggle();
    visibleCatalog()
  });
  ///BURGER MENU
  $("#burger").click(function () {
    $('.burger-menu').toggleClass('burger-menu__active');
    $("#mob-menu").animate({ width: 'toggle' }, 1000);
    visibleCatalog()
  });
 ;
  // ЗАКРЫВАЕМ ОКНА ПРИ КЛИКЕ НА WEB ДОКУМЕНТ
  let window = $("body").innerWidth(); /* Узнаем ширину экрана  */
      $(document).mouseup(function (e) {
        let basket = $('.basket-icon__mob');
        let serch = $('.search-icon__mob');
        let mobMenu = $("#mob-menu");
        let menuCatalog = $('#catolog-btn');
        if(window<=600){
          if (!serch.is(e.target) && serch.has(e.target).length === 0) {
            serchBlock.hide(1000);
          }
        }
        if (window <= 960){
           if (!mobMenu.is(e.target) && mobMenu.has(e.target).length === 0) {
             $("#mob-menu").hide(1000);
             $('.burger-menu').removeClass('burger-menu__active');
           }
        }
        // if (window <= 600){
          if (!basket.is(e.target) && basket.has(e.target).length === 0) {
             $('.basket-block-active').hide(1000);
             $('#marker-basket').removeClass('marker-basket-active');
           }
        // }    
      });
  $("#mob-menu a").on('click', function () {
    if (window <= 960) {
      $("#mob-menu").animate({ width: 'toggle' }, 1000);
      $('.burger-menu').removeClass('burger-menu__active');
    }
  })
// АКАРДЕОН КАТАЛОГ 
   $('.menu-catalog a ').on('click', function (e) {
     if (window <= 800) {
      console.log('hello');
      $(this).next().slideToggle();
      $('.menu-catalog a').not(this).removeClass('wrapping-submenu-catalog__active').next().stop(true, true).slideUp();
     
     }
      
   });
  $(".myrange").ionRangeSlider({
     type: "double",
     min: 100,
     max: 1000,
     from: 100,
     to: 1000,
    
    //  grid: true
    onChange: function (data) {
      $('#slider-input-from').val();
      $('#slider-input-from').val(data.from);
      $('#slider-input-to').val(data.to);
    },
    
   });
  $('.range-input').change(function () {
    let inputId = $(this).attr('id');

    // 1. Get input value 
    let inputValue = $(this).val();

    // 2. Save sliderinstance to variable
    let my_range = $(".myrange").data("ionRangeSlider");

    // 3. Update range slider content (this will change handles positions)
    if (inputId === 'slider-input-from') {
      my_range.update({
        from: inputValue
      });
    } else {
      my_range.update({
        to: inputValue
      });
    }
  });
  // ВАЛИДАЦИЯ ФОРМЫ НА ВВОД ТОЛЬКО ЦИФР 
  $('.range-input').on('keydown', function (e) {
    if (e.key.length == 1 && e.key.match(/[^0-9'".]/)) {
      return false;
    };
  })
   //  АКАРДЕОН ФИЛЬТР
   $('.headline-filter').next().hide();
   $('.headline-filter').first().next().show();

   $('.headline-filter').click(function () {
     $(this).toggleClass('headline-filter-active');
     $(this).next().slideToggle();
    //  $('.headline-filter').not(this).removeClass('headline-filter-active').next().stop(true, true).slideUp();
   });
  //  ФУНКИЦИЯ ФИЛЬТР каталог 
   $('.sort-item').on('click',function(){
     $(this).toggleClass('sort-item-active');
   })
  $('.catalog-filter__btn').on('click',function(){
    $(this).toggleClass('catalog-filter__btn-active');
    $('.filter-block__item').slideToggle();
  })
  // $('.card-main-foto').zoom();
});
