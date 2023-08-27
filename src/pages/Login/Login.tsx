import React, { useEffect, useState } from 'react'
import './Login.css'
import { useSetBodyColor } from '../../hooks/useSetBodyColor'
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Register from '../Register/Register';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { StorageKeys } from '../../helpers/StorageKeys';

const Login = () => {

  const { setBodyColor } = useSetBodyColor()

  const navigate = useNavigate();

  useEffect(() => {
    setBodyColor("#ECEFF1")
    // setBodyColor("#F8F8F8F8")
  }, [])

  const { setItem, getItem } = useLocalStorage();

  const handlerSubmit = (event: any) => {
    event.preventDefault();
    setItem(StorageKeys.ACCESS_TOKEN, 'access-token')
    const token = getItem(StorageKeys.ACCESS_TOKEN)
    console.log(token)
    navigate('/home');
    window.location.reload()
  }

  return (
    <>
      <div className="container col-11 col-sm-9" id='form-container'>
        <div className="row align-items-center gx-5">
          <div className="col-md-6 order-md-2">
            <h2>Welcome, make login please</h2>
            <form onSubmit={handlerSubmit}>
              <div className='form-floating mb-3'>
                <input type="email" className='form-control' id='email' name='email' value={'guest@guest.com'} placeholder='Digite seu email' />
                <label htmlFor="label" className='form-label'>Email</label>
              </div>
              <div className='form-floating mb-3'>
                <input type="password" className='form-control' id='password' name='password' value={'Guest'} placeholder='Digite a sua senha' />
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