import { ReactComponent as StartIcon } from "../assets/icons/star.svg";
import { ReactComponent as LocationIcon } from "../assets/icons/marker.svg";

const ResultItem = ({
    image_url,
    name ,
    rating,
    id,
    review_count,
    location ,
    coordinates,
    onHover,
    renderKeyCount
}) => {
    return (
        <div style={{ animationDelay : `${renderKeyCount * 100}ms` }} onMouseEnter={() => onHover(coordinates)} className="resultItem">
            <div>
                <img alt="business-pic" src={image_url} />
            </div>
            <div className="resultItem__details">
                <p className="resultItem__details__title">{name}</p>
                <div className="resultItem__details__rating">
                    <StartIcon />
                    <span>{rating} ({review_count})</span>
                </div>
                <div className="resultItem__details__location">
                    <LocationIcon />
                    <p>
                        {location.display_address.join(", ")}
                    </p>
                </div>
            </div>
        </div>
    )
}


export default ResultItem;