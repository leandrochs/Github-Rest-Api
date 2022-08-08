import React, { useContext } from 'react';
import Header from '../../components/header/Header';
import ProfileColumn from '../../components/profileColumn/ProfileColumn';
import RepositoriesColumn from '../../components/repositoriesColumn/RepositoriesColumn';
import './pageResult.css';

export default function PageResult() {
  return (
    <div className='pageResult-container'>
      <div className='pageResult-header-container'>
        <Header />
      </div>
      <main className='pageResult-main'>
        <section className='pageResult-profileColumn-container'>
          <ProfileColumn />
        </section>
        <section className='pageResult-repositoriesColumn-container'>
          <RepositoriesColumn />
        </section>
      </main>
    </div>
  );
}
