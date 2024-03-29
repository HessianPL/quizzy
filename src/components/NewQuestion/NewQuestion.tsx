import './NewQuestion.css'
import {ChangeEvent, SyntheticEvent, useState} from "react";

export interface questionData {
    id?: string;
    quizID?: string;
    text: string;
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
    addQuestion(obj: questionData): void
}

export const NewQuestion = ({addQuestion}: Props) => {
    const [isDisabled, setIsDisabled] = useState(false);
    const [newQuestionData, setNewQuestionData] = useState<questionData>({
        text: "",
        answer1: "",
        answer1isValid: false,
        answer2: "",
        answer2isValid: false,
        answer3: "",
        answer3isValid: false,
        answer4: "",
        answer4isValid: false,
    })

    type InputValue = string | boolean;
    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const target = event.target;
        const inputValue: InputValue =
            target instanceof HTMLInputElement && target.type === 'checkbox'
                ? target.checked
                : target.value;

        setNewQuestionData(prevNewQuestionData => {
            return {
                ...prevNewQuestionData,
                [target.name]: inputValue
            }
        })
    }

    const saveQuestion = (event: SyntheticEvent) => {
        event.preventDefault();
        setIsDisabled(true);
        addQuestion(newQuestionData);
    }

    return (
        <div className='newQuestion'>
            <label className='question'><span>Question: </span>
                <input type='text' name='text' required={true} value={newQuestionData.text} onChange={handleInputChange}/>
            </label>

            <label><span>Answer1: </span>
                <input type='text' name='answer1' required={true} value={newQuestionData.answer1} onChange={handleInputChange}/>
            </label>

            <label>
                <input type='checkbox' name='answer1isValid' checked={newQuestionData.answer1isValid} onChange={handleInputChange}/>
                <span> Mark as correct answer</span>
            </label>

            <label><span>Answer2: </span>
                <input type='text' name='answer2' value={newQuestionData.answer2} onChange={handleInputChange}/>
            </label>

            <label>
                <input type='checkbox' name='answer2isValid' checked={newQuestionData.answer2isValid} onChange={handleInputChange}/>
                <span> Mark as correct answer</span>
            </label>

            <label><span>Answer3: </span>
                <input type='text' name='answer3' value={newQuestionData.answer3} onChange={handleInputChange}/>
            </label>

            <label>
                <input type='checkbox' name='answer3isValid' checked={newQuestionData.answer3isValid} onChange={handleInputChange}/>
                <span> Mark as correct answer</span>
            </label>

            <label><span>Answer4: </span>
                <input type='text' name='answer4' value={newQuestionData.answer4} onChange={handleInputChange}/>
            </label>

            <label>
                <input type='checkbox' name='answer4isValid' checked={newQuestionData.answer4isValid} onChange={handleInputChange}/>
                <span> Mark as correct answer</span>
            </label>

            <button className='saveButton' disabled={isDisabled} onClick={saveQuestion}>Save this question and answers</button>
        </div>
    )
}