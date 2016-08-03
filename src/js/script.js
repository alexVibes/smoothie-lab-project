jQuery(document).ready(function() {

    // main menu
    jQuery('#top-menu', 'nav').on('click', 'a', function(event) {
        event.preventDefault();
        var target = jQuery(this).attr('href'),
            top = jQuery(target).offset().top;
            /*blocks = ['#mission', '#menu', '#team', '#cooperation'].forEach(function(blockSelector) {
                var contentHeight = $(blockSelector).height(),
                    windowHeight = $(window).height(),
                    top = (windowHeight - contentHeight) / 2;*/
        $('#page').animate({
            scrollTop: top
        }, 1000);
        return false;
    });

    // scroll window on click
    jQuery('#btn-more', '.title-block').on('click', function(event) {
        event.preventDefault();
        var target = jQuery(this).attr('href'),
            top = jQuery(target).offset().top;
        jQuery('#page').animate({
            scrollTop: top
        }, 1000);
        return false;
    });

    // scroll button fadein/fadeout & scroll on top
    jQuery(window).on('scroll', function() {
        if (jQuery(this).scrollTop() > 100) {
            jQuery('#scrollup', '.scrollup-block').fadeIn();
        } else {
            jQuery('#scrollup', '.scrollup-block').fadeOut();
        }
        return false;
    });

    jQuery('#scrollup', '.scrollup-block').click(function() {
        jQuery('#page').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

    // slideblocks in cooperations
    var slideBlocks = jQuery('#cooperation .cooperation-items .cooperation-item, #blog .blog-items .blog-item');
    slideBlocks.on('click', function(event) {
        event.preventDefault();
        //if (jQuery(this).find('.text2-wrap.closed #feedback')) {
        //    jQuery(this).find('.text1-wrap .arrow i').toggleClass('fa-arrow-down fa-arrow-up')
        //} else {
            jQuery(this).find('.text2-wrap').slideToggle('200');
            jQuery(this).siblings().find('.text2-wrap').slideUp('200');
            jQuery(this).find('.text1-wrap .arrow i').toggleClass('fa-arrow-down fa-arrow-up');
        //}
        return false;
    });

    // ajax in feedback
    $('#form').submit(function() { //устанавливаем событие отправки для формы с id=form
        var form = $(this),
            data = form.serialize(); //собераем все данные из формы
        $.ajax({
            type: 'POST', //Метод отправки
            url: 'send.php', //путь до php фаила отправителя
            data: data,
            beforeSend: function(data) { // сoбытиe дo oтпрaвки
                form.find('input[type=\'submit\']').attr('disabled', 'disabled'); // нaпримeр, oтключим кнoпку, чтoбы нe жaли пo 100 рaз
            },
            success: function(data) {
                if (data['error']) {
                    alert(data['error'])
                } else {
                   //код в этом блоке выполняется при успешной отправке сообщения
                    alert('Ваше сообщение отправлено!');
                }
            },
            complete: function(data) {
                form.find('input[type=\'submit\']').attr('disabled', false);
            }
        });
    return false;
    });
});

/*    $('#top-menu', 'nav').on('click', 'a', function(event) {
        event.preventDefault();
        var target = $(this).attr('href'),
            // top = $(target).offset().top;
            blocks = ['#mission', '#menu', '#team', '#cooperation'].forEach(function(blockSelector) {
                var contentHeight = $(blockSelector).height(),
                    windowHeight = $(window).height(),
                    top = (windowHeight - contentHeight) / 2;
                $('#page').animate({
                    scrollTop: top
                }, 1000);
                return false;
            });
    });

    $('#btn-more', '.title-block').click(function(event) {
        event.preventDefault();
        var target = $(this).attr('href'),
            top = $(target).offset().top;
        $('#page').animate({
            scrollTop: top
        }, 1000);
        return false;
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#scrollup').fadeIn();
        } else {
            $('#scrollup').fadeOut();
        }
        return false;
    });

    $('#scrollup').click(function() {
        $('#page').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });*/