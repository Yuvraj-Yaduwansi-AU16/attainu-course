const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/one2many', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
// Load models
const Customer = require('./models/Customer');
const Cars = require('./models/Cars');

const displayCustomer = async function () {
  const owner = await Customer.findById('5d7a514b5d2c12c7449be085').populate({
    path: 'cars',
    select: 'carModel price',
  });
  console.log(owner);
  process.exit();
};
const displayAllCustomer = async function () {
  const all = await Customer.find({}).populate({
    path: 'cars',
    select: 'carModel price',
  });

  console.log(all);
  process.exit();
};

// displayAllCustomer();
displayCustomer();
