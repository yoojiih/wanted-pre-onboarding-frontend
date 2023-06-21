import React from "react";
import { useNavigate } from 'react-router-dom';
/**
 * Not Found 페이지 view
 *
 * @return Element 랜더링 뷰
 */
function NotFound() {
    const navigate = useNavigate();
    return (
        <div className="page">
            <h3>
                <b>404 NOT FOUND</b>
            </h3>
            <button type="button" onClick={()=>{ navigate(-1) }} >
                뒤로가기
            </button>
        </div>
    );
}

export default NotFound;
