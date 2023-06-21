import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Email from "../components/Email";
import Password from "../components/Password";
import HttpUtil from "../../util/HttpUtil";

const EMAIL_REGEXP = /^\S+@\S+\.\S+$/;

/**
 * 메인페이지 view
 *
 * @return Element 랜더링 뷰
 */
export default function SignUp() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [validPassword, setValidPassword] = useState(false);

    const validateEmail = (value) => {
        return EMAIL_REGEXP.test(value);
    };
    const validatePassword = (value) => {
        return value.length >= 8;
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!validEmail || !validPassword) {
            alert('이메일 혹은 비밀번호를 올바르게 입력해주세요');
            return;
        }
        const response = await HttpUtil.call("POST_SIGNUP",{
            email: email,
            password: password,
        });
        console.log("response", response);
        if (response.status === 200){
            navigate('/signin');
        }
        if (!response) return;
    }
    

    const handleChnageInputEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
        setValidEmail(validateEmail(e.target.value));
    };

    const handleChnageInputPassWord = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
        setValidPassword(validatePassword(e.target.value));
    };

    return (
        <div className="page">
            <h3>
                <b>SignUp</b>
            </h3>
            <form onSubmit={handleSubmit}>
                <Email name="email" defaultValue={email} required onChange={handleChnageInputEmail}/>
                <Password name="email" defaultValue={password} required onChange={handleChnageInputPassWord}/>
                <button type="submit" data-testid="signup-button" disabled={!validEmail || !validPassword}>
                    회원가입
                </button>
            </form>
        </div>
    );
}
