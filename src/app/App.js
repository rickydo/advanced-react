import React, { Component } from 'react';
import Footer from './footer';
import { Provider } from './globalContext';

class App extends Component {
  // class field syntax ( from stage 3 )
  // same thing as setState in constructor
  state = {
    currentDate: new Date(),
  };

  // render-phase Life cycle method
  // this might be called multiple times in react 17
  // constructor(){
  //   super();
  // }

  // commit-phase life cycle method
  componentDidMount(){
    this.intervalId = setInterval(() => {
      this.setState({
        currentDate: new Date(),
      });
    }, 1000)
  }

  // need to clear from memory if component is unmounted
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <Provider value={{currentDate: this.state.currentDate}}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
