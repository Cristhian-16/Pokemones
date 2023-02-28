import { useState, useEffect } from "react"
import { getPoke } from "../helpers/getPoke"

export const useCountPoke = () => {

    const [pokeId, setPokeId] = useState(1)
    const [evolution, setEvolutions] = useState([])

    const onAddCount = () => {
        setPokeId(pokeId + 1)
    }

    const restCount = () => {
        if (pokeId <= 1) return;
        setPokeId(pokeId - 1)
    }

    const resultPoke = async () => {
        const result = await getPoke(pokeId)
        setEvolutions(result);
    }

    useEffect(() => {
        resultPoke()
    }, [pokeId])

    return {
        pokeId,
        evolution,
        restCount,
        onAddCount,
    }
}
