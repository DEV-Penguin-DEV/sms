$(document).ready(function () {
    $('.menu__lang, .header__lang').on('click', function (e){
        $(this).hasClass('open') ?  $(this).removeClass('open') :  $(this).addClass('open');
    })

    $('.header__hamb').on('click', function (e){
        $(this).hasClass('open') ?  $(this).removeClass('open') :  $(this).addClass('open');
        $('.menu').hasClass('open') ?  $('.menu').removeClass('open') :  $('.menu').addClass('open');
    })

    $('.header__hamb-cabinet').on('click', function (e){
        $(this).hasClass('open') ?  $(this).removeClass('open') :  $(this).addClass('open');
        $('.menu').hasClass('open') ?  $('.menu').removeClass('open') :  $('.menu').addClass('open');
    })

})
