const mongoose = require('mongoose');

// Connect to the database
mongoose.connect('mongodb://127.0.0.1:27017/mvp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Database Connected!');
}
).catch((err) => { console.log(err); });

// Create a Schema to store information
const accountSchema = new mongoose.Schema({
  userName: String,
  password: String,
  email: String,
  displayName: String
});

// Compile the schema into a model
const Account = mongoose.model('Account', accountSchema);

// Use this to save new data points to the mongo database
let save = (data) => {
  var user = data.userName;
  var pass = data.password;
  var email = data.email;
  var display = data.displayName;
  const account = new Account({ userName: user, password: pass, email: email, displayName: display });
  account.save();
}

// Use this when getting all info from the database
let get = (callback) => {
  const account = Account.find({}).exec((err, data) => {
    if (err) {
      console.log('ERROR: could not Get data from database');
    } else {
      callback(data);
    }
  });
}

let update = (data) => {
  Account.findById(data._id, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      results.userName = data.userName ? data.userName : results.userName;
      results.password = data.password ? data.password : results.password;
      results.email = data.email ? data.email : results.email;
      results.displayName = data.displayName ? data.displayName : results.displayName;
      results.save((err, updatedRecord) => {
        if (err) {
          console.log(err);
        } else {
          // console.log("This is the new updated Record", updatedRecord);
          console.log("Record Updated");
        }
      });
    }
  });
}

let remove = (id) => {
  Account.deleteOne({ _id: id }, (err, _) => {
    if (err) {
      console.log(err);
    } else {
      console.log('The account has been deleted');
    }
  });
}

module.exports.save = save;
module.exports.get = get;
module.exports.update = update;
module.exports.remove = remove;