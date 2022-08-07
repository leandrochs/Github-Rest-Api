import React, { useContext } from 'react';
import Header from '../../components/header/Header';
import ProfileColumn from '../../components/profileColumn/ProfileColumn';
import RepositoriesColumn from '../../components/repositoriesColumn/RepositoriesColumn';
import Context from '../../context/Context';
import './pageResult.css';

export default function PageResult() {
  // const { selectColumn, setSelectColumn } = useContext(Context);

  return (
    <div className='pageResult-container'>
      <Header name={'Leandro Atlas'} />
      <main className='pageResult-main'>
        <div className='pageResult-profileColumn-container'>
          <ProfileColumn />
        </div>
        {/* <section> */}
          <RepositoriesColumn />
        {/* </section> */}
      </main>
    </div>
  );
}
