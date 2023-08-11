import './index.scss';
import { useState } from 'react';
import axios from 'axios';
import Pokemn from '../../components/pokemon';

export default function Pokemon() {
    const [pokemons, setPokemons] = useState([]);
    const[url,setUrl] = useState('https://pokeapi.co/api/v2/pokemon')

    async function buscarPokemon() {

        let response = await axios.get(url);

        let listaPokemon = [];

        for (let item of response.data.results) {
            let pokemonResp = await axios.get(item.url);

            let imagem = pokemonResp.data.sprites.other['official-artwork'].front_default;

            let tipos = '';
            for (let t of pokemonResp.data.types) {
                tipos = tipos + t.type.name + '/'

            }

            listaPokemon.push({
                nome: item.name,
                imagem: imagem,
                tipo: tipos
            })


        }

        setPokemons(listaPokemon);
    }

    async function pokeShiny(){
        let url = 'https://pokeapi.co/api/v2/pokemon';

        let response = await axios.get(url);

        let listaPokemon = [];

        for (let item of response.data.results) {
        let pokemonResp = await axios.get(item.url);

            let imagem = pokemonResp.data.sprites.other['official-artwork'].front_shiny;

            let tipos = '';
            for (let t of pokemonResp.data.types) {
                tipos = tipos + t.type.name + '/'

            }

            listaPokemon.push({
                nome: item.name,
                imagem: imagem,
                tipo: tipos
            })


        }
        setPokemons(listaPokemon);
    }
    let x= 20;
    let y= 20 + x;
    function verMais(){
        
        setUrl('https://pokeapi.co/api/v2/pokemon?offset='+ y +'&limit=20')
        buscarPokemon()
    }
    

    return (
        <div className='pagina-pokemon'>

            <section>
                <img src='/assets/images/logoPokedex.png' />
                <button onClick={buscarPokemon}>Encontrar pokemons</button>

                <div className='poke'>
                    {pokemons.map((pokemons) => (
                        <Pokemn
                            nome={pokemons.nome}
                            imagem={pokemons.imagem}
                            tipo={pokemons.tipo}
                        />
                    ))}
                </div>

                <div className='buttons'>
                    <button onClick={verMais}> ver mais</button>
                    <button onClick={pokeShiny}> Shiny </button>
                </div>
            </section>
        </div>
    )
}