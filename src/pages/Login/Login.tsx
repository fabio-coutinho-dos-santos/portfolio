import React, { useEffect, useState } from 'react'
import './Login.css'
import { useSetBodyColor } from '../../hooks/useSetBodyColor'
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Register from '../Register/Register';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { StorageKeys } from '../../helpers/StorageKeys';
import { useHttp } from '../../hooks/useHttp';
import { ApiUrls } from '../../Constants/ApiUrls';
import { UserLogin } from '../../Models/UserLogin';

const Login = () => {

  const { setBodyColor } = useSetBodyColor()

  const navigate = useNavigate();
  const { makeGet, makePost, inspectResponse } = useHttp()


  useEffect(() => {
    setBodyColor("#ECEFF1")
    // setBodyColor("#F8F8F8F8")
  }, [])

  const { setItem, getItem } = useLocalStorage();
  const [email, setEmail] = useState('guest@guest.com');
  const [password, setPassword] = useState('guest');

  const handlerSubmit = async (event: any) => {
    try {
      event.preventDefault();
      const userLogin = new UserLogin(email, password)
      const response = await makePost(ApiUrls.LOGIN, userLogin)
      const jsonResponse = await inspectResponse(response)
      await setItem(StorageKeys.ACCESS_TOKEN, jsonResponse.accessToken)
      window.location.reload();
    } catch (e) {
      alert(e)
    }

  }

  return (
    <>
      <div className="container col-11 col-sm-9" id='form-container'>
        <div className="row align-items-center gx-5">
          <div className="col-md-6 order-md-2">
            <h2>Welcome, make login please</h2>
            <form onSubmit={handlerSubmit}>
              <div className='form-floating mb-3'>
                <input type="email" onChange={(e) => setEmail(e.target.value)} className='form-control' value={email} id='email' name='email' placeholder='Digite seu email' />
                <label htmlFor="label" className='form-label'>Email</label>
              </div>
              <div className='form-floating mb-3'>
                <input type="password" onChange={(e) => setPassword(e.target.value)} className='form-control' value={password} id='password' name='password' placeholder='Digite a sua senha' />
                <label htmlFor="label" className='form-label'>Password</label>
              </div>
              <input type="submit" className='btn btn-primary' value={'Login'} />
            </form>
          </div>

          <div className="col-md-6 order-md-1">
            <div className="col-12">
              <img src="images/login-image.png" alt="Entrar no Sistema" className='img-fluid' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login