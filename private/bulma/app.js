// to share jquery for all `webpack.config.addEntry(...)`
window.$ = window.jQuery = require('jquery');

require('jquery-confirm');

require('./js/jconfirm');
require('./js/menu/stack');
require('./js/dismiss');
require('./js/tabs');
require('./js/toggle');
require('./js/tooltip');
