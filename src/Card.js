import React from "react";

const Card = ({ card, feedback }) => (
    <div className={`card ${feedback}`} onClick={() => console.log(card, 'clicked')}>
        <span className="symbol">
            {feedback === 'hidden' ? '🎴' : card}
        </span>
    </div>
)
export default Card