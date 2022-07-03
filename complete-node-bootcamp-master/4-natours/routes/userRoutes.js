/* eslint-disable prettier/prettier */
const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

///////////////////////////////////////////////////////////
// ROUTES

router.route('/').get(userController.getAllUsers).post(userController.createUser);

router.route('/:id').get(userController.getUser).patch(userController.updateUser).delete(userController.deleteUser);

module.exports = router;

// router.param('id', userController.checkID);
