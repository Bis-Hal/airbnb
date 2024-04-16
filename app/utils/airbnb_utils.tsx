import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

function isRatingPartial(rating: number) {
    const roundedRating = Math.round(rating);
    if (rating % roundedRating == 0) {
        return false
    }

    return false;
}
export function getStars(rating: number) {
    
    return [1,1,1,0];
}