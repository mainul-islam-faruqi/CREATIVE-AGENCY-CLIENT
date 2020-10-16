import React from 'react';
import './Login.css';
import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from '../../images/logos/logo.png';
import googleLogo from '../../images/logos/google-logo.png';
import { UserContext } from '../../App';

import * as firebase from 'firebase/app';
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { useContext } from 'react';

import jwt_decode from "jwt-decode";

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();

    const {from} = location.state || {from: {pathName: "/"}};

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(result => {
            const {displayName, email, photoURL} = result.user;
            console.log(result.user)
            const signedInUser = {name: displayName, email, picture: photoURL}
            setLoggedInUser(signedInUser);
            storeAuthToken();
        }).catch(function(error){
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        })
    }


    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(true)
        .then(function(idToken){
            sessionStorage.setItem('token', idToken);
            history.replace(from);
        }).catch(function(error){
            console.log(error)
        })
    }

    return (
        <div className="login">
            <Link to="/" className="logo mb-5"> <img  src={logo} alt="" /> </Link>

            <form className="login-form" action="">
                <h2 className="text-brand"> Login with </h2>

                <div onClick={handleGoogleSignIn} className="googleLogin">
                    <img className="googleLogo" src={googleLogo} alt="" />
                    <p > Continue with Google</p>
                </div>

                <div>
                    <p> Don't have an account? <Link to="/create-account" style={{ color: "#3F90FC" }}> Create an account </Link></p>
                </div>
            </form>
        </div>
    );
};

export default Login;