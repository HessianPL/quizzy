import './QuizPreviewBar.css'
import {QuizEntityResponse} from 'types'

interface Props {
    quizData: QuizEntityResponse
}

export const QuizPreviewBar = (props: Props) => {
    return (
        <div className='quizPreviewBar'>
            <p>{props.quizData.title}</p><p>{props.quizData.description}</p>
        </div>
    )
}