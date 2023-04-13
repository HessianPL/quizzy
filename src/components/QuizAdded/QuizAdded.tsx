import './QuizAdded.css'

interface Props {
    quizID: string | null;
}

export const QuizAdded = (props: Props) => {
    const quizURL: string =`/quiz/${props.quizID}`
    return (
        <div className='quizAddedInfo'>
            <h3>The quiz has been added!</h3>
            <p>You may find it with this link: <a href={quizURL}>{quizURL}</a></p>
            <p>Additionally, since you indicated that the quiz should be publicly visible, you will find it in the home tab, on the list of publicly visible quizzes.</p>
        </div>
    )
}