import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [userName, setUserName] = useState('');
  const [name, setName] = useState('');
  const [userProfile, setUserProfile] = useState('');
  const [starredRepositories, setStarredRepositories] = useState('');
  const [repositories, setRepositories] = useState('');

  const contextValue = useMemo(
    () => ({
      userName,
      setUserName,
      name,
      setName,
      userProfile,
      setUserProfile,
      starredRepositories,
      setStarredRepositories,
      repositories,
      setRepositories,
    }),
    [userName, name, userProfile, starredRepositories, repositories],
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;
