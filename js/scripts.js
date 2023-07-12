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

  // // Swiper | Слайдер
  // if ($('#swiper').length) {
  //   const swiper = new Swiper('#swiper', {
  //     slidesPerView: 1,
  //     simulateTouch: false,
  //     preventClicks: false,
  //     preventClicksPropagation: false,
  //     threshold: 3,
  //     pagination: {
  //       el: '.swiper-pagination',
  //       clickable: true,
  //     },
  //     navigation: {
  //       prevEl: '.swiper-button-prev',
  //       nextEl: '.swiper-button-next',
  //     },
  //     scrollbar: {
  //       el: '.swiper-scrollbar',
  //     },
  //   });
  // }

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
      threshold: 3,
    });
    const sliderProduct = new Swiper('#sliderProduct', {
      slidesPerView: 1,
      threshold: 3,
      thumbs: {
        swiper: swiperProductThumb,
      },
    });
  }

  // // Swiper | Слайдер (множество одинаковых слайдеров)
  // if ($('.js-slider-wrapper').length) {
  //   const Swipers = Array.from(document.querySelectorAll('.js-slider-wrapper'), n => {
  //     const Slider = new Swiper(n.querySelector('.js-slider'), {
  //       slidesPerView: 2.2,
  //       spaceBetween: 10,
  //       threshold: 3,
  //       pagination: {
  //         el: n.querySelector('.swiper__pagination'),
  //         clickable: true,
  //       },
  //       navigation: {
  //         prevEl: n.querySelector('.swiper-button-prev'),
  //         nextEl: n.querySelector('.swiper-button-next'),
  //       },
  //       breakpoints: {
  //         576: {
  //           slidesPerView: 3,
  //           spaceBetween: 10,
  //         },
  //         769: {
  //           slidesPerView: 3,
  //           spaceBetween: 30,
  //         },
  //         992: {
  //           slidesPerView: 3,
  //           spaceBetween: 30,
  //         },
  //         1200: {
  //           slidesPerView: 4,
  //           spaceBetween: 30,
  //         },
  //         1400: {
  //           slidesPerView: 5,
  //           spaceBetween: 30,
  //         },
  //       }
  //     });
  //   })
  // }

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

  // // Air Datepicker | Календарь
  // new AirDatepicker('#airDatepicker', {
  //   position: 'right top',
  // });

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

  // // Аккордеон
  // function accordion(accordion, settings) {
  //   if (accordion.length) {
  //     $(accordion).each(function () {
  //       let currentAccordion = $(this);
  //       let item = currentAccordion.find('.accordion__item');
  //       let trigger = currentAccordion.find('.js-accordion-trigger');
  //       let content = currentAccordion.find('.js-accordion-content');
  //       let time = 300;
  //       console.log(currentAccordion);
  //       trigger.on('click', function () {
  //         let currentTrigger = $(this);
  //         let data = currentTrigger.data('content');
  //         if (!currentTrigger.hasClass('active')) {
  //           if (settings) {
  //             content.stop().slideUp(
  //               time,
  //               function () {
  //                 $(this).removeClass('open');
  //               }
  //             )
  //             trigger.removeClass('active');
  //             item.removeClass('active');
  //           };
  //           currentTrigger.addClass('active');
  //           currentTrigger.closest('.accordion__item').addClass('active');
  //           currentAccordion.find('#' + data).stop().slideDown(
  //             time,
  //             function () {
  //               $(this).addClass('open')
  //             }
  //           );
  //         } else {
  //           currentTrigger.removeClass('active');
  //           currentTrigger.closest('.accordion__item').removeClass('active');
  //           currentAccordion.find('#' + data).stop().slideUp(
  //             time,
  //             function () {
  //               $(this).removeClass('open')
  //             }
  //           );
  //         }
  //       })
  //     })
  //   }
  // }
  // accordion($('.js-accordion'), true);

  // // Sticky Sidebar | Липкий сайдбар
  // if ($('.js-sticky').length) {
  //   var stickySidebar = new StickySidebar('.js-sticky', {
  //     topSpacing: 65,
  //     bottomSpacing: 10,
  //     containerSelector: false,
  //     innerWrapperSelector: '.sidebar__inner',
  //     resizeSensor: true,
  //     stickyClass: 'is-affixed',
  //     minWidth: 0
  //   });
  // }

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

  // // Показать еще пункты списка
  // function showMoreFilters(list, count) {
  //   let btn = list.find('.js-more-btn');
  //   list.each(function () {
  //     $(this).find('li').each(function (index) {
  //       if (index > count - 1) {
  //         $(this).hide();
  //       }
  //     })
  //   })
  //   btn.on('click', function (e) {
  //     e.preventDefault();
  //     $(this).hide();
  //     $(this).parent().find($('.js-more-list li')).show();
  //   })
  // }
  // showMoreFilters($('.js-more-list'), 3);

  // // Очистить фильтр 
  // function clearFilter() {
  //   let clearBnt = $('.js-filters-clear');
  //   clearBnt.on('click', function () {
  //     $(this).closest('.filters').find('input').prop('checked', false);
  //   })
  // }
  // clearFilter();

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

  // // noUiSlider || Ползунок выбора
  // if (document.getElementById('noUiSlider')) {
  //   const rangeSlider = document.getElementById('noUiSlider');
  //   const inputMin = document.getElementById('noUiSliderMin');
  //   const inputMax = document.getElementById('noUiSliderMax');
  //   let min = Number(rangeSlider.dataset.min);
  //   let max = Number(rangeSlider.dataset.max);
  //   let nowMin = Number(rangeSlider.dataset.nowmin);
  //   let nowMax = Number(rangeSlider.dataset.nowmax);
  //   console.log(nowMin,nowMax);
  //   noUiSlider.create(rangeSlider, {
  //     start: [nowMin, nowMax],
  //     connect: true,
  //     step: 10,
  //     range: {
  //       'min': min,
  //       'max': max
  //     }
  //   });
  //   rangeSlider.noUiSlider.on('update', function (values, handle) {
  //     if (handle) {
  //       inputMax.value = values[handle];
  //     } else {
  //       inputMin.value = values[handle];
  //     }
  //   });
  //   inputMin.addEventListener('change', function () {
  //     rangeSlider.noUiSlider.set([this.value, null]);
  //   });
  //   inputMax.addEventListener('change', function () {
  //     rangeSlider.noUiSlider.set([null, this.value]);
  //   });
  // };

  // // Анимация счетчика
  // function countNumber(block) {
  //   block.each(function () {
  //     var scrollTop = false,
  //       countNumberStatus = true,
  //       $this = $(this),
  //       blockPosition = $this.position().top,
  //       valUp = $this.data('val-up'),
  //       valTo = $this.data('val-to'),
  //       valDuration = $this.data('duration'),
  //       valDelay = $this.data('delay');
  //     $this.html(0);
  //     gofunc();
  //     $(window).scroll(function () {
  //       gofunc();
  //     });
  //     function gofunc() {
  //       scrollTop = $(window).scrollTop() + $(window).height() - 150;
  //       if (scrollTop > blockPosition && countNumberStatus) {
  //         setTimeout(() => {
  //           $({ numberValue: valUp }).animate({ numberValue: valTo }, {
  //             duration: valDuration,
  //             easing: "swing",
  //             step: function (val) {
  //               $this.html(Math.ceil(val));
  //             }
  //           });
  //         }, valDelay);
  //         countNumberStatus = false;
  //       }
  //     }
  //   });
  // };
  // countNumber($(".count-number"));

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

}