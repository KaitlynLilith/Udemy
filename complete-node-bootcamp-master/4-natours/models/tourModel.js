/* eslint-disable prettier/prettier */
const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name.'],
    unique: true,
    trim: true,
  },
  duration: {
    type: Number,
    required: [true, 'A tour must have a duration.'],
  },
  maxGroupSize: {
    type: Number,
    required: [true, 'A tour must have a group size.'],
  },
  difficulty: {
    type: String,
    required: [true, 'A tour must have a difficuty.'],
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  ratingsAverage: {
    type: Number,
    default: 4.5,
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price.'],
  },
  priceDiscount: Number,
  summary: {
    type: String,
    trim: true,
    required: [true, 'A tour must have a summary.'],
  },
  description: {
    type: String,
    trim: true,
  },
  imageCover: {
    type: String,
    trim: true,
    required: [true, 'A tour must have a cover image.'],
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
  startDates: [Date],
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;

// const testTour = new Tour({
//     name: 'The Park Camper',
//     // rating: 4.7,
//     price: 997,
//   });

//   testTour
//     .save()
//     .then((doc) => {
//       console.log(doc);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
