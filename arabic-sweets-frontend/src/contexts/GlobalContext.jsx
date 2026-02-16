import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const GlobalContext = createContext();

export default function GlobalProvider({ children }) {
    const [info, setInfo] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
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

        fetchInfo()
    }, [])

    return <GlobalContext.Provider value={{ info, loading, error }}>
        {children}
    </GlobalContext.Provider>
}