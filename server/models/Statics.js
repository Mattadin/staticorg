const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// Schema to create Statics model
const staticsSchema = new Schema(
  {
    staticName: {
      type: String,
      required: true,
    },
    staticUsers: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
    ]
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

// Initialize our Statics model
const Statics = model('Statics', staticsSchema);

module.exports = Statics;