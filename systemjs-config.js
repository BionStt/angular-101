(function(global) {
    var paths = {
        // paths serve as alias
        "npm:": "node_modules/"
    };

    // Where to look for packages
    var map = {
        "app": "src",
        "@angular": "npm:@angular",
        "@angular/router/upgrade": "npm:@angular/router/bundles/router-upgrade.umd.js",
        "@angular/common/http": "npm:@angular/common/bundles/common-http.umd.js",
        "@angular/common/http/testing": "npm:@angular/common/bundles/common-http-testing.umd.js",
        "tslib": "npm:tslib/tslib.js",
        "@angular/upgrade/static": "npm:@angular/forms/bundles/upgrade-static.umd.js",
        "rxjs": "npm:rxjs",
        "i18n-iso-countries": "npm:i18n-iso-countries",
        "json": "npm:systemjs-plugin-json",
        "pad": "npm:pad/lib",
        "d3": "npm:d3",
        "d3-array": "npm:d3-array/build",
        "d3-geo": "npm:d3-geo/dist/d3-geo.js",
        "topojson": "npm:topojson/dist/topojson.js",
        "moment": "npm:moment/moment.js",
        "ngx-bootstrap": "npm:ngx-bootstrap/bundles/ngx-bootstrap.umd.js"
    };

    // What to do when no filename and/or no extension exists
    var packages = {
        "app": { main: "app/main.js", defaultExtension: "js" },
        "rxjs": { main: "Rx.js", defaultExtension: "js" },
        "i18n-iso-countries": { main: "index.js" },
        "json": { main: "json.js", defaultExtension: "js" },
        "pad": { main: "index.js", defaultExtension: "js" },
        "d3": { main: "d3.js", defaultExtension: "js" },
        "d3-array": { main: "d3-array.js", defaultExtension: "js" }
    };

    // Angular2 package names, as they are in node_modules/@angular/ directory
    var ngPackageNames = [
        "common",
        "compiler",
        "core",
        "platform-browser",
        "platform-browser-dynamic",
        "router",
        "forms",
        "http",
        "upgrade"
    ];

    // Mapping angular2 packages
    function packageUmd(packageName) {
        packages["@angular/" + packageName] = { main: "bundles/" + packageName + ".umd.js", defaultExtension: "js" };
    };

    // Set UMD packages (for this sample project, in order to be safe with other environments like Karma, we should use the index as well)
    ngPackageNames.forEach(packageUmd);
    var config = {
        paths: paths,
        map: map,
        packages: packages,
        meta: {
            "*.json": { "loader": "json" }
        }
    };

    System.config(config);
})(this);