import React, { useState } from 'react'
import CartCard from '../components/CartCard'
import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import axios from 'axios'

const Cart = () => {

    const { cartInfo, fetchCart } = useContext(GlobalContext)
    console.log(cartInfo)

    const [alert, setAlert] = useState(false)

    const handleRemove = async (id) => {
        try {
            await axios.patch(`http://localhost:3000/API/sweets/remove/${id}`)
            fetchCart()
        }
        catch (err) {
            console.error(err)
        }
    }

    const handleAdd = async (id) => {
        try {
            await axios.post(`http://localhost:3000/API/sweets/add/${id}`)
            fetchCart()
        }
        catch (err) {
            console.error(err)
        }
    }

    const handleSubmit = async () => {
        try {
            await axios.post('http://localhost:3000/API/sweets/order')
            fetchCart()
            setAlert(true)
            setTimeout(() => setAlert(false), 3000)
        }
        catch (err) {
            console.error(err)
        }
    }

    const subTotal = Math.round(
        cartInfo.reduce((acc, c) => acc + Number(c.price) * c.quantity, 0) * 100
    ) / 100
    const shipping = subTotal > 80 ? 5 : 10

    const total = shipping + subTotal

    console.log(subTotal)

    return (
        <div className="container p-5">
            <div className="row g-2">
                <div className='sticky-top'>
                    {alert && <div className="alert alert-success alert-dismissible fade show" role="alert">
                        <strong>Your order has been registered, thank you for purchasing from our store!</strong>
                    </div>}
                </div>
                <div className="col-12 d-flex justify-content-end mb-4">
                    <h1 className='bold' style={{ color: 'rgba(52, 27, 37, 1)' }}>Your shopping cart</h1>
                </div>
                <div className="col-8 d-flex flex-column">
                    {cartInfo.length === 0 ? <h1 className='bold' style={{ color: 'rgba(52, 27, 37, 1)' }}>Your cart is empty!</h1> :
                        cartInfo.map((c) => {
                            return <div key={c.id}>
                                <CartCard
                                    name={c.name}
                                    price={c.price}
                                    img={c.image_url}
                                    quantity={c.quantity}
                                    remove={() => handleRemove(c.id)}
                                    add={() => handleAdd(c.id)}
                                />
                            </div>
                        })

                    }
                </div>
                <div className="col-4 d-flex justify-content-end">
                    <div className="summary sticky-top">
                        <h3 className='mb-3'>Order summary</h3>
                        <p style={{ fontSize: 10, whiteSpace: 'nowrap', color: 'white' }}> * Shipping is 5€ for orders over 80€ (10€ otherwise)</p>
                        <div className='d-flex justify-content-between'>
                            <p className='bold'>Subtotale :</p>
                            <span>{subTotal.toFixed(2)} €</span>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p className='bold'>Spedizione :</p>
                            <span>{shipping} €</span>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p className='bold'>Totale :</p>
                            <span>{total.toFixed(2)} €</span>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <button className='submit-button' onClick={() => handleSubmit()}>Submit order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart