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
            <p>Below is a list of publicly available quizzes that we invite you to take. Some of the quizzes have a lock icon next to them - to access these quizzes, you will need to know the password provided by the creator of the quiz.</p>
            {quizListElements}
        </>
    )
}