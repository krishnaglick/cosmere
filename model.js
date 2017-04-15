
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const config = require('./config') || {};

const connectedMongoose = mongoose.connect(config.mongoUrl || 'mongodb://192.168.99.100/wob');

const schema = new connectedMongoose.Schema({
  date: String,
  tags: [ String ],
  conversation: [ String ],
  title: String,
  id: { type: String, index: true, unique: true }
});

const wob = connectedMongoose.model('wob', schema);

module.exports = { connectedMongoose, wob };