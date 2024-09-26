const { render, renderHook, waitFor } = require("@testing-library/react");
const {
  useGetPokemonQuery,
  useGetPokemonByidQuery,
} = require("../../src/Pokedex/Hook/useFilterPokemon");
const { Provider } = require("react-redux");
const { store } = require("../../src/store/store");

describe("Pruebas en useGetPokemonQuery", () => {
  test("debe devolver los pokemones por defecto", async () => {
    const { result } = renderHook(() => useGetPokemonQuery(), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    });

    // Espera a que el estado del hook se resuelva
    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toBeDefined();
// Verifica que dentro de la primera array este charmander
    const pokemonList = result.current.data.results || result.current.data;

    expect(Array.isArray(pokemonList)).toBe(true);

    const charmander = pokemonList.some(
      (pokemon) => pokemon.name === "charmander"
    );
    expect(charmander).toBe(true);
  });

  test("debe devolver los valores por defecto", async () => {
    const { result } = renderHook(() => useGetPokemonByidQuery(), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    // Verifica que el pokemon por defecto sea Bulbasaur

    expect(result.current.data).toBeDefined();
    expect(result.current.data.id).toBe(1);
    expect(result.current.data.forms[0].name).toBe("bulbasaur");

    //console.log("Datos del Pokémon:", result.current.data);
  });
});
