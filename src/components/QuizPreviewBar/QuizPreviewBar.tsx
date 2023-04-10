import './QuizPreviewBar.css'
import {QuizEntityResponse} from 'types'

interface Props {
    quizData: QuizEntityResponse
}

export const QuizPreviewBar = (props: Props) => {
    console.log(props.quizData)

    return (
        <div className='quizPreviewBar'>
            <div className='quizPreviewBar__mainInfo'>
                <p className='quizPreviewBar__title'>{props.quizData.title}</p>
                <p className='tooltip'>
                    [ ℹ ]<span className="tooltiptext tooltiptext--long">{props.quizData.description}</span>
                </p>
            </div>
            <div className='quizPreviewBar__additionalInfo'>
                {props.quizData.passwordProtected ?
                    <div className="tooltip">🔒
                        <span className="tooltiptext">This quiz is password-protected</span>
                    </div> :
                    null}

                {props.quizData.timerQuiz ?
                    <div className="tooltip">🕘
                        <span className="tooltiptext">This quiz is timed</span>
                    </div> : null}
            </div>
        </div>
    )
}