const Encore = require('@symfony/webpack-encore');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const Chang = {
    base: path.resolve(__dirname, 'vendor/phpmob/chang/src/Application/Resources/private'),
    messenger: path.resolve(__dirname, 'vendor/phpmob/chang/src/Messenger/Resources/private'),
};

Encore
    .addAliases({
        'chang': Chang.base,
    })
    // the project directory where compiled assets will be stored
    .setOutputPath('public/build/')
    // the public path used by the web server to access the previous directory
    .setPublicPath('/build')
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    // It will provide jquery for all .addEntry() that contains `$|jQuery`
    // but we need single jquery instance for all entries.
    // see note in app.js/msg.js for fixing.
    //.autoProvidejQuery()
    .enablePostCssLoader()
    .enableSassLoader(function (options) {
        options.importer = function (url, prev) {
            if (url.indexOf('@chang') === 0) {
                url = `${Chang.base}/${url}`.replace('@chang', '');
            } else if (url.indexOf('@') === 0) {
                const nodeModulePath = `./node_modules/${url}`;
                url = require('path').resolve(nodeModulePath)
            } else if (url.indexOf('~') === 0) {
                const filePath = url.split('~')[1];
                const nodeModulePath = `./node_modules/${filePath}`;
                url = require('path').resolve(nodeModulePath)
            }

            return {
                file: url
            };
        }
    })
    // https://github.com/HubSpot/pace/issues/328
    .addLoader(
        {
            test: require.resolve("pace-progress"),
            loader: "imports-loader?define=>false"
        }
    )

    .addEntry('pace', './private/pace.js')
    .addEntry('pws', './private/zxcvbn.js')
    .addEntry('ready', './private/ready.js')
    .addEntry('msg', `${Chang.messenger}/js/msg.js`)
    .addStyleEntry('flatpickr', './node_modules/flatpickr/dist/flatpickr.css')
    .addStyleEntry('jquery-confirm', './node_modules/jquery-confirm/css/jquery-confirm.css')

    // account
    .addEntry('account/app', './private/account/js/app.js')
    .addStyleEntry('account/style', './private/account/scss/app.scss')

    // bulma
    .addEntry('bulma/app', './private/bulma/app.js')
    .addStyleEntry('bulma/style', './private/bulma/app.scss')

    .addPlugin(new CopyWebpackPlugin([
        //{ from: `./private/img/**`, to: 'img', flatten: true },
        { from: `${Chang.base}/img/**`, to: 'img', flatten: true },
        { from: `${Chang.messenger}/web-push/**`, to: 'web-push', flatten: true },
        { from: `${Chang.messenger}/sounds/**`, to: 'sounds', flatten: true },
    ]))
;

module.exports = Encore.getWebpackConfig();
