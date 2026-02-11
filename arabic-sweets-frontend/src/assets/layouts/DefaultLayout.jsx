import React from 'react'
import { Outlet, } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const DefaultLayout = () => {
    return (
        <>

            <header>
                <img className='logo' src="/new-logo.png" alt="" />
                <NavLink className='home' to='/'>Home</NavLink>
                <NavLink className='cart' to='/cart'><i className="fa-solid fa-cart-shopping"></i></NavLink>
                <NavLink className='shop' to='/shop'>Shop</NavLink>


            </header>
            <main>
                <Outlet />
            </main>
            <footer></footer>
        </>
    )
}

export default DefaultLayout