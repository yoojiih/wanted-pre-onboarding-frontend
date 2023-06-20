import React from "react";
import { useNavigate } from 'react-router-dom';
/**
 * 메인페이지 view
 *
 * @return Element 랜더링 뷰
 */
function NotFound() {
    const navigate = useNavigate();
    return (
        <div className="page">
            <h3>
                <b>HOME PAGE</b>
            </h3>
            <button type="submit" onClick={()=>{ navigate('/signin') }} >
                로그인
            </button>
            <button type="submit" onClick={()=>{ navigate('/signup') }} >
                회원가입
            </button>
        </div>
    );
}

export default NotFound;
