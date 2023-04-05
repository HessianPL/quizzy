import React from 'react';
import './App.css';
import {TestInterface} from 'types'

function App() {
    console.log('Testing App')

    let testObj: TestInterface = {
        dupa: 1337
    }

  return (
    <div className="App">
      <h1>Quizzy App</h1>
      <h3>Make a quiz, send to friends or maybe take one or two?</h3>
    </div>
  );
}

export default App;
