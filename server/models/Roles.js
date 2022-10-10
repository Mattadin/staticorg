const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// Schema to create Roles model
const rolesSchema = new Schema(
  {
    role1: {
      type: String,
      required: true,
    },
    role2: {
      type: String,
      required: false,
    },
    role3: {
      type: String,
      required: false,
    },
    role4: {
      type: String,
      required: false,
    },
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

// Initialize our Roles model
const Roles = model('Roles', rolesSchema);

module.exports = Roles;