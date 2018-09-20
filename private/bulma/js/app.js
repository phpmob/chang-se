// to share jquery for all `webpack.config.addEntry(...)`
window.$ = window.jQuery = require('jquery');
require('jquery-confirm');

require('./menu/stack');
