import React from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import { useContext } from 'react'
import Card from '../components/Card'
import axios from 'axios'
import { useState } from 'react'
import { useMemo } from 'react'


const Shop = () => {

    const { info, loading, error, fetchCart } = useContext(GlobalContext)

    const [alert, setAlert] = useState(false)

    const [query, setQuery] = useState("")

    console.log(query)

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

    const filteredInfo = useMemo(() => info.filter((i) => i.name.toLowerCase().includes(query) || i.description.toLowerCase().includes(query)), [query, info])

    console.log(filteredInfo)

    const renderProducts = () => {
        if (loading) {
            return <span>Caricamento...</span>
        }
        if (error) {
            return <span className="text-danger">{error}</span>
        }
        if (filteredInfo.length > 0) {
            return filteredInfo.map((f) => {
                return <div key={f.id} className="col-3 mt-4">
                    <Card
                        img={f.image_url}
                        title={f.name}
                        description={f.description}
                        price={f.price}
                        handleClick={handlebutton}
                        id={f.id}
                    />
                </div>
            })
        }
        if (filteredInfo.length === 0 && query != "") {
            return <span>Nessun prodotto trovato con il criterio di ricerca inserito</span>
        }
        if (query === "" && info.length > 0) {
            return info.map((i) => (
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
        }
        else {
            return <p>Nessun prodotto disponibile</p>
        }
    }




    return (
        <>
            <div className="container">
                <div className="row mt-5 g-3">
                    <div className='sticky-top'>
                        {alert && <div className="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>Product added to cart!</strong>
                        </div>}
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                        <h1 className='bold' style={{ color: 'rgba(52, 27, 37, 1)' }}>Our patisserie</h1>
                    </div>
                    <div className="col-12">
                        <div className='search d-flex align-items-center justify-content-between'>
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <input type="search"
                                value={query}
                                placeholder='Search item...'
                                onChange={(e) => setQuery(e.target.value)}
                            />
                        </div>
                    </div>
                    {renderProducts()}

                </div>
            </div>
        </>
    )
}

export default Shop