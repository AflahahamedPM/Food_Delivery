import React from "react";
import { fullStar, halfStar, emptyStar } from "../Image";
import Image from "next/image";

const RatingStar = ({ rating }) => {
  return (
    <div className="flex gap-2 mb-4">
      {Array.from({ length: 5 }, (_, index) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating - fullStars >= 0.01;
        if (index < fullStars) {
          return (
            <Image
              key={`star-${index}`}
              src={fullStar}
              width={24}
              height={24}
              alt="Star"
            />
          );
        } else if (index === fullStars && hasHalfStar) {
          return (
            <Image
              key={`half-star-${index}`}
              src={halfStar}
              width={24}
              height={24}
              alt="Half Star"
            />
          );
        } else {
          return (
            <Image
              key={`empty-star-${index}`}
              src={emptyStar}
              width={24}
              height={24}
              alt="Empty Star"
            />
          );
        }
      })}
    </div>
  );
};

export default RatingStar;
