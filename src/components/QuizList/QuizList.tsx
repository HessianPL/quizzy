import {useState, useEffect} from "react";
import {QuizPreviewBar} from "../QuizPreviewBar/QuizPreviewBar";

export const QuizList= () => {
    const [quizList, setQuizList] = useState([]);

    useEffect(() => {
        console.log('Fetching API');
        const fetchQuizList = async () => {
            const response = await fetch(`http://127.0.0.1:${3001}/quiz`);
            const listToSave = await response.json();
            setQuizList(listToSave)
        }
        fetchQuizList();
    }, [])

    const quizListElements = quizList.map((quiz, index) => <QuizPreviewBar key={index} quizData={quiz} />)

    return (
        <>
            <p>This is a quiz list component</p>
            <p>We will see a list of public quizzes</p>
            {quizListElements}
        </>
    )
}