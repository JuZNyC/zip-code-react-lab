import React, { Component } from 'react';
import './App.css';


function City(props) {
  return (<div>This is the City component</div>);
}

function ZipSearchField(props) {
  return (
      <div>
        Zip Code:
        <input type="text" onChange={props.changeHandler}/>
      </div>
  );
}


class App extends Component {

    state = {
        zipCode: ''
    }

    zipChanged = (event) => {
        console.log(event.target.value)
        this.setState({ zipCode: event.target.value })

        fetch(`http://ctp-zip-api.herokuapp.com/zip/${event.target.value}`)
            .then((res) => res.json())
            .then((data) => console.log(data))
    }

    render() {
        return (
          <div className="App">
            <div className="App-header">
              <h2>Zip Code Search</h2>
            </div>
            <ZipSearchField zipCode={this.state.zipCode} changeHandler={this.zipChanged} />
            <div>Current Zip is { this.state.zipCode }</div>
            <div>
              <City />
              <City />
            </div>
          </div>
        );
    }
}

export default App;
