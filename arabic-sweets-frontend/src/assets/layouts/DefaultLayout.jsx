import React from 'react'
import { Outlet, } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const DefaultLayout = () => {
    return (
        <>

            <header>
                <img className='logo' src="/new-logo.png" alt="" />
                <NavLink className='home {({isActive}) => isActive ? "active" : ""}' to='/'>Home</NavLink>
                <NavLink className='cart {({isActive}) => isActive ? "active" : ""}' to='/cart'><i className="fa-solid fa-cart-shopping"></i></NavLink>
                <NavLink className='shop {({isActive}) => isActive ? "active" : ""}' to='/shop'>Shop</NavLink>


            </header >
            <main>
                <Outlet />
            </main>
            <footer></footer>
        </>
    )
}

export default DefaultLayout