
export const selectAllPokemon = state => Object.values(state.entities.pokemon);

export const selectPokeItems = (state, poke) => {
  console.log('hi')
  debugger
  return poke ? poke.item_ids.map(id => state.entities.items[id]) : [];
};

export const selectPokemonItem = (state, id) => {
  return state.entities.items[id];
};