import React from 'react'

const CartCard = ({ name, price, quantity, id, add, remove, img }) => {
    return (
        <div style={{ transform: 'none' }} className="card mb-2">
            <div className="row">
                <div className="col-4 p-0">
                    <div className="img-wrapper">
                        <img src={img} />
                    </div>
                </div>
                <div className="col-8 p-3 d-flex flex-column justify-content-between colors">
                    <div className='d-flex justify-content-between m-2'>
                        <h2 className='bold'>{name}</h2>
                        <p className='fw-bold fs-5'>{price} €</p>
                    </div>
                    <div className='d-flex justify-content-between m-2'>
                        <div className="cart-button d-flex align-items-center justify-content-around">
                            <button className='mx-1' onClick={remove}>-</button>
                            <span className='mx-1'>{quantity}</span>
                            <button className='mx-1' onClick={add}>+</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(CartCard)