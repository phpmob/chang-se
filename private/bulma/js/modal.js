(function ($) {
    $(document).on('click', '.modal-close', function (e) {
        e.preventDefault();

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
                $modal.removeClass('is-active');
            }, 300);
        } else {
            $modal.removeClass('is-active');
        }
    });
})(jQuery);
