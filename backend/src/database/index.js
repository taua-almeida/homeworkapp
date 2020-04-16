const mongoose = require('mongoose');
const globalConfig = require('../../config');

mongoose.set('useCreateIndex', true)
mongoose.connect(globalConfig.development.url, { 
  useUnifiedTopology: true,
  useNewUrlParser: true, 
  })
  .then(() => console.log('DB Connected!'))
  .catch(err => {
  console.log(Error, err.message);
  });

module.exports = mongoose;
