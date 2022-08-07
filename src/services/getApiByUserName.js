import axios from 'axios';

function errorHandling(response) {
  console.log('response: ', response);
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

// erro de excesso de requisição: {
//     "message": "Request failed with status code 403",
//     "name": "AxiosError",
//     "config": {
//         "transitional": {
//             "silentJSONParsing": true,
//             "forcedJSONParsing": true,
//             "clarifyTimeoutError": false
//         },
//         "transformRequest": [
//             null
//         ],
//         "transformResponse": [
//             null
//         ],
//         "timeout": 0,
//         "xsrfCookieName": "XSRF-TOKEN",
//         "xsrfHeaderName": "X-XSRF-TOKEN",
//         "maxContentLength": -1,
//         "maxBodyLength": -1,
//         "env": {
//             "FormData": null
//         },
//         "headers": {
//             "Accept": "application/json, text/plain, */*"
//         },
//         "method": "get",
//         "url": "https://api.github.com/users/leandrochs"
//     },
//     "code": "ERR_BAD_REQUEST",
//     "status": 403
// }
