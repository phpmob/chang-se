$(document).on('click', '[data-confirmation]', function (e) {
    e.preventDefault();

    var $el = $(this);

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

                    if ($el.is('a')) {
                        window.location.href = $el.attr('href');
                    } else {
                        $el.closest('form').submit();
                    }
                }
            },
            cancel: {
                keys: ['esc'],
                text: 'No'
            }
        }
    });
});
