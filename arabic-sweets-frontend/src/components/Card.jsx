import React from 'react'

const Card = ({ img, title, description, price }) => {
    return (
        <div className="card">
            <div className="img-wrapper">
                <img src={img} alt="" />
            </div>
            <div className="card-body">
                <div className='top'>
                    <h2 className="card-title">{title}</h2>
                    <p className="card-text fs-6">{description}</p>
                </div>
                <div className="bottom d-flex justify-content-between mt-2 align-items-center">
                    <p className="card-text fw-bold fs-5">{price}€</p>
                    <p className="card-text" style={{ cursor: "pointer" }}><i class="fa-solid fa-cart-arrow-down fs-4"></i></p>
                </div>
            </div>
        </div >
    )
}

export default React.memo(Card)