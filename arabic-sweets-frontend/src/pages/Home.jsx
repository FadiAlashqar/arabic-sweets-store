import React from 'react'
import { NavLink } from 'react-router-dom'
import { GlobalContext } from '../contexts/GlobalContext'
import { useContext } from 'react'
import Card from '../components/Card'
import { useState } from 'react'
import axios from 'axios'

const Home = () => {

    const { info, loading, error, fetchCart } = useContext(GlobalContext)

    const [alert, setAlert] = useState(false)

    const ids = [1, 2, 3]

    const bestSeller = ids.map((d) => info.filter((i) => i.id === d)).flat()
    console.log(bestSeller)

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

        <div className="home-container">
            <div className='sticky-top'>
                {alert && <div className="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Product added to cart!</strong>
                </div>}
            </div>
            <div className="hero">
                <h1 className='white'>The oriental art of pastry making</h1>
                <h3 className='white'>Tradition and passion</h3>
                <NavLink className='cart-button my-2' to={'/shop'}>Our products</NavLink>
            </div>
            <div className="us d-flex">
                <div className='left'>
                    <img src="./us.png" alt="" />
                </div>
                <div className='right'>
                    <span className='bold'>OUR HERITAGE</span>
                    <h3>A century of sweet secrets</h3>
                    <hr />
                    <div className='mt-5'>
                        <p>From the heart of centuries-old traditions, we bring to your table
                            the essence of Middle Eastern hospitality. Each sweet is a
                            sensory journey through precious spices, orange blossom honey,
                            and the crispiness of the finest pistachios.</p>
                        <p>
                            Our mission is to preserve the authenticity of the flavors,
                            crafting every pastry by hand to ensure an experience that goes
                            beyond the simple palate: it is a story of passion and dedication.
                        </p>
                    </div>
                </div>
            </div>
            <div className="popular">
                <div className="row">
                    <div className="col-12 d-flex flex-column align-items-center p-2">
                        <h1>Best seller</h1>
                        <p>Artisanal selection prepared every day with first-choice ingredients</p>
                    </div>
                    <div className="col-12 d-flex justify-content-center gap-3">
                        {loading ? (
                            <p>Caricamento...</p>
                        ) : error ? (
                            <p className="text-danger">{error}</p>
                        ) : bestSeller.length > 0 ? (
                            bestSeller.map((i) => (
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
            </div>
        </div >
    )
}

export default Home