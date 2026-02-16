import React from 'react'

const Card = ({ img, title, description, }) => {
    return (
        <div className="card">
            <div className="card-img-top">
                <img className='img-fluid' src={img} alt="" />
            </div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
            </div>
        </div>
    )
}

export default React.memo(Card)