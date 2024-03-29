import {useEffect, useState} from "react";
import {Question} from "../Question/Question";
import {apiURL} from "../../config/api";
import './QuestionsLoader.css'

interface Props {
    quizID: string;
}

export const QuestionsLoader = (props: Props) => {
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        const fetchQuestions = async () => {
            const response = await fetch(`${apiURL}/question/${props.quizID}`);
            const data = await response.json();
            // console.log(data);
            setQuestions(data);
        }
        fetchQuestions();
    }, [])

    const questionsElement = questions.map((question, index) => <Question questionData={question} key={index} questionNo={(index + 1)}/>)

    return (
        <div className='allQuestionsContainer'>
            {questionsElement}
        </div>
    )
}