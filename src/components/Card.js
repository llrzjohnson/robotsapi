import React from 'react'

const Card = ({id, name, city, email}) => {
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
            <img alt="robots" src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2 value={city}>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}
export default Card
