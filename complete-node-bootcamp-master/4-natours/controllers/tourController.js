/* eslint-disable prettier/prettier */
const Tour = require('../models/tourModel');
///////////////////////////////////////////////////////////
// TOUR ASSETS

///////////////////////////////////////////////////////////
// TOUR ROUTE HANDLERS
exports.aliasTopTours = async (req, res, next) => {
  try {
    req.query.limit = '5';
    req.query.sort = '-ratingsAverage,price';
    req.query.fields = 'name,price,ratingsAverage,summary,difficulty';
    next();
  } catch (err) {
    res.status(404).json({ status: 'failed', message: err.message });
  }
};

exports.getAllTours = async (req, res) => {
  try {
    console.log(req.query);
    // BUILD QUERY
    // 1A) Filtering
    const queryObj = { ...req.query };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach((el) => delete queryObj[el]);

    // 1B) Advanced filtering
    let queryStr = JSON.stringify(queryObj);

    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
    // {difficulty: "easy", duration: {$gte: 5}}
    // {difficulty: "easy", duration: {gte: '5'}}
    // Replace gte, gt, lte, lt

    console.log(JSON.parse(queryStr));

    let query = Tour.find(JSON.parse(queryStr));

    // 2) Sorting
    if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ');
      query = query.sort(sortBy);
      // sort('-price -ratingsAverage)
    } else {
      query = query.sort('-createdAt');
    }

    // 3) Field limiting
    if (req.query.fields) {
      const fields = req.query.fields.split(',').join(' ');
      query = query.select(fields);
    } else {
      query = query.select('-__v');
    }

    // 4) Pagination
    const page = +req.query.page || 1;
    const limit = +req.query.limit || 100;
    const skip = (page - 1) * limit;

    query = query.skip(skip).limit(limit);

    if (req.query.page) {
      const numTours = await Tour.countDocuments();
      if (skip >= numTours) throw new Error('This page does not exist!');
    }

    // EXECUTE QUERY
    const tours = await query;

    // const tours = await Tour.find().where('duration').equals(5).where('difficulty').equals('easy');

    res.status(200).json({
      status: 'success',
      results: tours.length,
      data: {
        tours,
      },
    });
  } catch (err) {
    res.status(404).json({ status: 'failed', message: err.message });
  }
};

exports.getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(404).json({ status: 'failed', message: err.message });
  }
};

exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour,
      },
    });
  } catch (err) {
    res.status(400).json({ status: 'failed', message: err.message });
  }
};

exports.updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(404).json({ status: 'failed', message: err.message });
  }
};

exports.deleteTour = async (req, res) => {
  try {
    await Tour.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({ status: 'failed', message: err.message });
  }
};

// const fs = require('fs');

// const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`));

// exports.checkID = (req, res, next, val) => {
//   console.log(`Tour id is: ${val}`);
//   if (+req.params.id > tours.length) {
//     return res.status(404).send({
//       status: 'fail',
//       message: 'Invalid ID',
//     });
//   }
//   next();
// };

// exports.checkBody = (req, res, next, val) => {
//   if (!req.body.name || !req.body.price) {
//     return res.status(400).json({
//       status: 'fail',
//       message: 'Missing name or price!',
//     });
//   }
//   next();
// };

// exports.getTour = (req, res) => {
// const tour = tours.find((el) => el.id === +req.params.id);
// res.status(200).json({
//   status: 'success',
//   data: {
//     // tour,
//   },
// });
// };

// exports.createTour = async (req, res) => {
//   try {
// const newTour = new Tour({});
// newTour.save();

// const newTour = await Tour.create(req.body);
// const newID = tours[tours.length - 1].id + 1;
// const newTour = Object.assign({ id: newID }, req.body);
// tours.push(newTour);
// fs.writeFileSync(`${__dirname}/../dev-data/data/tours-simple.json`, JSON.stringify(tours), (err) => {
//     res.status(201).json({
//       status: 'success',
//       data: {
//         tour: newTour,
//       },
//     });
//     // });
//   } catch (err) {
//     res.status(400).json({ status: 'failed', message: err.message });
//   }
// };
