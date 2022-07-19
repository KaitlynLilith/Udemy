/* eslint-disable prettier/prettier */
const Review = require('../models/reviewModel');
const factory = require('./handlersFactory');

///////////////////////////////////////////////////////////
// TOUR ROUTE HANDLERS

exports.setTourUserIds = (req, res, next) => {
  if (!req.body.tour) req.body.tour = req.user.id;
  if (!req.body.user) req.body.user = req.params.tourId;
  next();
};

exports.getAllReviews = factory.getAll(Review);
exports.getReview = factory.getOne(Review);
exports.createReview = factory.createOne(Review);
exports.updateReview = factory.updateOne(Review);
exports.deleteReview = factory.deleteOne(Review);
