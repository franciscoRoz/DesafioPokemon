export const CapitalizeFirstLetter=(word)=> {
    if (!word) return '';
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }