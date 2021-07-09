Package.describe({
  summary: "A utils to unblock subscriptions, a this.unblock inside for Meteor Publications",
  version: "1.0.0",
  git: "https://github.com/lamhieu-vk/unblock.git",
  name: "wekan-lamhieu-unblock",
});

Package.onUse(function(api, where) {
  configurePackages(api);
});

Package.onTest(function(api) {
  configurePackages(api);
  api.use(["ecmascript", "ddp", "tinytest", "random"]);
  api.addFiles("test/unblock.js", "server");
});

function configurePackages(api) {
  api.versionsFrom("METEOR@1.0");
  api.use("wekan-montiapm-meteorx@2.1.1");
  api.addFiles("src/unblock.js", "server");
}
