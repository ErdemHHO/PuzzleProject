import React, {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'

import {Button} from 'react-bootstrap'

import { useNavigate } from "react-router-dom";

import { useDispatch } from 'react-redux';



import * as actionType from '../constants/actionTypes.js';



function Navbar() {

    const [user,setUser]=useState(JSON.parse(localStorage.getItem('profile')));


    const navigate = useNavigate();
    
    const dispatch = useDispatch();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("profile"));
        if (!user) {
        navigate("/signin");
        } else {
        setUser(user);
        }
    }, []);

    const logout = () => {
        dispatch({ type: actionType.LOGOUT });
    
        navigate('/signin');
    
        setUser(null);
    };
    


    

  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-info p-3">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><h3>PUZZLE GAME</h3></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor03">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                    <a className="nav-link active" href="#">Home
                        <span className="visually-hidden">(current)</span>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Pricing</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Separated link</a>
                    </div>
                    </li>
                </ul>
                <span className="navbar-text">
                <ul>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                            {user?.result ? (
                                <span>{user?.result.firstName} {user?.result.lastName}</span>
                            ) : (
                                <Link className="dropdown-item text-black dhover" to="/signin" > Giris Yap </Link>
                            )}
                        </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item text-black dhover" href="#">Action</a>
                            <a className="dropdown-item text-black dhover" href="#">Another action</a>
                            <a className="dropdown-item text-black dhover" href="#">Something else here</a>
                            <div className="dropdown-divider text-black dhover"></div>
                            <a className="dropdown-item text-black dhover" onClick={logout} >Cikis</a>
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