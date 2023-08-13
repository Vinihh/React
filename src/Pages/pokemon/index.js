import './index.scss';
import { useState } from 'react';
import axios from 'axios';
import Pokemn from '../../components/pokemon';

export default function Pokemon() {
    const [pokemons, setPokemons] = useState([]);
    const [vm, setVm] = useState(0);
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')
    const[nmPokemon,setNmPokemon] = useState('');

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

    async function mostrarShiny() {
        let shinyPokemons = await Promise.all(
            pokemons.map(async (pokemon) => {
                let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.nome}`);
                let shinyImagem = response.data.sprites.other['official-artwork'].front_shiny;

                return {
                    ...pokemon,
                    imagem: shinyImagem,
                };
            })
        );

        setPokemons(shinyPokemons);
    }


    async function verMais() {
        setVm(vm + 20)
        setUrl('https://pokeapi.co/api/v2/pokemon?offset=0' + '&limit=' + vm)
        buscarPokemon()
    }

    async function buscar() {
        
            let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nmPokemon}`);
    
            let novoPokemon = {
                nome: response.data.name,
                imagem: response.data.sprites.other['official-artwork'].front_default,
                tipo: response.data.types.map((t) => t.type.name).join('/'),
            };
    
            setPokemons([novoPokemon]);
      
    }

    function teclaEnter(e) {
        if (e.key === 'Enter') {
            buscar();
        }
    }




    return (
        <div className='pagina-pokemon'>

            <section>
                <img src='/assets/images/logoPokedex.png' />
                <div className='busca'>
                    <button onClick={buscarPokemon}>Encontrar pokemons</button>

                    <div className='inp1'>
                        <div>
                            <h2>Nome Pokemon</h2>
                            <input type='text' onKeyUp={teclaEnter} value={nmPokemon} onChange={e => setNmPokemon(e.target.value)} ></input> 
                        </div>

                        <button onClick={buscar} ><img src='/assets/images/icon-buscar2.png' /></button>   
                    </div>
                </div>
                
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
                    <button onClick={mostrarShiny} > Shiny </button>
                </div>
            </section>
        </div>
    )
}