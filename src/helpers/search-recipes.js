import axios from 'axios';

export default async function searchRecipes(searchTerm) {
  const options = {
    url: 'https://yummly2.p.rapidapi.com/feeds/search',
    params: {
      q: searchTerm,
    },
    headers: {
      'X-RapidAPI-Host': 'yummly2.p.rapidapi.com',
      'X-RapidAPI-Key': '99daa51108msh6a4491a577de31ep15db7djsnbf53bc67fc87',
    },
  };

  const response = await axios(options);
  return response.data;
}
