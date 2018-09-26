// to share jquery for all `webpack.config.addEntry(...)`
window.$ = window.jQuery = require('jquery');

require('jquery-confirm');
require('bootstrap');

require('chang/js/data-ajax-form');

require('./js/confirm');
require('./js/menu/stack');
require('./js/modal');
require('./js/modal-href');
require('./js/dismiss');
require('./js/tabs');
require('./js/toggle');
require('./js/tooltip');
require('./js/ripple');
