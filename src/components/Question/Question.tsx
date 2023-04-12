import { QuestionResponseWithoutValidAnswers } from '../../../../quizzy-back/types/question/question-response'
import './Question.css'

interface Props {
    questionData: QuestionResponseWithoutValidAnswers,
    questionNo: number
}

export const Question = (props: Props) => {
    return (
        <div className='singleQuestionContainer'>
            <p className='singleQuestionTitle'><span>Question#{props.questionNo}:</span> {props.questionData.text}</p>
            <p className='answer'>{props.questionData.answer1}</p>
            <p className='answer'>{props.questionData.answer2}</p>
            <p className='answer'>{props.questionData.answer3}</p>
            <p className='answer'>{props.questionData.answer4}</p>
        </div>
    )
}