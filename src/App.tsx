import React from 'react';
import './App.css';
import {QuizEntityResponse} from 'types'

function App() {
    console.log('Testing App')

    let testObj: QuizEntityResponse = {
        id: '',
        passwordProtected: false,
        publicListing: false,
        instantFeedback: false,
        endingFeedback: false,
        passingPercentage: 0,
        title: '',
        description: ''
    }

  return (
    <div className="App">
      <h1>Quizzy App</h1>
      <h3>Make a quiz, send to friends or maybe take one or two?</h3>
    </div>
  );
}

export default App;
