import {useState, useEffect} from "react";
import {QuizPreviewBar} from "../QuizPreviewBar/QuizPreviewBar";
import {Link} from "react-router-dom";
import { QuizEntityResponse } from "../../../../quizzy-back/types/quiz/quiz-entity-response";
import {apiURL} from "../../config/api";

export const QuizList= () => {
    const [quizList, setQuizList] = useState([]);

    useEffect(() => {
        const fetchQuizList = async () => {
            const response = await fetch(`${apiURL}/quiz`);
            const listToSave = await response.json();
            setQuizList(listToSave)
        }
        fetchQuizList();
    }, [])

    const quizListElements = quizList.map((quiz:QuizEntityResponse) => <Link to={`/quiz/${quiz.id}` } key={quiz.id}><QuizPreviewBar quizData={quiz} /></Link>)

    return (
        <>
            <p>Below is a list of publicly available quizzes that we invite you to take. Some of the quizzes have a lock icon next to them - to access these quizzes, you will need to know the password provided by the creator of the quiz.</p>
            {quizListElements}
        </>
    )
}