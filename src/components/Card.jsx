import React from 'react'
import star from '../assets/images/star.png'

function Card(props) {
    let badgeText;
    if(props.openSpots === 0) badgeText = "SOLD OUT"
    else if(props.location === "Online") badgeText = "ONLINE"

    return(
        <div className='card'>
            {badgeText && <div className='card--badge'>{badgeText}</div>}
            <img
                src={`src/assets/images/${props.coverImg}`}
                className='card--photo'
                alt='Main card image.'
            />
            <div className='card--stats'>
                <img
                    src={star}
                    className='card--star'
                    alt='Star icon.'
                />
                <span className='card--rating'>{props.stats.rating.toFixed(1)}</span>
                <span className='card--reviewCount'>&nbsp;({props.stats.reviewCount})</span>
                <span className='card--location'>&nbsp;• {props.location}</span>
            </div>
            <p className='card--title'>{props.title}</p>
            <p className='card--price'>
                <strong>From ${props.price}</strong> / person
            </p>
        </div>
    )
}

export default Card