import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../context/Context';
import './header.css';

import { githubUser as userProfile } from '../../tests/Mocks/githubUser';

export default function Header(props) {
  const [showImageProfile, setShowImageProfile] = useState('hide-image-profile');
  // const { userProfile } = useContext(Context);

  useEffect(() => {
    const scrollListener = () => {
      window.scrollY > 340
        ? setShowImageProfile('show-image-profile')
        : setShowImageProfile('hide-image-profile');
    };
    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <header className='header-container'>
      <div className={showImageProfile}>
        <img src={userProfile?.avatar_url} height='40' alt="Imagem de Perfil" />
      </div>
      <div className='header-repositories-container'>
        <p>Repositories</p>
        <div className='header-repositories-number'>
          {userProfile?.public_repos}
        </div>
      </div>
    </header>
  );
}
