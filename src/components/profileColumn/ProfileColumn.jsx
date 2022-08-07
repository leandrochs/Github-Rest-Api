import React, { useContext, useEffect, useState } from 'react';
import Context from '../../context/Context';
import { githubUser as userProfile } from '../../tests/Mocks/githubUser';
import { starredResponse as starredRepositories } from '../../tests/Mocks/starredResponse';

import './profileColumn.css';
import getApiStarredRepositories from '../../services/getApiStarredRepositories';
import FollowersIcon from '../svg/followersIcon/FollowersIcon';
import StarredIcon from '../svg/starredIcon/StarredIcon';
import EmailIcon from '../svg/EmailIcon/EmailIcon';

export default function ProfileColumn() {
  // const { userProfile, setUserProfile } = useContext(Context);
  // const { starredRepositories, setStarredRepositories } = useContext(Context);
  const { setUserProfile } = useContext(Context);
  const { selectColumn, setSelectColumn } = useContext(Context);
  const [followersIconIsHover, setFollowersIconIsHover] = useState(false);
  const [starredIconIsHover, setStarredIconIsHover] = useState(false);
  const [isFollow, setIsFollow] = useState(false);

  function followOnClick() {
    isFollow ? setIsFollow(false) : setIsFollow(true);
  }

  function starredOnClick() {
    console.log('starred');
  }

  // async function getApi(params) {
  //   const response = await getApiStarredRepositories(userProfile.login);
  //   setStarredRepositories(response);
  // }

  useEffect(() => {
    console.log(followersIconIsHover);
  }, [followersIconIsHover]);

  function followersOnClick() {}
  function followingOnClick() {}

  return (
    <div className='profileColumn-container'>
      <div className='profileColumn-imageProfile-container'>
        <img
          className='profileColumn-imageProfile'
          src={userProfile.avatar_url}
          alt='Foto de usuário'
        />
      </div>
      <h1 className='profileColumn-names-container'>
        <span className='profileColumn-name'>{userProfile.name}</span>
        <span className='profileColumn-userName'>{userProfile.login}</span>
      </h1>

      <div>
        <button
          className='profileColumn-followButton'
          type='button'
          onClick={followOnClick}
        >
          {isFollow ? 'Unfollow' : 'Follow'}
        </button>
      </div>

      <div className='profileColumn-twitterUser'>
        {userProfile.twitter_username && `@${userProfile.twitter_username}`}
      </div>

      <div className='profileColumn-social-container'>
        <button
          className='profileColumn-followersButton button-transparent'
          type='button'
          onClick={followersOnClick}
          onMouseEnter={() => setFollowersIconIsHover(true)}
          onMouseLeave={() => setFollowersIconIsHover(false)}
        >
          <FollowersIcon isHover={followersIconIsHover} />

          <span className='number-followers'>{userProfile.followers}</span>
          <p className='text-followers'>followers</p>
        </button>
        <span className='dot'> · </span>
        <div className='followingButton-container'>
          <button
            className='profileColumn-followingButton button-transparent'
            type='button'
            onClick={followingOnClick}
          >
            <span className='number-following'>{userProfile.following}</span>
            <p className='text-following'>following</p>
          </button>
        </div>

        <span className='dot'> · </span>

        <div className='starredButton-container'>
          <button
            className='profileColumn-starredButton button-transparent'
            type='button'
            onClick={starredOnClick}
            onMouseEnter={() => setStarredIconIsHover(true)}
            onMouseLeave={() => setStarredIconIsHover(false)}
          >
            <StarredIcon isHover={starredIconIsHover} />
            {starredRepositories?.length}
          </button>
        </div>
      </div>
      <div className='profileColumn-Email-container'>
        <EmailIcon />
        {userProfile.email && `${userProfile.email}`}
      </div>
    </div>
  );
}
