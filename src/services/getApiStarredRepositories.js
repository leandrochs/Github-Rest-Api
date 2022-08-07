import axios from 'axios';

async function getApiStarredRepositories(userName) {
  const config = {
    method: 'get',
    url: `https://api.github.com/users/${userName}/starred`,
  };

  return await axios(config)
    .then((Response) => Response.data)
    .catch((error) => console.error(error));
}

export default getApiStarredRepositories;
