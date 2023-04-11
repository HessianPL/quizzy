import './NewQuestion.css'
import {ChangeEvent, SyntheticEvent, useState} from "react";

export interface questionData {
    questionTitle: string;
    answer1: string;
    answer2: string;
    answer3: string;
    answer4: string;
    answer1isValid: boolean;
    answer2isValid: boolean;
    answer3isValid: boolean;
    answer4isValid: boolean;
}

interface Props {
    addQuestion(obj: {
        // answers: [],
        // quizID: string,
        questionTitle: string
    }): void
}

export const NewQuestion = ({addQuestion}: Props) => {
    const [isDisabled, setIsDisabled] = useState(false);
    const [newQuestionData, setNewQuestionData] = useState<questionData>({
        questionTitle: "",
        answer1: "",
        answer1isValid: false,
        answer2: "",
        answer2isValid: false,
        answer3: "",
        answer3isValid: false,
        answer4: "",
        answer4isValid: false,
    })

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {value, name} = event.target;

        setNewQuestionData(prevNewQuestionData => {
            return {
                ...prevNewQuestionData,
                [name]: value
            }
        })
    }

    const sendForm = (event: SyntheticEvent) => {
        event.preventDefault();
        // console.log('Form with new question data is sent')
        // console.log(newQuestionData)
        setIsDisabled(true);
        addQuestion(newQuestionData);
    }

    return (
        <div className='newQuestion'>
                <label>Question: <input type='text' name='questionTitle' value={newQuestionData.questionTitle}
                                        onChange={handleInputChange}/></label>
                <label>Answer1: <input type='text' name='answer1' value={newQuestionData.answer1}
                                       onChange={handleInputChange}/></label>
                <label>Answer2: <input type='text' name='answer2' value={newQuestionData.answer2}
                                       onChange={handleInputChange}/></label>
                <label>Answer3: <input type='text' name='answer3' value={newQuestionData.answer3}
                                       onChange={handleInputChange}/></label>
                <label>Answer4: <input type='text' name='answer4' value={newQuestionData.answer4}
                                       onChange={handleInputChange}/></label>
            <button disabled={isDisabled} onClick={sendForm}>Save this question and answers</button>
        </div>
    )
}