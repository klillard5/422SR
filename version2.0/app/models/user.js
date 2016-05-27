// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({

    local            : {
        name            : String,
        uoid            : String,
        phone           : Number,
        partySize       : Number,
        time            : String,
        currentLocation : String,
        dropLocation    : String,
        additionalInfo  : String,
        password        : String,
        dispatch        : Number,
        status          : String
    },
    facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    

});

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);