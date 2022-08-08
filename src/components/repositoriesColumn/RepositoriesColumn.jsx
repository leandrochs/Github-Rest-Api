import React, { useContext, useEffect } from 'react';
import Header from '../header/Header';
import ForkdIcon from '../svg/forkdIcon/ForkdIcon';
import Context from '../../context/Context';
import getApiRepositories from '../../services/getApiRepositories';
import './repositoriesColumn.css';

export default function RepositoriesColumn() {
  const { userProfile } = useContext(Context);
  const { repositories, setRepositories } = useContext(Context);

  async function getApi() {
    const response = await getApiRepositories(userProfile.login);

    setRepositories(response);
  }

  useEffect(() => {
    getApi();
  }, [userProfile]);

  return (
    <div className='repositoriesColumn-container'>
      <div className='repositoriesColumn-repositoriesCount'>
        <Header />
      </div>
      {repositories &&
        repositories.map(
          ({
            name,
            html_url,
            description,
            language,
            forks,
            license,
            updated_at,
          }) => {
            const dataSplit = updated_at.split('T');

            return (
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
                    <div className='repositoriesColumn-language'>
                      {language}
                    </div>
                  )}

                  {forks >= 1 ? (
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

                  {updated_at && (
                    <div className='repositoriesColumn-licence'>
                      Updated at {dataSplit[0]}
                    </div>
                  )}
                </div>
              </div>
            );
          },
        )}
    </div>
  );
}
