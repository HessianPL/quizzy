import {ChangeEvent, SyntheticEvent, useState} from "react";
import { QuizEntityIncoming } from "../../../../quizzy-back/types/quiz/quiz-entity-incoming";
import './QuizMaker.css'
import {NewQuestion, questionData} from "../NewQuestion/NewQuestion";
import { QuizAdded } from "../QuizAdded/QuizAdded";
import {apiURL} from "../../config/api";

export const QuizMaker = () => {
    const [newQuizData, setNewQuizData] = useState<QuizEntityIncoming>({
            title: '',
            description: '',
            passingPercentage: 100,
            timerQuiz: 0,
            instantFeedback: false,
            endingFeedback: false,
            publicListing: true,
            passwordProtected: false,
        }
    )

    const [questions, setQuestions] = useState<questionData[]>([]);
    const [questionsNumber, setQuestionsNumber] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [quizID, setQuizID] = useState<string | null>(null)

    const incQuestionsNo = (event: SyntheticEvent) => {
        event.preventDefault();
        setQuestionsNumber(prevQuestionsNumber => prevQuestionsNumber + 1)
    }

    const addQuestion = (obj: questionData) => {
        const questionToAdd: questionData = {
            quizID: "",
            text: obj.text,
            answer1: obj.answer1,
            answer2: obj.answer2,
            answer3: obj.answer3,
            answer4: obj.answer4,
            answer1isValid: obj.answer1isValid,
            answer2isValid: obj.answer2isValid,
            answer3isValid: obj.answer3isValid,
            answer4isValid: obj.answer4isValid

        }
        setQuestions(prevQuestions => {
            return [
                ...prevQuestions,
                questionToAdd
            ]
        })

    }

    const emptyQuestionsElement = [];
    for (let i = 0; i < questionsNumber; i++) {
        emptyQuestionsElement.push(<NewQuestion key={i+1} addQuestion={addQuestion}/>)
    }

    const saveQuizIntoDB = async() => {
        const response = await fetch(`${apiURL}/quiz`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newQuizData)
        });
        const newIdForQuiz = await response.json();
        return newIdForQuiz || null;
    }

    const saveQuestionIntoDB = async(questionToSave: questionData) => {
        await fetch(`${apiURL}/question`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(questionToSave)
        });
    }

    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();
        const quizID = await saveQuizIntoDB();
        const questionsToSave = questions.map(question =>{
            return  {...question, quizID: quizID}
        });
        questionsToSave.forEach(question => saveQuestionIntoDB(question));
        setIsSubmitted(true);
        await setQuizID(quizID);
    }

    type InputValue = string | boolean;
    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const target = event.target;
        const inputValue: InputValue =
            target instanceof HTMLInputElement && target.type === 'checkbox'
                ? target.checked
                : target.value;

        setNewQuizData(prevNewQuizData => {
            return {
                ...prevNewQuizData,
                [target.name]: inputValue
            }
        })
    }

    if (isSubmitted) {
        return <QuizAdded quizID = {quizID}/>
    }

    return (
        <>
            <h2>Create your own quiz!</h2>
            <form onSubmit={handleSubmit} className='newQuizForm'>
                <label className='quizInfoLabel'><span className='label'>Quiz title: </span><span className='input'><input required={true} type="text" name="title" id='title' placeholder="Title of the quiz" value={newQuizData.title} onChange={handleChange}/>
                </span></label>
                <label className='quizInfoLabel'><span className='label'>Description: </span><span className='input'><textarea name="description" placeholder="Description" value={newQuizData.description} onChange={handleChange}/></span></label>
                <label className='quizInfoLabel'><span className='label'>Passing percentage: </span><span className='input'><input type="number" name="passingPercentage" min={0} max={100} value={newQuizData.passingPercentage} onChange={handleChange} /></span></label>
                <label className='quizInfoLabel'><span className='label'>Time to complete (max 120 minutes): </span><span className='input'><input type="number" name="timerQuiz" min={0} max={60*60*2} value={newQuizData.timerQuiz} onChange={handleChange} /></span></label>
                <label className='quizInfoLabel'><span className='label'>Instant feedback: </span><span className='input'><input type="checkbox" name="instantFeedback" checked={newQuizData.instantFeedback} onChange={handleChange} /></span></label>
                <label className='quizInfoLabel'><span className='label'>Ending feedback: </span><span className='input'><input type="checkbox" name="endingFeedback" checked={newQuizData.endingFeedback} onChange={handleChange} /></span></label>
                <label className='quizInfoLabel'><span className='label'>Public listing: </span><span className='input'><input type="checkbox" name="publicListing" checked={newQuizData.publicListing} onChange={handleChange} /></span></label>

                {emptyQuestionsElement}

                <button className='addQuestion-button' onClick={incQuestionsNo}>+ Add new question +</button>
                <button className='create-button'>Save this quiz</button>
            </form>
        </>
    )
}