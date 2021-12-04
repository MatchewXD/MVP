// This is the primary component of the react app Test/
import React from 'react';
import Create from './habitspage/Create.jsx';
import Tiles from './habitspage/Tiles.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      createValue: ''
    };

    // Bind
    this.changeInput = this.changeInput.bind(this);
    this.habitSubmit = this.habitSubmit.bind(this);
  }

  componentDidMount() {
    console.log('Component Mounted');
  }

  habitSubmit(event) {
    event.preventDefault();
    console.log('Create Habit was Clicked!');
  }

  changeInput(event) {
    this.setState({ createValue: event.target.value });
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

          {/* <div className="tileholder">
            <div className="tile">
              <h4>Working Out</h4>
              <button type="button">Did you perform this habit Today?</button>
              <p>Habit Score: 360</p>
              <p>Streak: 93</p>
              <button type="button">View Entries</button>
            </div>
            <div className="tile">
              <h4>Sleep</h4>
              <button type="button">Did you perform this habit Today?</button>
              <p>Habit Score: 609</p>
              <p>Streak: 63</p>
              <button type="button">View Entries</button>
            </div>
            <div className="tile">
              <h4>3 Meals</h4>
              <button type="button">Did you perform this habit Today?</button>
              <p>Habit Score: 963</p>
              <p>Streak: 390</p>
              <button type="button">View Entries</button>
            </div>
          </div> */}
          <Tiles />
        </div>


      </div>
    );
  }
}

export default App;