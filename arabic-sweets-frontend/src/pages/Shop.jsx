import React from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import { useContext } from 'react'
import Card from '../components/Card'
import axios from 'axios'
import { useState } from 'react'


const Shop = () => {

    const { info, loading, error, fetchCart } = useContext(GlobalContext)

    const [alert, setAlert] = useState(false)

    console.log(info)

    const handlebutton = async (id) => {
        try {
            const res = await axios.post(`http://localhost:3000/API/sweets/add/${id}`)
            setAlert(true)
            fetchCart()
            setTimeout(() => setAlert(false), 2500)
        }
        catch (err) {
            console.error(err)
        }
    }

    return (
        <>
            <div className="container p-5">
                <div className="row">
                </div>
                <div className="row mt-5 g-3">
                    <div className='sticky-top'>
                        {alert && <div className="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>Product added to cart!</strong>
                        </div>}
                    </div>
                    {loading ? (
                        <p>Caricamento...</p>
                    ) : error ? (
                        <p className="text-danger">{error}</p>
                    ) : info.length > 0 ? (
                        info.map((i) => (
                            <div key={i.id} className="col-3 mt-4">
                                <Card
                                    img={i.image_url}
                                    title={i.name}
                                    description={i.description}
                                    price={i.price}
                                    handleClick={handlebutton}
                                    id={i.id}
                                />
                            </div>
                        ))
                    ) : (
                        <p>Nessun prodotto disponibile</p>
                    )}

                </div>
            </div>
        </>
    )
}

export default Shop