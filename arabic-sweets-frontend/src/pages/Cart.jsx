import React from 'react'
import CartCard from '../components/CartCard'
import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import axios from 'axios'

const Cart = () => {

    const { cartInfo, fetchCart } = useContext(GlobalContext)
    console.log(cartInfo)

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

    const subTotal = Math.round(
        cartInfo.reduce((acc, c) => acc + Number(c.price) * c.quantity, 0) * 100
    ) / 100
    const shipping = subTotal > 80 ? 5 : 10

    const total = shipping + subTotal

    console.log(subTotal)

    return (
        <div className="container p-5">
            <div className="row g-2">
                <div className="col-12 d-flex justify-content-end">
                    <h1>CART</h1>
                </div>
                <div className="col-8 d-flex flex-column">
                    {cartInfo.length === 0 ? 'Cart is empty!' :
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
                        <h3 className='mb-5'>Order summary</h3>
                        <div className='d-flex justify-content-between'>
                            <p>Subtotale</p>
                            <span>{subTotal.toFixed(2)} €</span>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p>Spedizione</p>
                            <span>{shipping} €</span>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p>Totale</p>
                            <span>{total.toFixed(2)} €</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart