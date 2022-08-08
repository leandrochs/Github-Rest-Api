import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [userName, setUserName] = useState('');
  const [name, setName] = useState('');
  const [userProfile, setUserProfile] = useState('');
  const [selectColumn, setSelectColumn] = useState('');
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
      selectColumn,
      setSelectColumn,
      starredRepositories,
      setStarredRepositories,
      repositories,
      setRepositories,
    }),
    [
      userName,
      name,
      userProfile,
      selectColumn,
      starredRepositories,
      repositories,
    ],
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;
