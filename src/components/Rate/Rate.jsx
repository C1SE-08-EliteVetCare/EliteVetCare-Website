import React, {useMemo, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

const Rate = ({count, rating, color, onRating, classStyle}) => {
    const [hoverRating, setHoverRating] = useState(0)
    const getColor = (index) => {
        if (hoverRating >= index) {
            return color.filled;
        } else if (!hoverRating && rating >= index) {
            return color.filled;
        }
        return color.unfilled;
    }

    const starRating = useMemo(() => {
        return Array(count)
            .fill(0)
            .map((item, index) => index + 1)
            .map(index => (
                <FontAwesomeIcon
                    key={index}
                    className={`cursor-pointer ${classStyle}`}
                    icon={faStar}
                    style={{color: getColor(index)}}
                    onClick={() => onRating && onRating(index)}
                    onMouseEnter={() => onRating && setHoverRating(index)}
                    onMouseLeave={() => onRating && setHoverRating(0)}
                />
            ))
        // eslint-disable-next-line
    }, [count, rating, hoverRating])
    return (
        <div>
            {starRating}
        </div>
    );
};

Rate.defaultProps = {
    count: 5,
    rating: 0,
    color: {
        filled: "#F5EB3B",
        unfilled: "#DCDCDC"
    }
}

export default Rate;