Package.describe({
  summary: "Simple cookies for browser.",
  version: "1.1.0",
  name: "wekan-chuangbo-cookie",
  git: "https://github.com/chuangbo/meteor-cookie.git"
});

Package.onUse(function (api) {
  api.versionsFrom("METEOR@0.9.0");
  api.export('Cookie', 'client');
  api.addFiles('cookie.js', 'client');
});

Package.onTest(function (api) {
  api.use(['tinytest', 'wekan-chuangbo-cookie'], 'client');
  api.addFiles('cookie_tests.js', 'client');
});
