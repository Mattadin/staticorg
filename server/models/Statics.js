const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// Schema to create User model
const staticsSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    displayName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
    roles: {
      type: Schema.Types.ObjectId,
      ref: 'Roles',
      required: false,
    },
    statics: {
      type: Schema.Types.ObjectId,
      ref: 'Statics',
      required: false,
    },
    equipment: {
      type: Schema.Types.ObjectId,
      ref: 'Equipment',
      required: false,
    }
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  },
  {
    createdAt: {
      type: Date,
      default: Date.now,
    },
  }
);

staticsSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

staticsSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// Initialize our User model
const Statics = model('Static', staticsSchema);

module.exports = Statics;