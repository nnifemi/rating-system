import React, { useState } from "react";
import Star from "./Star";

const StarRating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    let ratingText = '';
    if (rating !== null) {
        switch(rating) {
            case 1:
                ratingText = 'The rating is terrible';
                break;
            case 2:
                ratingText = 'The rating is bad';
                break;
            case 3:
                ratingText = 'The rating is good';
                break;
            case 4:
                ratingText = 'The rating is great';
                break;
            case 5:
                ratingText = 'The rating is excellent';
                break;
            default:
                ratingText = `The rating is ${rating}`;
        }
    }

    return (
        <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;

                return (
                    <Star
                        starId={ratingValue}
                        rating={hover || rating}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)}
                        onClick={() => setRating(ratingValue)}
                    />
                );
            })}
            <h2 className="ratingText">{ratingText}</h2>
        </div>
    );
}

export default StarRating;