// to share jquery for all `webpack.config.addEntry(...)`
window.$ = window.jQuery = require('jquery');
require('particles.js');
require('popper.js');
require('bootstrap');
require('jquery-confirm');

require('chang/js/data-href');
require('chang/js/data-ajax-href');
require('chang/js/data-select-href');
require('chang/js/data-form-filter');
require('chang/js/data-toggle-display');
require('chang/js/data-confirmation');
require('chang/js/data-confirmation-form');
require('chang/js/data-humanize-time');
require('chang/js/form-collection');
require('chang/js/form-validator-html5');
require('chang/js/flatpickr');
require('chang/js/quick-search');
require('chang/js/looper').init();
