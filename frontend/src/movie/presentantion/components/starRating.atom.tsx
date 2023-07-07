import React from 'react';
import { FaStar } from 'react-icons/fa';
import './starRating.atom.scss';

type Rating = {
  source: string;
  value: string;
};

type Props = {
  ratings: Rating[];
};

const StarRating: React.FC<Props> = ({ ratings }) => {
  const getStarPercentage = (value: number): string => {
    const maxValue = 10;
    const percentage = (value / maxValue) * 100;
    return `${percentage}%`;
  };

  return (
    <div className="star-rating">
      {ratings.map((rating, index) => (
        <div className="star" key={index}>
          <FaStar className="star-icon" />
          <div
            className="star-inner"
            style={{ width: getStarPercentage(parseFloat(rating.value)) }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default StarRating;
