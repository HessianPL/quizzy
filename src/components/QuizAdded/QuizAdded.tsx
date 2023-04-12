import './QuizAdded.css'

interface Props {
    quizID: string | null;
}

export const QuizAdded = (props: Props) => {
    const quizURL: string =`http://localhost:3000/quiz/${props.quizID}`
    return (
        <>
            <h3>The quiz has been added!</h3>
            <p>You may find it with this link: <a href={quizURL}>{quizURL}</a></p>
        </>
    )
}