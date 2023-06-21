import React , { useState }from "react";
import { useNavigate } from 'react-router-dom';
import Email from "../components/Email";
import Password from "../components/Password";
import HttpUtil from "../../util/HttpUtil";
import WithUserAuth from "../../hoc/WithUserAuth";

const EMAIL_REGEXP = /^\S+@\S+$/;
/**
 * 로그인 view
 *
 * @return Element 랜더링 뷰
 */
function SignIn() {
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
        const response = await HttpUtil.call("POST_SIGNIN",{
            email: email,
            password: password,
        });

        if (response.access_token){
            localStorage.setItem("access_token", response.access_token);
            navigate('/todo');
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
                <b>로그인 페이지</b>
            </h3>
            <form onSubmit={handleSubmit}>
                <Email name="email" defaultValue={email} required onChange={handleChnageInputEmail}/>
                <Password name="email" defaultValue={password} required onChange={handleChnageInputPassWord}/>
                <button type="submit" data-testid="signin-button" disabled={!validEmail || !validPassword}>
                    로그인
                </button>
            </form>
        </div>
    );
}

export default WithUserAuth(SignIn, null);