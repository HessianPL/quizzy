import {ChangeEvent, SyntheticEvent, useState} from "react";
import { QuizEntityIncoming } from "../../../../quizzy-back/types/quiz/quiz-entity-incoming";
import './QuizMaker.css'

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

    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();
        const response = await fetch(`http://127.0.0.1:${3001}/quiz`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newQuizData)
        });
        const data = await response.json();
        console.log(data)
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

    return (
        <>
            <h2>Create your own quiz!</h2>
            <form onSubmit={handleSubmit} className='newQuizForm'>
                <label htmlFor='title'>Quiz title:</label>
                <input type="text" name="title" id='title' placeholder="Title of the quiz" value={newQuizData.title} onChange={handleChange}/>
                <label>Description: <textarea name="description" placeholder="Description" value={newQuizData.description} onChange={handleChange}/></label>
                <label>Passing percentage: <input type="number" name="passingPercentage" min={0} max={100} value={newQuizData.passingPercentage} onChange={handleChange} /></label>
                <label>Time to complete (max 120 minutes): <input type="number" name="timerQuiz" min={0} max={60*60*2} value={newQuizData.timerQuiz} onChange={handleChange} /></label>
                <label>Instant feedback: <input type="checkbox" name="instantFeedback" checked={newQuizData.instantFeedback} onChange={handleChange} /></label>
                <label>Ending feedback: <input type="checkbox" name="endingFeedback" checked={newQuizData.endingFeedback} onChange={handleChange} /></label>
                <label>Public listing: <input type="checkbox" name="publicListing" checked={newQuizData.publicListing} onChange={handleChange} /></label>

                <button>Save quiz!</button>
            </form>
        </>
    )
}

