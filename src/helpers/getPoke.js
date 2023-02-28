export const getPokeName = async (name) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}/`
    const resp = await fetch(url)
    const data = await resp.json()

    return data.sprites.other['official-artwork'].front_default;
}

export const getPoke = async (id) => {
    const url = `https://pokeapi.co/api/v2/evolution-chain/${id}/`
    const res = await fetch(url);
    const data = await res.json();

    let arrPoke = []

    let poke_1 = data.chain.species.name;
    let poke_1_img = await getPokeName(poke_1)

    arrPoke.push([poke_1, poke_1_img])

    if (data.chain.evolves_to.length !== 0) {
        let poke_2 = data.chain.evolves_to[0].species.name
        let poke_2_img = await getPokeName(poke_2)
        arrPoke.push([poke_2, poke_2_img])
    }

    if (data.chain.evolves_to[0].evolves_to.length !== 0) {
        let poke_3 = data.chain.evolves_to[0].evolves_to[0].species.name
        let poke_3_img = await getPokeName(poke_3)
        arrPoke.push([poke_3, poke_3_img])
    }
    return arrPoke
}

