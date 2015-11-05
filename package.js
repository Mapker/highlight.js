Package.describe({
  name: 'mapker:highlight.js',
  version: '8.9.1',
  summary: 'Highlight.js integration for Meteor',
  git: 'https://github.com/Mapker/highlight.js',
  documentation: 'README.md'
});

Package.onUse(function(api) {

  api.versionsFrom('1.2.1');

  var packages = [
    'deps',
    'underscore',
    'fortawesome:fontawesome@4.4.0'  // https://atmospherejs.com/fortawesome/fontawesome
  ];

  api.use(packages, 'client');

  api.addFiles('highlight.js', 'client');

  api.export('hljs', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('mapker:highlight.js');
  api.addFiles('highlight.js-tests.js');
});
