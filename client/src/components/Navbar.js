import React, {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'

import { useNavigate } from "react-router-dom";

import { useDispatch } from 'react-redux';



import * as actionType from '../constants/actionTypes.js';



function Navbar() {

    const [user,setUser]=useState(JSON.parse(localStorage.getItem('profile')));


    const navigate = useNavigate();
    
    const dispatch = useDispatch();

    const logout = () => {
        dispatch({ type: actionType.LOGOUT });
    
        navigate('/signin');
    
        setUser(null);
    };
    
  return (
    <div>
        <nav id='h-navbar' className="navbar navbar-expand-lg navbar-dark bg-danger p-3 mx-3 mb-1">
            <div className="container-fluid">
                <img className='Npuzzlegif' src='/img/puzzlegif.gif' alt='gif'></img> 
                <a className="navbar-brand" href="/home"><h3>PUZZLE OYUNU</h3></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor03">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                    <a className="nav-link active" href="/home">
                        Nasıl Oynanır ?
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/home">En Iyi Oyuncular</a>
                    </li>
                </ul>
                <span className="navbar-text">
                <ul>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle navbar-name " data-bs-toggle="dropdown" href="/home" role="button" aria-haspopup="true" aria-expanded="false">
                            {user?.result ? (
                                <span className='navbar-name'>{user?.result.firstName} {user?.result.lastName}</span>
                            ) : (
                                <Link className="dropdown-item text-black dhover" to="/signin" > Giris Yap </Link>
                            )}
                        </a>
                        <div className="dropdown-menu onOff ">
                            <a className="dropdown-item text-black dhove onOffr" href="/home">Profil Bilgilerim</a>
                            <a className="dropdown-item text-black dhover onOff" href="/home">Oynama Geçmişim</a>
                            <div className="dropdown-divider text-black dhover onOff"></div>
                            <a className="dropdown-item text-black dhover onOff" href="/signin" onClick={logout} >Cikis</a>
                        </div>
                    </li>
                </ul>

                </span>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar