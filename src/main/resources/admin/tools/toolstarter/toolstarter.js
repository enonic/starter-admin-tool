var portalLib = require('/lib/xp/portal');
var mustacheLib = require('/lib/mustache');
var adminLib = require('/lib/xp/admin');


var view = resolve('toolstarter.html');


exports.get = function (req) {

    var params = {
        adminUrl: adminLib.getBaseUri(),
        assetsUrl: portalLib.assetUrl({
            path: ''
        }),
        launcherPath: adminLib.getLauncherPath(),
        launcherUrl: adminLib.getLauncherUrl()
    };

    return {
        body: mustacheLib.render(view, params)
    };
};
