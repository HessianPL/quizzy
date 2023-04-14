import { QuestionResponseWithoutValidAnswers } from '../../../../quizzy-back/types/question/question-response'
import './Question.css'
import {MouseEvent, SyntheticEvent, useState} from "react";

interface Props {
    questionData: QuestionResponseWithoutValidAnswers,
    questionNo: number
}

export const Question = (props: Props) => {
    const [markedAnswers, setMarkedAnswers] = useState({
        answer1: false,
        answer2: false,
        answer3: false,
        answer4: false
    });

    type AnswerKey = 'answer1' | 'answer2' | 'answer3' | 'answer4';
    const markAnswer = (event: SyntheticEvent, keyValue: AnswerKey) => {
        event.currentTarget.classList.toggle('marked');
        setMarkedAnswers(prevMarkedAnswers => {
            const valueClicked = prevMarkedAnswers[keyValue];
            return {
                ...prevMarkedAnswers,
                [keyValue]: !valueClicked
            }
        })
    }

    // console.log(markedAnswers); //TODO: delete in production

    return (
        <div className='singleQuestionContainer'>
            <p className='singleQuestionTitle'><span>Question#{props.questionNo}:</span> {props.questionData.text}</p>
            <p className='answer' onClick={(event: MouseEvent) => markAnswer(event, 'answer1')}>{props.questionData.answer1}</p>
             <p className='answer' onClick={(event: MouseEvent) => markAnswer(event, 'answer2')}>{props.questionData.answer2}</p>
             <p className='answer' onClick={(event: MouseEvent) => markAnswer(event, 'answer3')}>{props.questionData.answer3}</p>
             <p className='answer' onClick={(event: MouseEvent) => markAnswer(event, 'answer4')}>{props.questionData.answer4}</p>
        </div>
    )
}