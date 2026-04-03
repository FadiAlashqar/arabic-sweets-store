import React from 'react'

const Card = ({ img, title, description, price, handleClick, id }) => {
    return (
        <div className="card">
            <div className="img-wrapper">
                <img src={img} alt="" />
            </div>
            <div className="card-body d-flex flex-column justify-content-between">
                <div className='top'>
                    <h2 className="card-title">{title}</h2>
                    <p className="card-text fs-6">{description}</p>
                </div>
                <div className="bottom">
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="card-text fw-bold fs-5">{price}€</p>
                        <button onClick={() => { handleClick(id) }} style={{ all: 'unset', cursor: 'pointer' }}><i class="fa-solid fa-cart-arrow-down fs-4"></i></button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default React.memo(Card)