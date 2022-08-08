import React, { useContext, useEffect } from 'react';
import Context from '../../context/Context';
import getApiRepositories from '../../services/getApiRepositories';
import { githubUser as userProfile } from '../../tests/Mocks/githubUser';
import { repositoriesResponse as repositories } from '../../tests/Mocks/repositoriesResponse';
import ForkdIcon from '../svg/forkdIcon/ForkdIcon';
import './repositoriesColumn.css';

export default function RepositoriesColumn() {
  // const { userProfile, setUserProfile } = useContext(Context);
  const { setUserProfile } = useContext(Context);
  // const { repositories, setRepositories } = useContext(Context);
  const { setRepositories } = useContext(Context);

  // async function getApi() {
  //   const response = await getApiRepositories(userProfile.login);

  //   setRepositories(response);
  // }

  // useEffect(() => {
  //   getApi();
  // }, []);

  return (
    <div className='repositoriesColumn-container'>
      {repositories &&
        repositories.map(
          ({ name, html_url, description, language, forks, license }) => (
            <div key={name} className='repository-summary-container'>
              <div className='repositoriesColumn-github-Link-container'>
                <a
                  className='repositoriesColumn-github-Link'
                  href={html_url}
                  target='_blank'
                  rel='noreferrer'
                >
                  {name}
                </a>
              </div>
              <div className='repositoriesColumn-description'>
                {description}
              </div>
              <div className='repositoriesColumn-language-fork-licence'>
                <span className='repositoriesColumn-language-color'></span>

                {language && (
                  <div className='repositoriesColumn-language'>{language}</div>
                )}

                {forks === 0 ? (
                  <div className='repositoriesColumn-fork'>
                    <ForkdIcon />
                    {forks}
                  </div>
                ) : null}

                {license && (
                  <div className='repositoriesColumn-licence'>
                    {license?.name}
                  </div>
                )}
              </div>
            </div>
          ),
        )}
    </div>
  );
}
