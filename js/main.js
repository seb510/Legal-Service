// Функция переключения табов Tab
    $('.tabs').on('click', function () {
        var currTab = $(this).index();

        $('.tabs').removeClass('tabs-active');
        $(this).addClass('tabs-active');

        $('.tab-content').removeClass('active');
        $('.tab-content').eq(currTab).addClass('active');
    });

    // Функция HamBurger
    document.querySelector('.menu__btn').addEventListener('click', function(){
        document.querySelector('.menu__btn span').classList.toggle('active');
        document.querySelector('.menu').classList.toggle("animate");
      });


    // Функция Modal Window
    $('.btn-call, .offer__btn, .help-info__bat_up, .help-info__bat_down, .call__btn').on('click', function () {
        $('.window').fadeIn('slow');
    });

    $('.window__closed').on('click', function () {
        $('.window').hide('slow');
    });

// Функция Up navigator
$(window).on('scroll resize', function () {
    var pixelTop = $(window).scrollTop();
    if (pixelTop > 0 ) {
        $('.navigation').addClass('active');
    } else  if (pixelTop < 1) {
        $('.navigation').removeClass('active');
    }
});

// Функция Parallax
    var scene = $('#scene').get(0);
    var parallaxInstance = new Parallax(scene);

// Функция SLIDER
var mySwiper = new Swiper ('.swiper-container', {
    direction : 'horizontal',
    spaceBetween : 20,
    slidesPerView: 3,
    loop : true,
    stopOnLastSlide : false,
    autoplay : {
        delay: 2000
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is >= 768px
       768: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        // when window width is >= 1200
        1200: {
            slidesPerView: 3,
            spaceBetween: 10
        }
    },
    navigation: {
        nextEl: '.right',
        prevEl: '.left',
    }
});

// Функция Validation
    $(".footer-form__input, .window__form").validate({
        rules : {
            firstName : {
                required : true
            },
            phoneNumber : {
                digits : true,
                required : true,
                minlength: 10,
                maxlength: 11
            },
            email: {
                required : true,
                minlength: 10,
                maxlength: 11
            }
        },
        messages: {
            firstName : 'Введите ваше имя правильно',
            phoneNumber: 'Введите ваш номер',
            email: 'Введите ваш электронный адресс'
        }
    });

    //Map
/*    function initMap() {
        var myLatLng = {lat: 55.8020011, lng: 37.5830611};
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 16,
            center: myLatLng
        });

        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'hello'
        });

        marker.setMap(map);
    }
*/





