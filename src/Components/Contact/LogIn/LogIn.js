import Button from '@restart/ui/esm/Button';
import React from 'react';
import useFirebase from '../../Hooks/FirebaseHook';

import './LogIn.css';
// import useAuth from '../Hooks/UseAuth';


const LogIn = () => {
    const { signInUsingGoogle } = useFirebase();
    const { signInUsingGitHub } = useFirebase();
    /* const { signInUsingGoogle, signInUsingGitHub } = useAuth(); */
    return (
        <div className="row g-4 p-4">
            {/* Google Sign In Button */}
            <div className="col-md-6 google-signIn border rounded p-4">
                <div className="google-txt ">
                    <h3 className="">Please Sign In With Your Google Account</h3>
                    <Button onClick={signInUsingGoogle} className="btn btn-dark my-2" type="submit">
                        Google Sign In
                    </Button>
                </div>
            </div>
            {/* Git Hub Sign In Button */}
            <div className="col-md-6 git-signIn border rounded py-4">
                <div className="git-txt">
                    <h3 className="">Please Sign In With Your GitHub Account</h3>
                    <Button onClick={signInUsingGitHub} className="btn btn-dark my-2" type="submit">
                        GitHub Sign In
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default LogIn;