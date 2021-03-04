const mongoose = require('mongoose')

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost/CYPRIANODB', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise

module.exports = mongoose