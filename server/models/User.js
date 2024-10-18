var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcrypt');

let userSchema = Schema({
	username: {
		type: String, 
		required: true,
		unique: true,
		minlength: 3,
		maxlength: 50
	},
	password: {
		type: String,
		required: true
	},
	admin: {
		type: Boolean,
		default: false, 
	},

	events: [{type:Schema.Types.ObjectId, ref: 'Event'}],
});

// Pre-save middleware to hash the password before saving
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    try {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
      next();
    } catch (error) {
      next(error);
    }
  });
  
  // Method to compare entered password with hashed password
  userSchema.methods.comparePassword = function (password) {
    return bcrypt.compare(password, this.password);
  };
  

userSchema.pre('save', function (next) {
    this.events = [...new Set(this.events)]; // Ensure uniqueness before saving
    next();
  });
  
userSchema.query.byUsername = function(username){
    return this.where({username: new RegExp(username, 'i')});
}

module.exports = mongoose.model("User", userSchema);
