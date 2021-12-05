import React from 'react';

const Tiles = ({ habits, deleteHabit, addScore }) => {
  // console.log(habits);
  const test = (event) => {
    console.log('Habit was clicked');
  }
  var list = habits.map((habit, index) => {
    return (
      <div className="tile" id={habit._id} key={habit._id} score={habit.score} streak={habit.streak} >
        <h4>{habit.name}</h4>

        <div className="buttonstreak">
          <span onClick={addScore} >Did you perform this habit today?</span>
          <p>Streak: {habit.streak} </p>
        </div>

        <div className="habitscore">
          <p>Habit Score: {habit.score}</p>
          <p>Highest Streak: {habit.highestStreak} </p>
        </div>

        <div className="tilebuttons">
          <span onClick={test} >View Entries </span>
          <span onClick={test} >Update </span>
          <span onClick={deleteHabit} >Delete </span>
        </div>
      </div>
    );
  });

  return (
    <div className="tileholder">{list}</div>
  );
}

export default Tiles;
