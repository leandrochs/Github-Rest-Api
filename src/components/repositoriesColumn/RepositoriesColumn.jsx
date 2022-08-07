import React, { useContext, useEffect } from 'react';
import Context from '../../context/Context';
import { githubUser as userProfile } from '../../tests/Mocks/githubUser';
import './repositoriesColumn.css';

export default function RepositoriesColumn() {
  // const { userProfile, setUserProfile } = useContext(Context);
  const { setUserProfile } = useContext(Context);

  // useEffect(() => {
  //   setUserProfile(userProfile);
  // }, [setUserProfile]);

  // console.log(userProfile);

  return (

        <div className='repositoriesColumn-container'>
          repositories
        </div>
  );
}
