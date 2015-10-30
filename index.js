var ls = require('livescript');

module.exports = function (file, options, cb) {
  var source = file.buffer.toString();
  try { source = ls.compile(source, options); }
  catch (er) { return cb(er); }
  cb(null, {buffer: new Buffer(source)});
};
