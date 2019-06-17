(function ($, emailjs, window, document, undefined) {

    'use strict';

    // close menu on navigation click
    var toggleMenu = (function ($) {
        jQuery('.click-mobile').click(function () {
            jQuery('#js-closeMenu').click();
        });
    });

    function ShowLocalDate() {
        var dNow = new Date();
        var localdate = 'Today' + ' ' + dNow.getDate() + '/' + (dNow.getMonth() + 1) + '/' + dNow.getFullYear() + ' ' + dNow.getHours() + ':' + dNow.getMinutes();
        $('#currentDate').html(localdate)
    }

    ShowLocalDate();

    //********************************************************
    // ABSENCE FORM LIGHTBOX

    var formCalltoActionAbsence = (function ($) {

        var $form_absence = $('form.absence-form');

        // show form error message
        var showFormError = function () {
            $('form.absence-form .page .form-error')
                .html('Veuillez vérifier vos réponses, certains champs sont vides ou non valides').show();
        };

        // hide form error message
        var hideFormError = function () {
            $('form.absence-form .page .form-error').html('').hide();
        };

        // validate email field
        var isEmail = function (email) {
            var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return regex.test(email);
        };

        // validate one field given its value and data type [email or phone]
        var validateField = function (v, dt) {
            var r = {
                'value': true,
                'message': ''
            };
            if (v === '') {
                r.value = false;
            }
            if (dt === 'email' && !isEmail(v)) {
                r.value = false;
            }
            return r;
        };

        // validate form andd call validate field
        var validatePage = function ($page) {
            var $inputGroup = $page.find('.form-group');
            var valid = true;
            $inputGroup.each(function (i, e) {
                var $e = $(e);
                // Si checkbox ou radiobutton
                if ($e.hasClass('form-checkbox-list')) {
                    if ($e.find('input:radio:checked').length === 0) {
                        valid = false;
                    }
                } else {
                    $e.find('input, select').each(function (index, element) {
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

        // navigate to next page if form valid
        var navigateToNextPage = function (currentTarget) {
            var $currentPage = $(currentTarget).closest('.lightbox-content.page');

            // Validate current page avant
            if (validatePage($currentPage)) {
                hideFormError();
                var $nextPage = $currentPage.next('.lightbox-content.page');
                $currentPage.attr('data-slide', 'hideLeft');
                $nextPage.attr('data-slide', 'show');
            } else {
                showFormError();
            }

        };

        // Handle send email with emailJS
        var sendEmail = function (currentTarget) {
            navigateToNextPage(currentTarget);
            var service_id = "default_service";
            var template_id = "template_absence_form";
            var $pageConfirm = $('form.absence-form .page-confirm');

            emailjs.sendForm(service_id, template_id, '#ctaForm2')
                .then(function () {
                    $pageConfirm.find('.wait').hide(function () {
                        $pageConfirm.find('.message.success').show();
                    });
                }, function () {
                    $pageConfirm.find('.wait').hide(function () {
                        $pageConfirm.find('.message.error').show();
                    });
                });
        };

        // Validate form on submit
        var clickHandler = function (e) {
            e.preventDefault();
            var $currentPage = $(e.currentTarget).closest('.lightbox-content.page');
            if (validatePage($currentPage)) {
                // if form valid, send email
                sendEmail(e.currentTarget);
            } else {
                // show from error message
                showFormError();
            }
        };

        // Reset lightbox and form inputs and set slide position at 1
        var resetForm = function () {
            $('body').removeClass('no-overflow');
            setTimeout(function () {
                $form_absence.find('.page').attr('data-slide', 'hideRight');
                $form_absence.find('.page1').removeAttr('data-slide');
            }, 300);
        };

        var bindEvents = function () {
            // Submit form click handler
            $('button.submit-absence').on('click', clickHandler);
            // Form input OnChange event, remove error message
            $('form.absence-form .page .form-group input').on('change', hideFormError);
            // Close lightbox event
            $('#close-lightbox').on('click', resetForm);
            $('#closeDown').on('click', resetForm);
        };

        //Add active class on About menu
        $(function() {
            $('.subMenu a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
        });
        $(document).ready(function () {
            var subabout = $('.subMenu a');
            var activeabout = $('.menu a.onAbout');
            if (subabout.hasClass('active')) {
                activeabout.addClass('active');
            } else {
                activeabout.removeClass('active');
            }
        });

        var init = function () {
            bindEvents();
        };

        return {
            init: init
        };

    })(jQuery);

    //********************************************************
    // BULLYING FORM LIGHTBOX

    var formCalltoActionBullying = (function ($) {

        var $form_bully = $('form.report-bully');

        // show form error message
        var showFormError = function () {
            $('form.report-bully .page .form-error')
                .html('Veuillez vérifier vos réponses, certains champs sont vides ou non valides').show();
        };

        // hide form error message
        var hideFormError = function () {
            $('form.report-bully .page .form-error').html('').hide();
        };

        // validate email field
        var isEmail = function (email) {
            var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return regex.test(email);
        };

        // validate one field given its value and data type [email or phone]
        var validateField = function (v, dt) {
            var r = {
                'value': true,
                'message': ''
            };
            if (v === '') {
                r.value = false;
            }
            if (dt === 'email' && !isEmail(v)) {
                r.value = false;
            }
            return r;
        };

        // validate form andd call validate field
        var validatePage = function ($page) {
            var $inputGroup = $page.find('.form-group');
            var valid = true;
            $inputGroup.each(function (i, e) {
                var $e = $(e);
                // Si checkbox ou radiobutton
                if ($e.hasClass('form-checkbox-list')) {
                    if ($e.find('input:radio:checked').length === 0) {
                        valid = false;
                    }
                } else {
                    $e.find('input, select').each(function (index, element) {
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

        // navigate to next page if form valid
        var navigateToNextPage = function (currentTarget) {
            var $currentPage = $(currentTarget).closest('.lightbox-content.page');

            // Validate current page avant
            if (validatePage($currentPage)) {
                hideFormError();
                var $nextPage = $currentPage.next('.lightbox-content.page');
                $currentPage.attr('data-slide', 'hideLeft');
                $nextPage.attr('data-slide', 'show');
            } else {
                showFormError();
            }

        };

        // Handle send email with emailJS
        var sendEmail = function (currentTarget) {
            navigateToNextPage(currentTarget);
            var service_id = "default_service";
            var template_id = "template_report_bully_form";
            var $pageConfirm = $('form.report-bully .page-confirm');

            emailjs.sendForm(service_id, template_id, '#ctaForm4')
                .then(function () {
                    $pageConfirm.find('.wait').hide(function () {
                        $pageConfirm.find('.message.success').show();
                    });
                }, function () {
                    $pageConfirm.find('.wait').hide(function () {
                        $pageConfirm.find('.message.error').show();
                    });
                });
        };

        // Validate form on submit
        var clickHandler = function (e) {
            e.preventDefault();
            var $currentPage = $(e.currentTarget).closest('.lightbox-content.page');
            if (validatePage($currentPage)) {
                // if form valid, send email
                sendEmail(e.currentTarget);
            } else {
                // show from error message
                showFormError();
            }
        };

        // Reset lightbox and form inputs and set slide position at 1
        var resetForm = function () {
            $('body').removeClass('no-overflow');
            setTimeout(function () {
                $form_bully.find('.page').attr('data-slide', 'hideRight');
                $form_bully.find('.page1').removeAttr('data-slide');
            }, 300);
        };

        var bindEvents = function () {
            // Submit form click handler
            $('button.submit-bully-report').on('click', clickHandler);
            // Form input OnChange event, remove error message
            $('form.report-bully .page .form-group input').on('change', hideFormError);
            // Close lightbox event
            $('#close-lightbox').on('click', resetForm);
        };

        var init = function () {
            bindEvents();
        };

        return {
            init: init
        };

    })(jQuery);

    //********************************************************
    // REGISTER FORM LIGHTBOX

    var formCalltoActionRegister = (function ($) {

        var $form_register = $('form.register-form');

        // show form error message
        var showFormError = function () {
            $('form.register-form .page .form-error')
                .html('Veuillez vérifier vos réponses, certains champs sont vides ou non valides').show();
        };

        // hide form error message
        var hideFormError = function () {
            $('form.register-form .page .form-error').html('').hide();
        };

        // validate email field
        var isEmail = function (email) {
            var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return regex.test(email);
        };

        // validate one field given its value and data type [email or phone]
        var validateField = function (v, dt) {
            var r = {
                'value': true,
                'message': ''
            };
            if (v === '') {
                r.value = false;
            }
            if (dt === 'email' && !isEmail(v)) {
                r.value = false;
            }
            return r;
        };

        // validate form andd call validate field
        var validatePage = function ($page) {
            var $inputGroup = $page.find('.form-group');
            var valid = true;
            $inputGroup.each(function (i, e) {
                var $e = $(e);
                // Si checkbox ou radiobutton
                if ($e.hasClass('form-checkbox-list')) {
                    if ($e.find('input:radio:checked').length === 0) {
                        valid = false;
                    }
                } else {
                    $e.find('input, select').each(function (index, element) {
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

        // navigate to next page if form valid
        var navigateToNextPage = function (currentTarget) {
            var $currentPage = $(currentTarget).closest('.lightbox-content.page');

            // Validate current page avant
            if (validatePage($currentPage)) {
                hideFormError();
                var $nextPage = $currentPage.next('.lightbox-content.page');
                $currentPage.attr('data-slide', 'hideLeft');
                $nextPage.attr('data-slide', 'show');
            } else {
                showFormError();
            }

        };

        // Handle send email with emailJS
        var sendEmail = function (currentTarget) {
            navigateToNextPage(currentTarget);
            var service_id = "default_service";
            var template_id = "template_register_form";
            var $pageConfirm = $('form.register-form .page-confirm');

            emailjs.sendForm(service_id, template_id, '#ctaForm3')
                .then(function () {
                    $pageConfirm.find('.wait').hide(function () {
                        $pageConfirm.find('.message.success').show();
                    });
                }, function () {
                    $pageConfirm.find('.wait').hide(function () {
                        $pageConfirm.find('.message.error').show();
                    });
                });
        };

        // Validate form on submit
        var clickHandler = function (e) {
            e.preventDefault();
            var $currentPage = $(e.currentTarget).closest('.lightbox-content.page');
            if (validatePage($currentPage)) {
                // if form valid, send email
                sendEmail(e.currentTarget);
            } else {
                // show from error message
                showFormError();
            }
        };

        // Reset lightbox and form inputs and set slide position at 1
        var resetForm = function () {
            $('body').removeClass('no-overflow');
            setTimeout(function () {
                $form_register.find('.page').attr('data-slide', 'hideRight');
                $form_register.find('.page1').removeAttr('data-slide');
            }, 300);
        };

        var bindEvents = function () {
            // Submit form click handler
            $('button.submit-register').on('click', clickHandler);
            // Form input OnChange event, remove error message
            $('form.register-form .page .form-group input').on('change', hideFormError);
            // Close lightbox event
            $('#close-lightbox').on('click', resetForm);
        };

        var init = function () {
            bindEvents();
        };

        return {
            init: init
        };

    })(jQuery);

    //********************************************************
    // SURVEY LIGHTBOX

    var formCalltoActionSurvey = (function ($) {
        // Initialize our form variable
        var $survey_form = $('form.survey-form');

        // Navigate to next page
        // no validation needed since we don't have a form
        var navigateToNextPage = function (currentTarget) {
            var $currentPage = $(currentTarget).closest('.lightbox-content.page');
            var $nextPage = $currentPage.next('.lightbox-content.page');
            $currentPage.attr('data-slide', 'hideLeft');
            $nextPage.attr('data-slide', 'show');
        };

        // Reset lightbox and set slide position at 1
        var resetForm = function () {
            $('body').removeClass('no-overflow');
            setTimeout(function () {
                $survey_form.find('.page').attr('data-slide', 'hideRight');
                $survey_form.find('.page1').removeAttr('data-slide');
            }, 300);
        };

        // Manage form events
        var bindEvents = function () {
            // on link click go to Next Page
            $('form.survey-form a.nextPage').on('click', function (e) {
                navigateToNextPage(e.currentTarget);
            });
            // Close lightbox event
            $('#close-lightbox').on('click', resetForm);
        };

        // Init form and bind event listeners
        var init = function () {
            bindEvents();
        };

        return {
            init: init
        };
    })(jQuery);

    toggleMenu();

    jQuery(document).ready(function () {
        // body overflow fixed on modal
        $(".open-lightbox").on("click", function () {
            $("body,html").css('overflow', 'hidden');
        });

        // Close lightboxes and reinitialize body overflow to normal
        $("#close-lightbox").on("click", function () {
            $("body,html").css('overflow', 'initial');
        });

        // We need to call form.init on document ready
        // otherwise the html is not all loaded and as we try to attach
        // event listeners on element not yet ready or present
        // they would execute
        formCalltoActionSurvey.init();
        formCalltoActionAbsence.init();
        formCalltoActionBullying.init();
        formCalltoActionRegister.init();
    });

    jQuery(document).ready(function () {
        $(".yes").on("click", function () {
            var $currentPage = $(this).closest('.lightbox-content.page');
            var $nextPage = $currentPage.next('.lightbox-content.page');
            $currentPage.attr('data-slide', 'hideLeft');
            $nextPage.attr('data-slide', 'show');
        });
    });

    })(jQuery, emailjs, window, document);