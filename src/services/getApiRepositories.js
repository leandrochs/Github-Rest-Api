import axios from 'axios';

async function getApiRepositories(userName) {
  const config = {
    method: 'get',
    url: `https://api.github.com/users/${userName}/repos`,
  };

  return await axios(config)
    .then((Response) => Response.data)
    .catch((error) => {
      console.error(error);
      return error;
    });
}

export default getApiRepositories;
