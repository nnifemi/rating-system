import React from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ starId, rating, onMouseEnter, onMouseLeave, onClick }) => {
    return (
        <label>
            <input
                type="radio"
                name="rating"
                value={starId}
                onClick={onClick}
            />
            <FaStar
                className="star"
                color={starId <= rating ? "#ffc107" : "#e4e5e9"}
                size={100}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            />
        </label>
    );
};

export default Star;