(function($, emailjs, window, document, undefined) {

    'use strict';

    // body overflow fixed on modal
    jQuery(document).ready(function() {
        if ($(".lightbox-wrapper:target").css('top') == '0%') {
            $("body").css('overflow', 'hidden');
        } else {
            $("body").css('overflow', 'visible');
        }
    });

    // close menu on navigation click
    var toggleMenu = (function($) {
        jQuery('.click-mobile').click( function(){
            jQuery('#js-closeMenu').click();
        });
    });

    function ShowLocalDate(){
        var dNow = new Date();
        var localdate= 'Today' + ' ' + dNow.getDate() + '/' + (dNow.getMonth()+1) + '/' + dNow.getFullYear() + ' ' + dNow.getHours() + ':' + dNow.getMinutes();
        $('#currentDate').html(localdate)
    }
    ShowLocalDate();

    var formCalltoAction = (function($) {

        var $form = $('form#ctaForm');

        var showFormError = function() {
            $form.find('.form-error')
                .html('Veuillez vérifier vos réponses, certains champs sont vides ou non valides').show();
        };

        var hideFormError = function() {
            $form.find('.form-error').html('').hide();
        };

        var isEmail = function(email) {
            var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return regex.test(email);
        };

        var isPhone = function(phone) {
            var regex = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
            return regex.test(phone);
        };

        // validate one field given its value and data type [email or phone]
        var validateField = function(v, dt) {
            var r = {
                'value': true,
                'message': ''
            };
            if (v === '') {
                r.value = false;
            }
            if (dt === 'email' && !isEmail(v)) {
                r.value = false;
            } else if (dt === 'phone' && !isPhone(v)) {
                r.value = false;
            }
            return r;
        };


        var validatePage = function($page){
            var $inputGroup = $page.find('.form-group');
            var valid = true;
            $inputGroup.each(function(i, e){
                var $e = $(e);
                // Si checkbox ou radiobutton
                if ($e.hasClass('form-checkbox-list')){
                    if ($e.find('input:radio:checked').length === 0) {
                        valid = false;
                    }
                } else {
                    $e.find('input, select').each(function(index, element) {
                        var $input = $(element);
                        var validateResult = validateField($input.val(), $input.data('type'));
                        if (!validateResult.value) {
                            valid = false;
                        }
                    });
                }
            });
            return valid;
        };


        var navigateToNextPage = function(currentTarget) {
            var $currentPage = $(currentTarget).closest('.lightbox-content.page');

            // Validate current page avant
            if (validatePage($currentPage)){
                hideFormError();
                var $nextPage = $currentPage.next('.lightbox-content.page');
                $currentPage.attr('data-slide', 'hideLeft');
                $nextPage.attr('data-slide', 'show');
            } else {
                showFormError();
            }

        };

        var sendEmail = function(currentTarget) {
            navigateToNextPage(currentTarget);
            var service_id = "default_service";
            var template_id = "XXXXXXX";
            var $pageConfirm = $form.find('.page-confirm');
            emailjs.sendForm(service_id, template_id, 'ctaForm')
                .then(function() {
                    $pageConfirm.find('.wait').hide(function(){
                        $pageConfirm.find('.message.success').show();
                    });
                }, function() {
                    $pageConfirm.find('.wait').hide(function(){
                        $pageConfirm.find('.message.error').show();
                    });
                });
        };

        var datajs = function(key, value) {
            return document.querySelectorAll('[data-' + key + '=' + value + ']');
        };

        var clickHandler = function(e) {
            e.preventDefault();
            var $currentPage = $(e.currentTarget).closest('.lightbox-content.page');
            if (validatePage($currentPage)){
                sendEmail(e.currentTarget);
            } else {
                showFormError();
            }
        };

        var resetForm = function(){
            $('body').removeClass('no-overflow');
            setTimeout(function(){
                $form.find('.page').attr('data-slide', 'hideRight');
                $form.find('.page1').removeAttr('data-slide');
            }, 300);
        };

        var preventBodyScroll = function(){
            $('body').addClass('no-overflow');
        };

        var bindEvents = function() {
            $(datajs('type', 'submit')).on('click', clickHandler);
            $form.find('button.nextPage').on('click', function(e) {
                navigateToNextPage(e.currentTarget);
            });
            $('#close-lightbox').on('click', resetForm);
            $('a[href$="#f"]').on('click', preventBodyScroll);
        };

        var init = function() {
            bindEvents();
        };

        return {
            init: init
        };

    })(jQuery);

    formCalltoAction.init();
    toggleMenu();

})(jQuery, emailjs, window, document);