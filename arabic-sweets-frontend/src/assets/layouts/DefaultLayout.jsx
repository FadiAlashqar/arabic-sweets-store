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
            <footer>
                <div className='me'>
                    <span>© 2026 – Fadi Alashqar</span>
                    <span> Linkedin : www.linkedin.com/in/fadi-alashqar-825889280</span>
                    <span>Github : https://github.com/FadiAlashqar</span>
                    <span>Mail : fadialshqar.fa01@gmail.com</span>
                </div>
            </footer>
        </>
    )
}

export default DefaultLayout