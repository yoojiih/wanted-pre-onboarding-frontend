import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export default function WithTodoAuth (Component) {
    function AuthenticationCheck(props) {
        const navigate = useNavigate();
        const token = localStorage.getItem('access_token');
        useEffect(() => {
            if (token === null) {
                navigate('/signin');
            }
            else{
                axios.create({
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
            }
        }, []);
        return <Component {...props} />;
    }
    return AuthenticationCheck;
}