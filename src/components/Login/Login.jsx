import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.init';
const Login = () => {
    const [user, setUser] = useState(null);

    const auth = getAuth(app);
    const googleProvider =  new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = ()=>{
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const logedUser = result.user;
            setUser(logedUser);
            console.log(logedUser)
        })
        .catch(error => {
            console.log(error)
        })
    }
    const handleGithubSignIn = ()=>{
        signInWithPopup(auth, githubProvider)
        .then(result => {
            const logedUser = result.user;
            setUser(logedUser);
            console.log(logedUser)
        })
        .catch(error => {
            console.log(error)
        })
    }
    const handleGoogleSignOut = ()=>{
        signOut(auth)
        .then(result =>{
            console.log(result)
            setUser(null)
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div>
            {/* user? logut: login */}
            {
                !user? <>
                <button onClick={handleGoogleSignIn}>Google Login</button> <button onClick={handleGithubSignIn}>Github Login</button>
                </>
                : <button onClick={handleGoogleSignOut}>Google Logout</button>
            }

            {/* <div>
                <h3>Name: {user?.displayName}</h3>
            </div> */}
        {
            user && <div>
                <img src={user.photoURL} alt="" />
                <h3>Name: {user?.displayName}</h3>
                <h4>Email: {user.email}</h4>
                <h4>Account Created: {user.metadata.creationTime}</h4>
                <h4>Last Signed In: {user.metadata.lastSignInTime}</h4>
            </div>
        }
        </div>
    );
};

export default Login;