import React from 'react'

const Cart = () => {
    return (
        <div className="container p-5">
            <div className="row g-2">
                <div className="col-12 d-flex justify-content-end">
                    <h1>CART</h1>
                </div>
                <div className="col-8 d-flex flex-column">
                    <div className="card mb-2">
                        <div className="row">
                            <div className="col-4">
                                <div className="img-wrapper">
                                    <img src="./new-logo.png" alt="" />
                                </div>
                            </div>
                            <div className="col-8 p-3 d-flex flex-column justify-content-between">
                                <div className='d-flex justify-content-between m-2'>
                                    <p className='bold'>Name</p>
                                    <p className='bold'>Price</p>
                                </div>
                                <div className='d-flex justify-content-between m-2'>
                                    <div className="btn-quantity d-flex align-items-center">
                                        <button className='mx-1'>-</button>
                                        <span className='mx-1'>1</span>
                                        <button className='mx-1'>+</button>
                                    </div>
                                    <button type="button" class="button">Remove</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-2">
                        <div className="row">
                            <div className="col-4">
                                <div className="img-wrapper">
                                    <img src="./new-logo.png" alt="" />
                                </div>
                            </div>
                            <div className="col-8 p-3 d-flex flex-column justify-content-between">
                                <div className='d-flex justify-content-between m-2'>
                                    <p className='bold'>Name</p>
                                    <p className='bold'>Price</p>
                                </div>
                                <div className='d-flex justify-content-between m-2'>
                                    <div className="btn-quantity d-flex align-items-center">
                                        <button className='mx-1'>-</button>
                                        <span className='mx-1'>1</span>
                                        <button className='mx-1'>+</button>
                                    </div>
                                    <button type="button" class="button">Remove</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-2">
                        <div className="row">
                            <div className="col-4">
                                <div className="img-wrapper">
                                    <img src="./new-logo.png" alt="" />
                                </div>
                            </div>
                            <div className="col-8 p-3 d-flex flex-column justify-content-between">
                                <div className='d-flex justify-content-between m-2'>
                                    <p className='bold'>Name</p>
                                    <p className='bold'>Price</p>
                                </div>
                                <div className='d-flex justify-content-between m-2'>
                                    <div className="btn-quantity d-flex align-items-center">
                                        <button className='mx-1'>-</button>
                                        <span className='mx-1'>1</span>
                                        <button className='mx-1'>+</button>
                                    </div>
                                    <button type="button" class="button">Remove</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4 d-flex justify-content-end">
                    <div className="summary sticky-top">
                        <h3 className='mb-5'>Order summary</h3>
                        <div className='d-flex justify-content-between'>
                            <p>Subtotale</p>
                            <span>100</span>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p>Spedizione</p>
                            <span>5</span>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p>Totale</p>
                            <span>105</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart