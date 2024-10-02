import React from "react";

const Card = ({ question, flipped, setFlipped }) => {
    const flipCard = () => {
        setFlipped(!flipped); // Toggle the flipped state using the function passed from App
    };

    return (
        <div className="cardContainer" id={question.difficulty} onClick={flipCard}>
            {flipped ? (
                <>
                    <p>{question.answer}</p>
                </>
            ) : (
                <>
                    <p>{question.question}</p>
                    {question.image && <img className="questionImage" src={question.image} />}
                </>
            )}
        </div>
    );
};

export default Card;
