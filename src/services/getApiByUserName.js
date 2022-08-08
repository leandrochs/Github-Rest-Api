import axios from 'axios';

function errorHandling(response) {
  if (response?.login && response?.id && response?.repos_url) {
    return response;
  } else if (
    response?.response?.data?.message?.includes('API rate limit exceeded')
  ) {
    return {
      errorMessage: '⚠️ Limite de requisições excedido.',
    };
  } else {
    return {
      errorMessage:
        '⚠️ Usuário não encontrado no github. Verifique se você digitou o nome corretamente.',
    };
  }
}

async function getApiByUserName(userName) {
  const config = {
    method: 'get',
    url: `https://api.github.com/users/${userName}`,
  };

  const response = await axios(config)
    .then((Response) => Response.data)
    .catch((error) => {
      console.log('Erro no Axios: ', error);
      return error
    });

  return errorHandling(response);
}

export default getApiByUserName;

// seguir usuário: https://docs.github.com/pt/rest/users/followers
