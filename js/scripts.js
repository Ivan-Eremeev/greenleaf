window.onload = function () {

  // Липкое меню.
  function stikyMenu(header) {
    let headerTop = header.offset().top;
    headerToggleClass();
    $(window).scroll(function () {
      headerToggleClass();
    });
    function headerToggleClass() {
      if ($(window).scrollTop() > headerTop + 300) {
        header.addClass('sticky');
      } else if ($(window).scrollTop() <= headerTop) {
        header.removeClass('sticky');
      }
    }
  };
  stikyMenu($('#headerSticky'));

  // Выпадайки при клике по кнопке
  // Задать блокам выпадайкам айдишник совпадающий с data-drop="" в кнопке для этого блока
  // Задать кнопкам .js-drop-btn и data-drop="" с айдишником блока выпадайки
  function dropBlock(btn, lock = false) {
    let $this = undefined,
        drop = undefined,
        close = $('.js-drop-close'),
        body = $('body');
        header = $('header');
    btn.on('click', function () {
      let $this = $(this);
      let drop = $('#' + $this.data('drop'));
      let scrollWidth = (window.innerWidth - $(window).width());
      if (!$this.hasClass('is-active')) {
        $this.addClass('is-active');
        drop.addClass('open');
        if (lock) {
          body.toggleClass('lock');
          body.css('padding-right', scrollWidth);
          header.css('padding-right', scrollWidth);
        }
      } else {
        $this.removeClass('is-active');
        drop.removeClass('open');
        body.removeClass('lock');
        body.css('padding-right', 0);
        header.css('padding-right', 0);
      }
      $(document).mouseup(function (e) {
        if (!$this.is(e.target)
          && $this.has(e.target).length === 0
          && !drop.is(e.target)
          && drop.has(e.target).length === 0) {
          $this.removeClass('is-active');
          drop.removeClass('open');
          body.removeClass('lock');
          body.css('padding-right', 0);
          header.css('padding-right', 0);
        }
      });
    })
    close.on('click', function () {
      $('[data-drop="' + $(this).data('drop') +'"]').removeClass('is-active');
      $('#' + $(this).data('drop')).removeClass('open');
      body.removeClass('lock');
      body.css('padding-right', 0);
      header.css('padding-right', 0);
    })
  }
  dropBlock($('.js-drop-btn'));
  dropBlock($('.js-drop-menu'), true);

  // Swiper | Слайдер приветствия на главной
  if ($('#sliderWelcome').length) {
    const sliderWelcome = new Swiper('#sliderWelcome', {
      slidesPerView: 1,
      threshold: 3,
      effect: 'fade',
      loop: true,
      speed: 1500,
      autoplay: {
        delay: 5000,
      },
      navigation: {
        prevEl: '.welcome__arrow--prev',
        nextEl: '.welcome__arrow--next',
      },
    });
  }

  // Swiper | Слайдер "бренды"
  if ($('#sliderBrabds').length) {
    const sliderBrabds = new Swiper('#sliderBrabds', {
      slidesPerView: 2,
      spaceBetween: 10,
      pagination: {
        el: '.brands__pagination',
        clickable: true,
      },
      breakpoints: {
        576: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        769: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 6,
          spaceBetween: 30,
        },
        1150: {
          slidesPerView: 7,
          spaceBetween: 64,
        },
        1250: {
          slidesPerView: 9,
          spaceBetween: 64,
        },
      }
    });
  }

  // Swiper | Слайдер карточек товара
  if ($('.sliderCards').length) {
    const sliderCardsWrapper = Array.from(document.querySelectorAll('.cards-slider '), n => {
      const sliderCards = new Swiper(n.querySelector('.sliderCards'), {
        slidesPerView: 1,
        threshold: 3,
        spaceBetween: 40,
        navigation: {
          prevEl: n.querySelector('.cards-slider__arrow--prev'),
          nextEl: n.querySelector('.cards-slider__arrow--next'),
        },
        breakpoints: {
          576: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          769: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }
      });
    })
  }

  // Swiper | Слайдер
  if ($('#sliderProduct').length) {
    const swiperProductThumb = new Swiper('#swiperProductThumb', {
      slidesPerView: 3,
      spaceBetween: 8,
      watchSlidesProgress: true,
    });
    const sliderProduct = new Swiper('#sliderProduct', {
      slidesPerView: 1,
      threshold: 3,
      thumbs: {
        swiper: swiperProductThumb,
      },
    });
  }

  // Всплывающий текст в блоке "benefit"
  function benefitTextSlide() {
    let block = $('.benefit__block');
    block.on("mouseenter", function () {
      $(this).find('.benefit__text').stop().slideDown(400);
    });
    block.on("mouseleave", function () {
      $(this).find('.benefit__text').stop().slideUp(400);
    })
  }
  benefitTextSlide();

  // Air Datepicker | Календарь сортировка новостей
  new AirDatepicker('#airDatepicker', {
    range: true,
  });

  // Air Datepicker | Календарь выбора даты в личном кабинете
  new AirDatepicker('#airDatepickerBirthday', {
  });

  // // Magnific Popup | Попап окна
  // $('.open-popup-link').magnificPopup({
  //   mainClass: 'mfp-fade'
  // });

  // Табы
	function tabs() {
    const tabs = $('.js-tabs');
		if (tabs.length) {
			tabs.each( function () {
        let triggers = $(this).find('.js-tabs-trigger');
        let contents = $(this).find('.js-tabs-content');
        let time = 300;
        triggers.on('click', function (e) {
          e.preventDefault();
          let trigger = $(this);
          let content = $('.js-tabs-content[data-href="' + trigger.attr('href') +'"]');
          if (!trigger.hasClass('active')) {
            triggers.removeClass('active');
            trigger.addClass('active');
            contents.hide();
            contents.removeClass('open');
            content.fadeIn(time, function () {
              $(this).addClass('open');
            });
          }else {
            return false;
          }
        })
      });
		}
	}
	tabs();

  // Кнопка скролл страницы вверх
  function scrollUp() {
    const btn = $('.js-scrollup');
    $(window).scroll(function () {
      btnShowFade();
    });
    function btnShowFade() {
      if ($(this).scrollTop() > 500) {
        btn.addClass('show');
      } else if ($(this).scrollTop() < 100) {
        btn.removeClass('show');
      }
    }
    btnShowFade();
    btn.click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 500);
      return false;
    });
  }
  scrollUp();

  // Изменение количества товара (плюс минус)
  function counter(block) {
    let counter = document.querySelectorAll(block);
    if (counter) {
      counter.forEach(element => {
        let minus = element.querySelector('.js-counter-minus');
        let plus = element.querySelector('.js-counter-plus');
        let inputWrap = element.querySelector('.js-counter-input');
        let input = inputWrap.querySelector('input');
        plus.addEventListener('click', () => {
          if (Number(input.value) < 999) {
            input.value = Number(input.value) + 1;
          }
        })
        minus.addEventListener('click', () => {
          if (Number(input.value) > 0) {
            input.value = Number(input.value) - 1;
          }
        })
        input.addEventListener('keyup', () => {
          input.value = input.value.replace(/[^\d]/g, '');
        })
        input.addEventListener('blur', () => {
          if (input.value == '' || input.value == 0) {
            input.value = 1;
          }
        })
      });
    }
  }
  counter('.js-counter');

  // Селекты
  function selectToggle() {
    $('.select__trigger').each(function () {
      let trigger = $(this);
      trigger.on('click', function () {
        let triggerCurrent = $(this);
        let dropCurrent = triggerCurrent.siblings('.select__drop');
        if (!triggerCurrent.hasClass('active')) {
          triggerCurrent.addClass('active');
          dropCurrent.addClass('open');
        } else {
          triggerCurrent.removeClass('active');
          dropCurrent.removeClass('open');
        }
        $(document).mouseup(function (e) {
          if (!triggerCurrent.is(e.target)
            && triggerCurrent.has(e.target).length === 0
            && !dropCurrent.is(e.target)
            && dropCurrent.has(e.target).length === 0) {
            triggerCurrent.removeClass('active');
            dropCurrent.removeClass('open');
          }
        });
      })
    })
  }
  selectToggle();

  // Появление счетчика в карточке товара
  function showCounterProductCatd() {
    $('.js-card-product__btn--instock').each(function () {
      let btn = $(this);
      btn.on('click', function () {
        let btnCurrent = $(this);
        let hideBlock = btnCurrent.siblings('.card-product__hideblock');
        let counter = hideBlock.find('.js-counter');
        let minus = counter.find('.js-counter-minus');
        let input = counter.find('.js-counter-input input');
        btnCurrent.addClass('hide');
        hideBlock.addClass('show');
        input.val(1);
        minus.on('click', () => {
          if (Number(input.val()) < 1) {
            btnCurrent.removeClass('hide');
            hideBlock.removeClass('show');
          }
        })
      })
    })
  }
  showCounterProductCatd();

  // Select2 | Стилизация селектов
  $('.js-select2').select2({
    minimumResultsForSearch : Infinity,
  });

  // Yandex map | Кары на странице контактов
  if ($('.yandex-map').length) {
    ymaps.ready(initMapsContact);
  }

  function initMapsContact() {
    let myMap1 = new ymaps.Map('map1', {
      center: [55.84731056888396, 37.62899899999996],
      zoom: 17,
      controls: ['zoomControl']
    });
    let myPlacemark1 = new ymaps.Placemark([55.84731056888396, 37.62899899999996], null, {
      iconLayout: 'default#image',
      iconImageHref: 'img/map-mark.png',
      iconImageSize: [50, 65],
      iconImageOffset: [-25, -60]
    });
    myMap1.geoObjects.add(myPlacemark1);

    let myMap2 = new ymaps.Map('map2', {
      center: [41.34448007414508, 69.32973699999991],
      zoom: 17,
    controls: ['zoomControl']
    });
    let myPlacemark2 = new ymaps.Placemark([41.34448007414508, 69.32973699999991], null, {
      iconLayout: 'default#image',
      iconImageHref: 'img/map-mark.png',
      iconImageSize: [50, 65],
      iconImageOffset: [-25, -60]
    });
    myMap2.geoObjects.add(myPlacemark2);

    let myMap3 = new ymaps.Map('map3', {
      center: [51.09314157266934, 71.426881],
      zoom: 17,
      controls: ['zoomControl']
    });
    let myPlacemark3 = new ymaps.Placemark([51.09314157266934, 71.426881], null, {
      iconLayout: 'default#image',
      iconImageHref: 'img/map-mark.png',
      iconImageSize: [50, 65],
      iconImageOffset: [-25, -60]
    });
    myMap3.geoObjects.add(myPlacemark3);

    let myMap4 = new ymaps.Map('map4', {
      center: [47.9204397042839, 106.91725434390258],
      zoom: 17,
      controls: ['zoomControl']
    });
    let myPlacemark4 = new ymaps.Placemark([47.9204397042839, 106.91725434390258], null, {
      iconLayout: 'default#image',
      iconImageHref: 'img/map-mark.png',
      iconImageSize: [50, 65],
      iconImageOffset: [-25, -60]
    });
    myMap4.geoObjects.add(myPlacemark4);

    let myMap5 = new ymaps.Map('map5', {
      center: [55.84731056888396, 37.62899899999996],
      zoom: 17,
      controls: ['zoomControl'],
    });
    let myPlacemark5 = new ymaps.Placemark([55.84731056888396, 37.62899899999996], null, {
      iconLayout: 'default#image',
      iconImageHref: 'img/map-mark.png',
      iconImageSize: [50, 65],
      iconImageOffset: [-25, -60]
    });
    myMap5.geoObjects.add(myPlacemark5);
    myMap5.behaviors.disable('scrollZoom');
  }

  // Yandex map | Кары на странице контактов
  if ($('#map').length) {
    ymaps.ready(initMapAbout);
  }

  function initMapAbout() {
    let myMap = new ymaps.Map('map', {
      center: [55.84675525612561, 37.62902045767207],
      zoom: 17,
      controls: ['zoomControl'],
    });
    let myPlacemark = new ymaps.Placemark([55.84731056888396, 37.62899899999996], null, {
      iconLayout: 'default#image',
      iconImageHref: 'img/map-mark.png',
      iconImageSize: [50, 65],
      iconImageOffset: [-25, -60]
    });
    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');
  }

  // Видео youtube для страницы
  function uploadYoutubeVideo() {
    if ($(".js-youtube")) {

      $(".js-youtube").each(function () {
        // Зная идентификатор видео на YouTube, легко можно найти его миниатюру
        $(this).css('background-image', 'url(http://i.ytimg.com/vi/' + this.id + '/sddefault.jpg)');

        // Добавляем иконку Play поверх миниатюры, чтобы было похоже на видеоплеер
        $(this).append($('<img src="img/play.svg" alt="Play" class="video__play">'));

        $(this).one('click', function () {
          // создаем iframe со включенной опцией autoplay
          let videoId = $(this).attr('id'),
              iframe_url = "https://www.youtube.com/embed/" + videoId + "?autoplay=1&autohide=1";

          $(this).addClass('active');
  
          if ($(this).data('params')) iframe_url += '&' + $(this).data('params');
  
          // Высота и ширина iframe должны быть такими же, как и у родительского блока
          let iframe = $('<iframe/>', {
            'frameborder': '0',
            'src': iframe_url,
            'allow': "autoplay"
          })
  
          // Заменяем миниатюру HTML5 плеером с YouTube
          $(this).append(iframe);
  
        });
      });

    }
  };
  uploadYoutubeVideo();

}