import React from 'react';
import { Consumer } from './globalContext';

class Clock extends React.Component {
  render() {
    return (
        <Consumer>
          {(globals) => (
            <div>
              {globals.currentDate.toLocaleTimeString()}
            </div>
          )}
        </Consumer>
    )
  }
}

export default Clock;
