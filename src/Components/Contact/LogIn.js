import Button from '@restart/ui/esm/Button';
import React from 'react';
import useFirebase from '../Hooks/FirebaseHook';
import './LogIn.css';
const LogIn = () => {
    const { signInUsingGoogle } = useFirebase();
    const { signInUsingGitHub } = useFirebase();
    return (
        <div className="row row-cols-2 g-4">
            {/* Google Sign In Button */}
            <div className="google-signIn py-4">
                <h3 className="">Please Sign In With Your Google Account</h3>
                <Button onClick={signInUsingGoogle} className="btn btn-success my-2" type="submit">
                    Google Sign In
                </Button>
            </div>
            {/* Git Hub Sign In Button */}
            <div className="google-signIn py-4">
                <h3 className="">Please Sign In With Your GitHub Account</h3>
                <Button onClick={signInUsingGitHub} className="btn btn-success my-2" type="submit">
                    GitHub Sign In
                </Button>
            </div>
        </div>
    );
};

export default LogIn;