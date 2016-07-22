var mongodb = require('./db');

function User(user) {
  this.name = user.name;
  this.password = user.password;
  this.email = user.email;
};

module.exports = User;

// store user info
User.prototype.save = function(callback) {
  // user file to be stored in database
  var user = {
      name: this.name,
      password: this.password,
      email: this.email
  };
  // open database
  mongodb.open(function (err, db) {
    if (err) {
      return callback(err);
    }
    db.collection('users', function (err, collection) {
      if (err) {
        mongodb.close();
        return callback(err);
      }
      collection.insert(user, {
        safe: true
      }, function (err, user) {
        mongodb.close();
        if (err) {
          return callback(err);
        }
        // sucess, return stored user info
        callback(null, user[0]);
      });
    });
  });
};

// get user info
User.get = function(name, callback) {
  // open database
  mongodb.open(function (err, db) {
    if (err) {
      return callback(err);
    }
    db.collection('users', function (err, collection) {
      if (err) {
        mongodb.close();
        return callback(err);
      }
      // query
      collection.findOne({
        name: name
      }, function (err, user) {
        mongodb.close();
        if (err) {
          return callback(err);
        }
        // sucess, return user info
        callback(null, user);
      });
    });
  });
};
