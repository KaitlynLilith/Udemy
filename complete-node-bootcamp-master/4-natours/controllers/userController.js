/* eslint-disable prettier/prettier */
///////////////////////////////////////////////////////////
// USER ASSETS

///////////////////////////////////////////////////////////
// USER ROUTE HANDLERS
exports.getAllUsers = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!',
  });
};

exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!',
  });
};

exports.getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!',
  });
};

exports.updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!',
  });
};

exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!',
  });
};

// const fs = require('fs');

// const users = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/users.json`));

// exports.checkID = (req, res, next, val) => {
//   console.log(`User id is: ${val}`);
//   if (+req.params.id > users.length) {
//     return res.status(404).send({
//       status: 'fail',
//       message: 'Invalid ID',
//     });
//   }
//   next();
// };

// exports.checkBody = (req, res, next, val) => {
//   console.log('Checking body!');
//   if (!req.body.name) {
//     console.log('No name!');
//     return res.status(400).json({
//       status: 'fail',
//       message: 'Missing name!',
//     });
//   }
//   next();
// };
