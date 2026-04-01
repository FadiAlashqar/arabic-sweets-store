import React from 'react'

const CartCard = ({ name, price, quantity, id, add, remove, img }) => {
    return (
        <div className="card mb-2">
            <div className="row">
                <div className="col-4">
                    <div className="img-wrapper">
                        <img src={img} />
                    </div>
                </div>
                <div className="col-8 p-3 d-flex flex-column justify-content-between">
                    <div className='d-flex justify-content-between m-2'>
                        <p className='bold'>{name}</p>
                        <p className='bold'>{price}</p>
                    </div>
                    <div className='d-flex justify-content-between m-2'>
                        <div className="btn-quantity d-flex align-items-center">
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