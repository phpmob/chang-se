$(document).on('click', '[data-confirmation]', function (e) {
    e.preventDefault();

    const $el = $(this);

    let btnClass = 'btn-green';
    let icon = 'far fa-question-circle';

    switch ($el.data('confirmation-type')) {
        case 'danger':
            btnClass = 'btn-red';
            icon = 'fas fa-exclamation-triangle';
            break;
        case 'warning':
            btnClass = 'btn-orange';
            icon = 'fas fa-exclamation-triangle';
            break;
    }

    const isForm = $el.is('form');

    if (isForm) {
        $el.find('button,.btn')
            .addClass('disabled')
            .attr('disabled', true)
        ;
    }

    $.confirm({
        icon: $el.data('confirmation-icon') || icon,
        theme: $el.data('confirmation-theme') || 'modern',
        title: $el.data('confirmation-title') || 'Confirmation',
        content: $el.data('confirmation') || 'Do you want to continue?',
        buttons: {
            confirm: {
                text: 'Yes, I do!',
                btnClass: btnClass + ' focus',
                keys: ['enter'],
                action: function (e) {
                    $el.addClass('disabled');

                    if (isForm) {
                        const ajaxForm = require('chang/js/ajax-form');
                        ajaxForm.submit($el.get(0), e);

                        return;
                    }

                    if ($el.is('a')) {
                        window.location.href = $el.attr('href');
                    } else {
                        $el.closest('form').submit();
                    }
                }
            },
            cancel: {
                keys: ['esc'],
                text: 'No',
                action: function () {
                    if (isForm) {
                        $el.find('button,.btn')
                            .removeClass('disabled')
                            .attr('disabled', false)
                        ;
                    }
                }
            }
        }
    });
});
