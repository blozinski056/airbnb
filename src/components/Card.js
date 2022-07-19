import React from "react"

export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    };

    return (
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}

            <img src={props.coverImg} className="card-image" />

            <div className="card-stats">
                <img src="./images/download.png" className="card-star"/>
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) &#x2022; </span>
                <span className="gray">{props.location}</span>
            </div>

            <p>{props.title}</p>
            <p className="card-price"><span className="bold">from ${props.price}</span> / person</p>
        </div>
    )
}