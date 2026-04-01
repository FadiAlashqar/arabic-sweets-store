import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const GlobalContext = createContext();

export default function GlobalProvider({ children }) {
    const [info, setInfo] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [cartInfo, setCartInfo] = useState([])


    const fetchInfo = async () => {
        try {
            const res = await axios.get('http://localhost:3000/API/sweets')
            setInfo(res.data)
        }
        catch (err) {
            console.error(err)
            setError('Errore nel recupero dei dati!')
        }
        finally {
            setLoading(false)
        }

    }

    const fetchCart = async () => {
        try {
            const cartRes = await axios.get('http://localhost:3000/API/sweets/view/cart')
            setCartInfo(cartRes.data)
        }
        catch (err) {
            console.error(err)
            setError('Errore nel recupero dei dati!')
        }
    }

    useEffect(() => {

        fetchInfo()
        fetchCart()
    }, [])

    return <GlobalContext.Provider value={{ info, loading, error, cartInfo, fetchCart, }}>
        {children}
    </GlobalContext.Provider>
}