import React from 'react';
import './App.css';
import {Header} from "./components/common/Header/Header";
import {Route, Routes} from "react-router-dom";
import {AboutView} from "./views/AboutView";
import {HomeView} from "./views/HomeView";
import {NotFoundView} from "./views/NotFoundView";
import {QuizMakerView} from "./views/QuizMakerView";
import {SingleQuizView} from "./views/SingleQuizView";
import {Footer} from "./components/common/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="mainContentContainer">
                <Routes>
                    <Route path="/" element={<HomeView/>}/>
                    <Route path="/makequiz" element={<QuizMakerView/>}/>
                    <Route path="/about" element={<AboutView/>}/>
                    <Route path="/quiz/:id" element={<SingleQuizView/>}/>
                    <Route path="/*" element={<NotFoundView/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
