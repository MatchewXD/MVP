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

  habitSubmit(event) {
    event.preventDefault();
    var n = this.state.createValue;
    axios.post('http://localhost:3000/habits', { name: n })
      .then((res) => {
        console.log(res.data);
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
    var id = event.target.parentElement.id;
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

          <Tiles habits={this.state.habits} deleteHabit={this.deleteHabit} />

        </div>


      </div>
    );
  }
}

export default App;