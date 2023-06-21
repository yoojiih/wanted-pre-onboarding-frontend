import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function WithUserAuth (Component) {
    function AuthenticationCheck(props) {
        const navigate = useNavigate();
        useEffect(() => {
            if (localStorage.getItem('access_token') !== null) {
                navigate('/todo');
            }
        }, []);
        return <Component {...props} />;
    }
    return AuthenticationCheck;
}