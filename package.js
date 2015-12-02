Package.describe({
  name: "mys:rx-angular",
  summary: "Library for bridging between RxJS and AngularJS",
  version: "1.0.4",
  documentation: 'readme.md',
  git: 'https://github.com/kamilkisiela/meteor-rx-angular.git'
});

Package.onUse(function (api) {

  var packages = [
    'mys:rx@4.0.0'
  ];

  api.versionsFrom("METEOR@1.0");

  api.use(packages);
  api.imply(packages);

  api.addFiles([
    'dist/rx.angular.js'
  ], 'client');

});
