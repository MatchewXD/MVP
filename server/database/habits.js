const mongoose = require('mongoose');
const db = require('./index.js');

const Habit = db.Habit;

// Use this to save new data points to the mongo database
let save = (data) => {
  var name = data.name;
  var score = data.score || 0;
  var streak = data.streak || 0;
  var hStreak = data.highestStreak || 0;
  var entries = data.entries || "";
  const habit = new Habit({ 'name': name, 'score': score, 'streak': streak, 'highestStreak': hStreak, 'entries': entries });
  habit.save();
}

// Use this when getting all info from the database
let get = (callback) => {
  const habit = Habit.find({}).exec((err, data) => {
    if (err) {
      console.log('ERROR: could not Get data from database');
    } else {
      callback(data);
    }
  });
}

let update = (data) => {
  Habit.findById(data._id, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      results.name = data.name ? data.name : results.name;
      results.score = data.score ? data.score : results.score;
      results.streak = data.streak ? data.streak : results.streak;
      results.highestStreak = data.highestStreak ? data.highestStreak : results.highestStreak;
      results.entries = data.entries ? data.entries : results.entries;
      results.save();
    }
  });
}

let updateHabit = (data) => {
  Habit.findById(data._id, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      results.score = data.score;
      results.streak += 1;
      if (results.highestStreak < results.streak) {
        results.highestStreak = results.streak;
      }
      results.save();
    }
  });
}

let remove = (id, req, res) => {
  console.log(id);
  Habit.deleteOne({ _id: id }, (err, _) => {
    if (err) {
      console.log(err);
    } else {
      console.log('The Habit has been deleted\n', _);
      res.send('The Habit has been deleted');
    }
  });
}

module.exports = {
  save: save,
  get: get,
  update: update,
  updateHabit: updateHabit,
  remove: remove
}