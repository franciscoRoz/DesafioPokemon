const typetraslate = {
    fire: 'Fuego',
    water: 'Agua',
    grass: 'Planta',
    electric: 'Eléctrico',
    ice: 'Hielo',
    fighting: 'Lucha',
    poison: 'Veneno',
    ground: 'Tierra',
    flying: 'Volador',
    steel: 'Acero',
    bug: 'Insecto',
    dragon: 'Dragon',
    ghost: 'Fantasma',
    fairy: 'Hada',
    normal: 'Normal',
    psychic: 'Psíquico',
    rock: 'Roca',
    dark: 'Siniestro'
};

export const traslatetype = (name) => {

    return typetraslate[name];

}