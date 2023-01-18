import location from "../svg/location.svg"

function Card(props) {
    return (
        <div className="card">
            <img src={props.imageUrl} className="card--img" alt={props.title} />
            <div className="card--data">  
                <div className="card--location">
                    <img src={location} className="card--location-icon" alt="location icon" />
                    <h6 className="card--location-country">{props.location}</h6>
                    <a href={props.googleMapsUrl} className="card--location-link">View on Google Maps</a>
                </div>
                <h1 className="card--title">{props.title}</h1>
                <h5 className="card--dates">{props.startDate} - {props.endDate}</h5>
                <p className="card--description">{props.description}</p>
            </div>  
        </div>
    )
}

export default Card
