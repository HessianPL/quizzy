import {useEffect, useState} from "react";
import { QuizEntity } from "../../../../quizzy-back/types/quiz/quiz-entity";
import './Quiz.css'
import {QuestionsLoader} from "../QuestionsLoader/QuestionsLoader";
import {apiURL} from "../../config/api";

interface Props {
    quizID?: string
}

export const Quiz = (props: Props) => {
    const [quizData, setQuizData] = useState<QuizEntity | null>(null);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        const fetchQuizData = async () => {
            const response = await fetch(`${apiURL}/quiz/${props.quizID}`);
            const dataToSave: QuizEntity = await response.json();
            setQuizData(dataToSave)
        }
        fetchQuizData();
    }, [])

    if (props.quizID === undefined) {
        return <h3>There is not such a quiz</h3>
    }
    if (props.quizID.length !== 36) {
        return <h3>There's something wrong with the quiz ID you have provided in an URL</h3>
    }

    if (!quizData) {
        return <h3>Loading data...</h3>
    }

    const handleClick = () => {
        setHasStarted(prevHasStarted =>!prevHasStarted);
    }

    return (
        <div className='quiz'>
            <h2>{quizData.title}</h2>
            <p>{quizData.description}</p>
            <p>Passing percentage is set to {quizData.passingPercentage}%</p>
            <p>{quizData.timerQuiz ? `You have ${quizData.timerQuiz} minutes to complete it.` : `You have unlimited time to complete it`}</p>
            {quizData.instantFeedback ? <p>Instant feedback is enabled in this quiz, meaning that after selecting each answer, you will receive information on whether the answer is correct or wrong.</p> : null}
            {quizData.endingFeedback ? <p>Ending feedback is enabled in this quiz, meaning that after completing the quiz, you will receive information on whether you have completed it successfully or not.</p> : null}
            {quizData.publicListing ? <p>This test is public, meaning it's visible by all site users and everyone can take it</p> : null}
            <p className='callToAction'>Press the start button below to begin the quiz</p>
            <p className='developer-note'><span>***Dev note: Full functionality will be released on April 14th, stay tuned***</span></p>
            <button type="button" disabled={hasStarted} onClick={handleClick} className='start-button'>START</button>
            {hasStarted && <QuestionsLoader quizID={quizData.id}/>}
        </div>
    )
}