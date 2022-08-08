import React, { useContext, useEffect, useState } from 'react';
import Context from '../../context/Context';
import FollowersIcon from '../svg/followersIcon/FollowersIcon';
import StarredIcon from '../svg/starredIcon/StarredIcon';
import EmailIcon from '../svg/EmailIcon/EmailIcon';
import getApiStarredRepositories from '../../services/getApiStarredRepositories';
import './profileColumn.css';

export default function ProfileColumn() {
  const { userProfile } = useContext(Context);
  const { starredRepositories, setStarredRepositories } = useContext(Context);
  const [followersIconIsHover, setFollowersIconIsHover] = useState(false);
  const [starredIconIsHover, setStarredIconIsHover] = useState(false);
  const [isFollow, setIsFollow] = useState(false);

  function followOnClick() {
    isFollow ? setIsFollow(false) : setIsFollow(true);
  }

  async function getApi(params) {
    const response = await getApiStarredRepositories(userProfile.login);
    setStarredRepositories(response);
  }

  useEffect(() => {
    getApi();
  }, []);

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
          onMouseEnter={() => setFollowersIconIsHover(true)}
          onMouseLeave={() => setFollowersIconIsHover(false)}
        >
          <FollowersIcon isHover={followersIconIsHover} />

          <span className='number-followers'>{userProfile.followers}</span>
          <p className='text-followers' data-testid='name-followers-text'>
            followers
          </p>
        </button>
        <span className='dot'> · </span>
        <div className='followingButton-container'>
          <button
            className='profileColumn-followingButton button-transparent'
            type='button'
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
            onMouseEnter={() => setStarredIconIsHover(true)}
            onMouseLeave={() => setStarredIconIsHover(false)}
          >
            <StarredIcon isHover={starredIconIsHover} />
            {starredRepositories?.length}
          </button>
        </div>
      </div>
      <div className='profileColumn-Email-container'>
        {userProfile.email && <EmailIcon />}
        {userProfile.email && userProfile.email}
      </div>
    </div>
  );
}
