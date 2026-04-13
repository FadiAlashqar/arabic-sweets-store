import React, { useEffect } from 'react'
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

    const [sort, setSort] = useState("default")

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

    console.log(filteredInfo, "filtered info")
    console.log(sort)

    const renderProducts = () => {

        let items;
        if (loading) {
            return <span>Caricamento...</span>
        }
        if (error) {
            return <span className="text-danger">{error}</span>
        }
        items = query !== "" ? [...filteredInfo] : [...info]
        if (items.length === 0 && query !== "") {
            return <span>Nessun prodotto trovato con il criterio di ricerca inserito</span>
        }
        if (sort === "ASC") {
            items.sort((a, b) => Number(a.price) - Number(b.price))
        }
        if (sort === "DES") {
            items.sort((a, b) => Number(b.price) - Number(a.price))
        }
        return items.map((f) => {
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

    console.log(sort)

    return (
        <>
            <div className="container p-2 mb-2">
                <div className="row mt-5 g-3">
                    <div className='sticky-top'>
                        {alert && <div className="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>Product added to cart!</strong>
                        </div>}
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                        <h1 className='bold' style={{ color: 'rgba(52, 27, 37, 1)' }}>Our patisserie</h1>
                    </div>
                    <div className="col-12 d-flex justify-content-between">
                        <div className='search d-flex align-items-center justify-content-between'>
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <input type="search"
                                value={query}
                                placeholder='Search item...'
                                onChange={(e) => setQuery(e.target.value)}
                            />
                        </div>
                        <div className="filetrBtn d-flex align-items-center">
                            <span className='bold me-2' style={{ whiteSpace: 'nowrap', color: 'rgba(52, 27, 37, 1)' }}>ORDINA PER :</span>
                            <select className="form-select" aria-label="Default select example"
                                onChange={(e) => setSort(e.target.value)}
                            >
                                <option value='default'>Default</option>
                                <option value="ASC">Ascending price</option>
                                <option value="DES">Descending price</option>
                            </select>
                        </div>
                    </div>
                    {renderProducts()}

                </div>
            </div >
        </>
    )
}

export default Shop