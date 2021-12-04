// This is the primary component of the react app Test/
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.binds go here
  }

  render() {
    return (
      <div>
        <h1 className="title">Hygieia</h1>
        <nav className="nav">Nav Bar</nav>
        <p>What habit are you working on?</p>
        <button type='submit'>Add Habit</button>
        <div>
          <h4>Working Out</h4>
          <button type="button">Did you perform this habit Today?</button>
          <p>Habit Score: 609</p>
          <p>Streak: 64</p>
          <button type="button">View Entries</button>
        </div>
      </div>
    );
  }
}

export default App;