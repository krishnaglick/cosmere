
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const connectedMongoose = mongoose.connect('mongodb://192.168.99.100/wob');

const schema = new connectedMongoose.Schema({
  date: String,
  tags: [ String ],
  conversation: [ String ],
  id: { type: String, index: true, unique: true }
});

const wob = connectedMongoose.model('wob', schema);

module.exports = { connectedMongoose, wob };