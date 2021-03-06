import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from 'firebase/auth';
import "./InputForm.css";

const InputForm = () => {

    const [email, setEmail] = useState(' ');
    const [password, setPassword] = useState(' ');
    const [error, setError] = useState(' ');
    const [isLogIn, setIsLogIn] = useState(false);
    const [name, setName] = useState('');


    const auth = getAuth();

    const handleEmailChange = e => {

        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }


    const handleReistration = e => {
        e.preventDefault();

        if (password.length < 6) {
            setError("Password must be contain at least 6 charector")
            return;
        }
        if (!/((?=.*[A-Z].*[A-Z]))/.test(password)) {
            setError("Ensure your password has two uppercase letters.");
            return;
        }

        isLogIn ? processLOgIn(email, password) : createNewUser(email, password);
        /* 
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            });
            
        */
        console.log(email, password);

    }
    const handleUserName = e => {
        setName(e.target.value);
    }

    const processLOgIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            });

    }
    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                setUserName();
                emailVerification();
            })
            .catch(error => {
                setError(error.message);
            });
    }
    const emailVerification = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log('Varify Email');
            })
    }
    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                // ..
            })
    }
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => {

            })
    }

    const toggleLogIn = e => {
        setIsLogIn(e.target.value);
    }
    return (
        <div className="email-container">
            <div className="form mx-auto w-75 p-4">
                <h3 className="fw-bold mx-auto text-white text-4xl mb-4">Please {isLogIn ? 'Log In' : 'Register Now'} </h3>
                <form onSubmit={handleReistration}>
                    {!isLogIn &&
                        <div className="row mb-3">
                            <label htmlFor="inputName" className="col-sm-2 col-form-label text-white">Name</label>
                            <div className="col-sm-10">
                                <input type="text" onBlur={handleUserName} className="form-control" id="name" placeholder="Your Name" />
                            </div>
                        </div>
                    }

                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label text-white">Email</label>
                        <div className="col-sm-10">
                            <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label text-white">Password</label>
                        <div className="col-sm-10">
                            <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" required />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-sm-10 offset-sm-2">
                            <div className="form-check  text-start">
                                <input onChange={toggleLogIn} className="form-check-input" type="checkbox" id="gridCheck1" />
                                <label className="form-check-label fw-bold" htmlFor="gridCheck1">
                                    Already Registered?
                                </label>
                            </div>

                        </div>
                    </div>
                    <div className="row mb-3 text-danger">
                        <h5>{error}</h5>
                    </div>
                    <button type="submit" className="btn btn-success">{isLogIn ? 'Log In' : 'Register Now'}</button>
                    <br />
                    <button onClick={handleResetPassword} type="button" className="my-2 btn btn-warning btn-sm">Reset Password</button>
                </form>
            </div>
        </div>
    );
};

export default InputForm;