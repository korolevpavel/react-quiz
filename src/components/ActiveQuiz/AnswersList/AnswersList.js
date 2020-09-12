import React from "react";
import classes from './AnswersList.module.css'
import Answeritem from "./AnswerItem/AnswerItem";

const AnswersList = props => (
    <ul className={classes.AnswersList}>
        {props.answers.map((answer, index) => {
            return (
                <Answeritem
                    key={index}
                    answer={answer}
                />
            )
        })}
    </ul>
)

export default AnswersList