import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import * as Redux from 'redux';

ReactDOM.hydrate(<App />, document.getElementById('root'));

const reducer = (state, action) => {
  console.log("reducer is called", state, action);
  // do not mutate state
  // state.test = state.test + 1
  // this will replace the entire state
  // redux will replace any other property that isnt test if not explicitly returned
  // return {
  //   ...state, // spread operator to keep all other stuff
  //   test: state.test + 1
  // };

  switch (action.type) {
    case 'incTest':
      return {
        ...state,
        test: state.test + 1
      };
    case 'decTest':
      return {
        ...state,
        test: state.test - 1
      }
    default:
      return state ;
  }

}

// // reducer 2
// const mainReducer
// combine reducer

const store = Redux.createStore(reducer, {greeting: 'Hello', test: 42});

// store.dispatch
// reducer is called everytime we dispatch
// whatever the reducer returns become the new state
store.dispatch({type: 'incTest'});
store.dispatch({type: 'incTest'});
store.dispatch({type: 'decTest'});
store.dispatch({type: 'decTest'});

// store.subscribe
const doThisPleaseStore = () => {
  console.log("Subscribe is called", store.getState());
}
store.subscribe(doThisPleaseStore);

store.dispatch({type: 'incTest'});
store.dispatch({type: 'incTest'});

console.log(store);

// store.getState
console.log(store.getState());
