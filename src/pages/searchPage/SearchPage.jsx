import React, { useContext } from 'react';
import Form from '../../components/form/Form';
import GithubLogo from '../../components/githubLogo/GithubLogo';
import './searchPage.css';

export default function SearchPage() {
  return (
    <main className='searchPage-main'>
      <GithubLogo />
      <Form />
    </main>
  );
}
