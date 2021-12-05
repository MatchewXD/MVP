// This is the primary component of the react app Test/
import React from 'react';
import axios from 'axios';
import Create from './habitspage/Create.jsx';
import Tiles from './habitspage/Tiles.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      createValue: '',
      habits: [],
    };

    // Bind
    this.changeInput = this.changeInput.bind(this);
    this.habitSubmit = this.habitSubmit.bind(this);
    this.deleteHabit = this.deleteHabit.bind(this);
    this.addScore = this.addScore.bind(this);
  }

  componentDidMount() {
    console.log('Component Mounted');
    this.getHabits();
  }

  getHabits() {
    axios.get('http://localhost:3000/habits')
      .then((res) => {
        this.setState({ habits: res.data })
      })
      .catch((err) => {
        console.log('There was an error', err);
      });
  }

  addScore(event) {
    var id = event.target.parentElement.parentElement.id;
    var score = Number(event.target.parentElement.parentElement.attributes.score.value);
    var streak = Number(event.target.parentElement.parentElement.attributes.streak.value);
    // console.log(`The score is: ${score}\nThe id is: ${id}\nThe streak is: ${streak}`);
    // console.log(typeof (score), typeof (streak));
    if (streak < 3) {
      // console.log('Adding 1');
      score += 1;
    } else if (streak < 5) {
      // console.log('Adding 2');
      score += 2
    } else if (streak < 7) {
      // console.log('Adding 3');
      score += 3
    } else if (streak < 9) {
      // console.log('Adding 5');
      score += 5
    } else if (streak < 11) {
      // console.log('Adding 8');
      score += 8
    } else if (streak < 13) {
      // console.log('Adding 13');
      score += 13
    } else if (streak < 15) {
      // console.log('Adding 21');
      score += 21
    } else if (streak < 17) {
      // console.log('Adding 34');
      score += 34
    } else if (streak < 19) {
      // console.log('Adding 55');
      score += 55
    } else if (streak < 21) {
      // console.log('Adding 89');
      score += 89
    } else if (streak >= 21) {
      // console.log('Adding 144');
      score += 144
    }
    // console.log('This is the new score: ', score);
    axios.put('http://localhost:3000/habits/add', { "_id": id, "score": score })
      .then((res) => {
        console.log(res.data);
        this.getHabits();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  habitSubmit(event) {
    event.preventDefault();
    var n = this.state.createValue;
    axios.post('http://localhost:3000/habits', { name: n })
      .then((res) => {
        console.log(res.data);
        this.getHabits();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  changeInput(event) {
    this.setState({ createValue: event.target.value });
  }

  deleteHabit(event) {
    console.log('Delete was clicked');
    // console.log(event.target.parentElement.id);
    var id = event.target.parentElement.parentElement.id;
    console.log(id);
    axios.delete('http://localhost:3000/habits', { data: { "_id": id } })
      .then((res) => {
        console.log(res.data);
        this.getHabits();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="habitpage">
        <div className="leftbox">
          <h1 className="title">Hygieia</h1>
          <nav className="nav">Nav Bar</nav>
        </div>

        <div className="rightbox">
          <Create createValue={this.state.createValue} changeInput={this.changeInput} habitSubmit={this.habitSubmit} />

          <Tiles habits={this.state.habits} deleteHabit={this.deleteHabit} addScore={this.addScore} />

        </div>


      </div>
    );
  }
}

export default App;