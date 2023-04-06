import React from 'react';
import './App.css';
import {QuizEntityResponse} from 'types'
import {Header} from "./components/common/Header/Header";
import {Route, Routes} from "react-router-dom";
import {AboutView} from "./views/AboutView";
import {HomeView} from "./views/HomeView";
import {QuizMaker} from "./components/QuizMaker/QuizMaker";
import {NotFoundView} from "./views/NotFoundView";

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
        <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/makequiz" element={<QuizMaker />} />
            <Route path="/about" element={<AboutView />} />
            <Route path="/*" element={<NotFoundView />} />
        </Routes>
    </div>
  );
}

export default App;
