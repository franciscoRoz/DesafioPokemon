import axios from "axios";


export const GetAction = async () => {
const apiurl = process.env.POKEDEX_API_URL
  const URL = `${apiurl}/`;

  try {
    const response = await axios.get(URL);
    
    return await response.data;
   
  } catch (error) {
   
    return window.location.replace(`/paginaError`)
  }
};