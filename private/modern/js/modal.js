(function ($) {
    $(document).on('click', '.modal-close', function (e) {
        e.preventDefault();

        const $body = $('.modal-open');
        const $modal = $(this).closest('.modal');
        const $effect = $modal.find('.scaleInCircle');
        const $effect2 = $modal.find('.scaleIn');

        if ($effect.length) {
            $effect.removeClass('scaleInCircle');
        }

        if ($effect2.length) {
            $effect2.removeClass('scaleIn');
        }

        if ($effect.length || $effect2.length) {
            setTimeout(function () {
                $body.removeClass('modal-open');
                $modal.remove();
            }, 300);
        } else {
            $body.removeClass('modal-open');
            $modal.remove();
        }
    });
})(jQuery);
