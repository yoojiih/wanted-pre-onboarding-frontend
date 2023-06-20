import React from "react";

export default function Email(props) {
    const { placeholder, onChange } = props;

    return (
        <div className="item">
            <input data-testid="email-input" name="email" type="email" required placeholder={placeholder} onChange={onChange} />
        </div>
    );
}
