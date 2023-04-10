import React from 'react';
import './App.css';
import {Header} from "./components/common/Header/Header";
import {Route, Routes} from "react-router-dom";
import {AboutView} from "./views/AboutView";
import {HomeView} from "./views/HomeView";
import {NotFoundView} from "./views/NotFoundView";
import {QuizMakerView} from "./views/QuizMakerView";

function App() {
    console.log('Testing App')

  return (
    <div className="App">
      <Header />
        <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/makequiz" element={<QuizMakerView />} />
            <Route path="/about" element={<AboutView />} />
            <Route path="/*" element={<NotFoundView />} />
        </Routes>
    </div>
  );
}

export default App;
