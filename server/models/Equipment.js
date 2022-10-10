const { Schema, model } = require('mongoose');

// Schema to create Equipment model
const equipmentSchema = new Schema(
  {
    weapon: {
      type: String,
      required: false,
    },
    head: {
      type: String,
      required: false,
    },
    body: {
      type: String,
      required: false,
    },
    hands: {
      type: String,
      required: false,
    },
    legs: {
      type: String,
      required: false,
    },
    feet: {
      type: String,
      required: false,
    },
    earrings: {
      type: String,
      required: false,
    },
    necklace: {
      type: String,
      required: false,
    },
    bracelet: {
      type: String,
      required: false,
    },
    leftRing: {
      type: String,
      required: false,
    },
    rightRing: {
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

// Initialize our Equipment model
const Equipment = model('Equipment', equipmentSchema);

module.exports = Equipment;