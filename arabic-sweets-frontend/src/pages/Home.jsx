import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="home-container d-flex justify-content-end align-items-center">
            <div className="shop-section d-flex flex-column align-items-center justify-content-center p-5">
                <div>
                    <p className='claim'>Assapora la dolcezza della tradizione orientale !</p>
                </div>
                <div>
                    <Link to={'/shop'}><button type="button" className="button">SHOP NOW</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Home