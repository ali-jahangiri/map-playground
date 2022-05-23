import { ReactComponent as LocationIcon } from "../assets/icons/marker.svg";
import { ReactComponent as MailIcon } from "../assets/icons/envelope.svg";
import { ReactComponent as ListIcon } from "../assets/icons/list.svg";
import { ReactComponent as HashIcon } from "../assets/icons/hastag.svg";
import { ReactComponent as StartIcon } from "../assets/icons/star.svg";


const ResultDetails = ({
    name,
    photos,
    display_phone,
    is_closed,
    categories,
    rating,
    location,
    phone ,
    review_count,
    url,
    isInDetailsMode
}) => {
    return (
        <div className="resultDetails">
            <p className="resultDetails__title">{name}</p>
            <div className="resultDetails__images">
                {
                    photos?.map((el , i) => (
                        <img alt="item-pic" src={el} key={i} />
                    ))
                }
            </div>
            <div className="resultDetails__row">
                <ListIcon />
                <span>Category</span>
                <p>{categories.map(el => el.title).join(", ")}</p>
            </div>
            <div style={{ alignItems : "flex-start" }} className="resultDetails__row">
                <LocationIcon />
                <div>
                    <p>{location.country} {location.city} {location.state}</p>
                    <p>{location.display_address.join(", ")}</p>
                </div>
            </div>

            <div className="resultDetails__row">
                <MailIcon />
                <span>Zip code</span>
                <p>{location.zip_code}</p>
            </div>
            <div className="resultDetails__row">
                <StartIcon />
                <span>Rate</span>
                <p>{rating} ({review_count})</p>
            </div>

            
            <div className="resultDetails__row">
                <HashIcon />
                <span>Phone </span>
                <p>{display_phone} , {phone}</p>
            </div>

            <div className={`resultDetails__action ${isInDetailsMode  ? "resultDetails__action--show" : ""}`}>
                <a href={url}>Take Now!</a>
            </div>
        </div>
    )
}


export default ResultDetails;