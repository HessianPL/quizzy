import {useParams} from "react-router-dom";
import {Quiz} from "../components/Quiz/Quiz";

export const SingleQuizView = () => {
    const {id} = useParams();
        return (
            <Quiz quizID={id} />
        )
}