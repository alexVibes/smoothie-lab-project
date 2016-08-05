jQuery(document).ready(function() {

    // main menu
    jQuery('#top-menu', 'nav').on('click', 'a', function() {
        var target = jQuery(this).attr('href'),
            top = jQuery(target).offset().top;
            // blocks = ['#mission', '#menu', '#team', '#cooperation'].forEach(function(blockSelector) {
            //    var contentHeight = $(blockSelector).height(),
            //        windowHeight = $(window).height(),
            //        top = (windowHeight - contentHeight) / 2;
        $('#page').animate({
            scrollTop: top
        }, 1000);
        return false;
    });

    // scroll window on button "more" click
    jQuery('#btn-more', '.title-block').on('click', function() {
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
    });

    jQuery('#scrollup', '.scrollup-block').click(function() {
        jQuery('#page').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

    // slideblocks in cooperation & blog section
    jQuery('.text1-wrap').click(function() {
        jQuery(this).siblings('.text2-wrap').slideToggle('200');
        jQuery(this).find('.text1-wrap .arrow i').toggleClass('fa-arrow-down fa-arrow-up');
        return false;
    });
    /*
    jQuery('.text2-wrap').click(function() {
        if (jQuery(this).find('#feedback')) {
            $.noop();
        } else {
            return false;
        }
    });*/

    // ajax in feedback
    jQuery('#feedback').submit(function() {
        var form = jQuery(this);
        var error = false;
        form.find('input, textarea').each(function() {
            if ($(this).val() == '') {
                alert('Зaпoлнитe все пoля!');
                error = true;
            }
        });
        
        if (!error) {
            var data = form.serialize();
            $.ajax({
                type: 'POST',
                url: 'send.php',
                data: data,
                beforeSend: function(data) {
                    form.find('input[type=\'submit\']').attr('disabled', 'disabled');
                },
                success: function(data) {
                    if (data['error']) {
                        alert(data['error']);
                    } else {
                        alert('Письмo oтпрaвлeнo! Скоро мы с Вами свяжемся.');
                    }
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    alert(xhr.status);
                    alert(thrownError);
                },
                complete: function(data) {
                    form.find('input[type=\'submit\']').prop('disabled', false);
                }
            });
        }
        return false;
    });
});