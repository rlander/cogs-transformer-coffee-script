var helper = require('cogs-test-helper');

helper.run({
  'test/config.json': {
    'test/input.coffee': {
      path: 'test/input.coffee',
      buffer: helper.getFileBuffer('test/output.js'),
      hash: helper.getFileHash('test/output.js'),
      requires: [{
        path: 'test/input.coffee',
        hash: helper.getFileHash('test/input.coffee')
      }],
      links: [],
      globs: []
    },
    'test/error.coffee': Error
  }
});
