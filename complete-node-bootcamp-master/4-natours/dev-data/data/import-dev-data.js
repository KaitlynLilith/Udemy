/* eslint-disable prettier/prettier */
const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tour = require('../../models/tourModel');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose
  .connect(DB, {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: true,
  })
  .then(() => {
    console.log('DB connection established!');
  });

const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf8'));

async function importData() {
  try {
    await Tour.create(tours);
    console.log('Data successfully imported!');
    process.exit();
  } catch (err) {
    console.log(err);
  }
}

async function deleteData() {
  try {
    await Tour.deleteMany();
    console.log('Data successfully deleted!');
    process.exit();
  } catch (err) {
    console.log(err);
  }
}

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}

console.log(process.argv);

// Put in Command Line
// node .\dev-data\data\import-dev-data.js --delete
// node .\dev-data\data\import-dev-data.js --import
