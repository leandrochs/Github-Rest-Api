import React, { useContext } from 'react';
// import { Redirect } from 'react-router-dom';
import Form from '../../components/form/Form';
import GithubLogo from '../../components/githubLogo/GithubLogo';
// import Context from '../context/Context';
import './searchPage.css';

export default function SearchPage() {
  // const { userProfile } = useContext(Context);

  return (
    <main className='searchPage-main'>
      <GithubLogo />
      <Form />
      {/* {userProfile.length > 0 ? <Redirect to='/pageresult' /> : <React.Fragment /> } */}
    </main>
  );
}
