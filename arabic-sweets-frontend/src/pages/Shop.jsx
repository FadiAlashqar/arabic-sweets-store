import React from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import { useContext } from 'react'
import Card from '../components/Card'


const Shop = () => {

    const { info, loading, error } = useContext(GlobalContext)

    console.log(info)

    return (
        <>
            <div className="container p-5">
                <div className="row mt-5">
                    {loading ? (
                        <p>Caricamento...</p>
                    ) : error ? (
                        <p className="text-danger">{error}</p>
                    ) : info.length > 0 ? (
                        info.map((i) => (
                            <div key={i.id} className="col-3">
                                <Card
                                    img={i.image_url}
                                    title={i.name}
                                    description={i.description}
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