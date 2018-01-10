var express = require('express');
var router = express.Router();
var fs = require('fs');
var sanitize = require('sanitize-filename');
var mime = require('mime');
var formidable = require('formidable');
var util = require('util');
var path = require('path');

/* POST users listing. */
router.post('/upload-video', function(req, res, next) {
  var form = new formidable.IncomingForm();
  var dir = '/uploads/';
  form.uploadDir = path.join(__dirname, '..', dir);
  form.keepExtensions = true;
  form.maxFieldsSize = 10 * 1024 * 1024;
  form.maxFields = 1000;
  form.multiples = false;

  // parsing the formData to store the file
  form.parse(req, function(err, fields, files) {
    var file = util.inspect(files);
    var fileName = file.split('path:')[1].split('\',')[0].split(dir)[1].toString().replace(/\\/g, '').replace(/\//g, '');
    var topic = fields.topic
    if (!topic) {
      console.error('topic was not specified')
      res.status(400)
      res.send()
    }

    // make a dir for the topic if there is no folders with the name
    topic = sanitize(topic).replace(/\ /g, '_')
    var dirPath = './uploads/' + topic
    if (!fs.existsSync(dirPath)) {
      console.log('creating dir')
      fs.mkdirSync(dirPath)
    }

    // rename the file
    var currentFilePath = './uploads/' + fileName
    var newFilePath = './uploads/' + topic + '/' + fileName
    if (fs.existsSync(currentFilePath)) {
      fs.renameSync(currentFilePath, newFilePath)
    } else {
      console.error('uploaded file cannot be found')
    }

    // return response to client
    var fileURL = 'http://' + req.headers.host + '/uploads/' + topic + '/' + fileName;
    console.log('fileURL: ', fileURL);
    res.json({fileURL: fileURL})
  });
});

router.get('/download-videos', function(req, res, next) {
  console.log('query: ', req.query.id)
  res.send('respond with a resource');
});

module.exports = router;
