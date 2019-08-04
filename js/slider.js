$('.main-slider-items').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: true,
	// autoplay: true,
	arrows: true,
	// autoplaySpeed: 2000,
	adaptiveHeight: true,
	prevArrow: '<button class="btn-main-slider btn-main-slider__left" type="button"><img src="./img/icon/arrow_slider.svg" alt=""></button>',
	nextArrow: '<button class="btn-main-slider btn-main-slider__right" type="button"><img src="./img/icon/arrow_slider.svg" alt=""></button>'
});

$('.popular-goods-items').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	arrows: true,
	prevArrow: '<button class="btn-popular btn-popular__left" type="button"><img src="./img/icon/arrow_slider.svg" alt=""></button>',
	nextArrow: '<button class="btn-popular btn-popular__right" type="button"><img src="./img/icon/arrow_slider.svg" alt=""></button>'
});


$('.discounted-goods-items').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	arrows: true,
	prevArrow: '<button class="btn-discounted btn-discounted__left" type="button"><img src="./img/icon/arrow_slider.svg" alt=""></button>',
	nextArrow: '<button class="btn-discounted btn-discounted__right" type="button"><img src="./img/icon/arrow_slider.svg" alt=""></button>'
});