import React from "react";

export default function Password(props) {
    const { placeholder, onChange } = props;
    
    return (
        <div className="item">
            <input data-testid="password-input" name="password" type="password" required placeholder={placeholder} onChange={onChange} />
        </div>
    );
}
