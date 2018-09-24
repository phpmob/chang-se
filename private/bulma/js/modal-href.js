(function ($) {
    $(document).on('click', '[data-modal-href],[data-modal-card]', function (e) {
        e.preventDefault();

        const $me = $(this);
        const href = $me.data('modal-href') || $me.data('modal-card');

        if (!href) {
            throw new Error('No `data-modal-href` was defined!');
        }

        const title = $me.data('modal-title') || null;
        let modalCss = $me.data('modal-css') || 'modal-sm modal-hero';

        const $modal = $(`
            <div class="modal is-active ${modalCss}">
                <button class="modal-close is-large" aria-label="close"></button>
                <div class="modal-background scaleInCircle"></div>
                <div class="modal-content scaleIn">
                    ${title ? '<h2 class="has-text-centered pb-20">' + title + '</h2>' : ''}
                    <div class="flex-card simple-shadow">
                        <div class="card-body">
                            <div class="content">
                                <div class="content-loading">
                                    <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
                                </div>
                            </div> 
                        </div> 
                    </div> 
                </div> 
            </div> 
        `).appendTo('body');

        const $content = $modal.find('.content');

        $.ajax({
            type: 'GET',
            url: href,
            success: function (res) {
                const $res = $($.parseHTML(res));

                $content.html($res);
                $(document).trigger('dom-node-inserted', [$res]);
            }
        });
    });
})(jQuery);
