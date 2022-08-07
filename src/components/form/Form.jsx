import React, { useContext, useState } from 'react';
import Context from '../../context/Context';
import mGlass from '../../images/magnifying-glass.svg';
import getApiByUserName from '../../services/getApiByUserName';
import './form.css';
import { Redirect } from 'react-router-dom';

export default function Form() {
  const { userName, setUserName } = useContext(Context);
  const { setUserProfile } = useContext(Context);
  const [validReturn, setValidReturn] = useState(false);
  const [error, setError] = useState('');

  async function getApi(params) {
    const gitResult = await getApiByUserName(userName);
    if (gitResult.errorMessage) {
      setError(gitResult.errorMessage);
    } else {
      setUserProfile(gitResult);
      setValidReturn(true);
    }
  }

  function onClickButton(event) {
    event.preventDefault();
    getApi();
  }

  return (
    <div className='form-container'>
      <form className='form'>
        <label className='form-label-inputUserName'>
          Buscar Repositório no Github
          <input
            className='form-inputUserName'
            type='text'
            value={userName}
            placeholder='Digite o nome de usuário...'
            onChange={({ target }) => setUserName(target.value)}
          />
        </label>
        <button
          className='form-buttonSubmit'
          type='submit'
          onClick={onClickButton}
          disabled={userName.length === 0}
        >
          <span className='button-placeholder'>
            <img src={mGlass} alt='Lupa de busca' />
            <p>BUSCAR</p>
          </span>
        </button>
      </form>
      <div className='form-error-message'>{error}</div>
      {validReturn ? <Redirect push to='/pageresult' /> : null}
    </div>
  );
}
