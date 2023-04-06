import React from 'react';
import './App.css';
import {QuizEntityResponse} from 'types'
import {Header} from "./components/Header";

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
      <Header />
    </div>
  );
}

export default App;
