import React, { useEffect, useState, Fragment } from 'react'
import Card from '../components/Card'
import LoadingCard from '../components/LoadingCard'

const Home = () => {
    const [loadAPI, setLoadAPI] = useState<string>('https://pokeapi.co/api/v2/pokemon/?limit=20')
    const [next, setNext] = useState<string>('')
    const [previous, setPrevious] = useState<string>('')
    const [pokemon, setPokemon] = useState<any>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [search, setSearch] = useState<string>('')

    const fetchAPI = async () => {
        const response = await fetch(loadAPI)
        const data = await response.json()
        setNext(data.next)
        setPrevious(data.previous)
        const createPokemonObject = (results: any) => {
            results.forEach(async (pokemon: any) => {
                const res = await fetch(pokemon.url)
                const data = await res.json()
                setPokemon((currentList: any) => [...currentList, data])
            })
        }
        createPokemonObject(data.results)
    }

    useEffect(() => {
        fetchAPI()
        setLoading(false)
    }, [loadAPI])

    const nextHandler = () => {
        setPokemon([])
        setLoadAPI(next)
    }

    const prevHandler = () => {

        if (previous) {
            setPokemon([])
            setLoadAPI(previous)
        }
    }
    return (
        <>
            <div className='d-flex'>
                <input type="email" className="form-control me-2 me-sm-3" value={search} onChange={(e: any) => setSearch(e.target.value)} placeholder="Search pokemon by name" />

            </div>
            <div className='container my-5'>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 justify-content-center c-c-g c-r-g">
                    {loading ? <LoadingCard /> : pokemon.filter((item: any) => {
                        if (search === '') return item
                        else if (item.name.toLowerCase().includes(search.toLowerCase())) return item
                    }).map((item: any, index: number) =>
                        <Fragment key={index}>
                            <Card data={item} />
                        </Fragment>
                    )}
                </div>

            </div>
            <div className='d-flex justify-content-between'>
                <button type="button" className="btn btn-primary" onClick={prevHandler} disabled={previous ? false : true}>Previous</button>
                <button type="button" className="btn btn-primary" onClick={nextHandler}>Next</button>
            </div>
        </>
    )
}

export default Home