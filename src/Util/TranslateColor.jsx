const typeBackgrounds = {
    fire: '#E72324',
    water: '#2980EF',
    grass: '#3DA224',
    electric: '#FAC000',
    ice: '#3DD9FF',
    fighting: '#3DD9FF',
    poison: '#923FCC',
    ground: '#915121',
    flying: '#81B9EF',
    steel: '#60A1B8',
    bug: '#91A119',
    dragon: '#5061E1',
    ghost: '#704170',
    fairy: '#EF71F0',
    normal: '#9FA19F',
    psychic: '#F36C97',
    rock: '#B0AB82',
    dark: '#50413F'
};

export const traslatecolor = (name) => {

    return typeBackgrounds[name];

}