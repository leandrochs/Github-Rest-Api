# Encontre reposiórios no Github buscando por nome de usuário

O deploy deste projeto pode ser encontrado [neste link Heroku](https://mighty-earth-47536.herokuapp.com/).

## Scripts

Neste projeto você pode rodar:

### `docker-compose up -d --build`

O aplicativo irá rodar com docker na porta 3000.
Abra [http://localhost:3000](http://localhost:3000) para ver no browser.

### `docker-compose down`

Você irá parar o funcionamento do aplicativo no docker.

### `npm start`

O aplicativo irá rodar na porta 3000.
Abra [http://localhost:3000](http://localhost:3000) para ver no browser.

### `npm test`

Irá rodar os testes do aplicativo.

---
## Documentação do códico

#### A raíz do projeto contém as seguintes pastas e arquivos:

</br>

##### Pasta `node_modules`
- Contém os arquivos gerados durante a instalação com `npm install`.

##### Pasta `public`
- Contém ícones de navegador e o arquivo `index.html`.
    
    - index.html
      Possui as configurações html básicas para renderização no navegador. O aplicativo React é single page e cria a página tendo como refência a tag `<div id="root"></div>`  .


##### Pasta `src`
- Pasta raíz do projeto onde encontramos as pastas e arquivos do aplicativo.
Nela encontramos as pastas:
  - Pasta `components`
    Contém as pastas:
      - form:
      Contém os arquivos `form.css` e `Form.jsx` .
        - `form.css`
          Arquivos responsável pela estilização css do componente React `Form.jsx` .
        - `Form.jsx`
          Arquivo com o código para gerar o campo onde será digitado o nome de usuário para busca com a api rest do github. Neste arquivo será feita a entrada e a validação dos dados, encaminhando para a página de resultados caso a requisição seja feita com sucesso.
      
    </br>

      - githubLogo:
      contém os arquivos `githubLogo.css` e `GithubLogo.jsx`
        - `githubLogo.css`
        Arquivos responsável pela estilização css do componente React `GithubLogo.jsx` .
        - `GithubLogo.jsx`
          Retorna o logo do github no formato svg.
          </br>

      - header:
      contém os arquivos `header.css` e `Header.jsx`
        - `header.css`
        Arquivos responsável pela estilização css do componente React `Header.jsx` .
        - `Header.jsx`
          Retorna o cabeçalho que será exibido na página de resultados. Apresenta a imagem de perfil do usuário e a quantidade de repositórios públicos.
          </br>

      - profileColumn:
      contém os arquivos `profileColumn.css` e `ProfileColumn.jsx`
        - `profileColumn.css`
        Arquivos responsável pela estilização css do componente React `ProfileColumn.jsx` .
        - `ProfileColumn.jsx`
          Retorna a primeira coluna da página de resultados. Nela encontramos as informações básicas de usuário como foto, seguidores e quem está seguindo e, quando disponível, twitter e email.
          </br>

      - repositoriesColumn:
      contém os arquivos `repositoriesColumn.css` e `RepositoriesColumn.jsx`
        - `repositoriesColumn.css`
        Arquivos responsável pela estilização css do componente React `RepositoriesColumn.jsx` .
        - `RepositoriesColumn.jsx`
          Retorna a segunda coluna da página de resultados. Nela será apresentado o resultado que foi retornado pela api ao buscar os repositórios do usuário.
          </br>

      - svg:
      Contém as pastas com os arquivos que retornar componentes React com imagens svg renderizadas.
      <br/>

 - Pasta `context`
  Contém os arquivos `Context.js` e `Provider.js`
    - `Context.js`
    Exporta a constante Context a partir da importação de createContext do React.
    - `Provider.js`
    Centraliza a maioria dos estados que podem ser compartilhados por diferentes componentes do aplicativo React.
    </br>

- Pasta `images`
  Contém imagens em diferntes formatos que podem ser consumidas pela aplicação.
  </br>

- Pasta `pages`
  Contém as pastas `pageResult` e `searchPage`
    - pageResult:
      contém os arquivos `pageResult.css` e `PageResult.jsx`
        - `pageResult.css`
        Arquivos responsável pela estilização css do componente React `PageResult.jsx` .
        - `PageResult.jsx`
          Arquivo responsável por centralizar a renderização dos componentes `<Header />` , `<ProfileColumn />` e `<RepositoriesColumn />`
          </br>

      - searchPage:
      contém os arquivos `searchPage.css` e `SearchPage.jsx`
        - `searchPage.css`
        Arquivos responsável pela estilização css do componente React `SearchPage.jsx` .
        - `SearchPage.jsx`
          Arquivo responsável por centralizar a renderização dos componentes `<GithubLogo />` e `<Form />`
          </br>
      
- Pasta `services`
  Contém os arquivos responsáveis por requisições na api do github.
  </br>

- Pasta `tests`
  Contém os arquivos de teste da aplicação.
  </br>

- E os arquivos `docker-compose.yml` e `Dockerfile`:
  Resposáveis pela criação de containers para rodar a aplicação via docker.

