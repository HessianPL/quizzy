interface Props {
    quizID?: string
}

export const Quiz = (props: Props) => {
    if (props.quizID === undefined) {
        return <h3>There is not such a quiz</h3>
    }

    if (props.quizID.length !== 36) {
        return <h3>There's something wrong with the quiz ID you have provided in an URL</h3>
    }

    return (
        <h2>Quiz #{props.quizID}</h2>
    )
}