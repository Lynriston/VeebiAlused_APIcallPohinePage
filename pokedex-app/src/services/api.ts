import axios from "axios"

const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2"
});

export const getPokemonList = (limit = 20) => 
    api.get(`/pokemon?limit=${limit}`);

export const getPokemon = (name: any) => 
    api.get<import("../types/pokemon").Pokemon>(`/pokemon/${name}`);

export default api;