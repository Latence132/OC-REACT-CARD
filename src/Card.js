import React from "react";

const Card = ({ card, feedback, onClick }) => (
    <div className={`card ${feedback}`} onClick={() => onClick(card)}>
        <span className="symbol">
            {feedback === 'hidden' ? '🎴' : card}
        </span>
    </div>
)
export default Card