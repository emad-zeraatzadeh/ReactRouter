import React from 'react';

export const Input = ({value, placeholder, onChange}) => {


    return (
        <div>
            <input
                className="form__input"
                onChange={onChange}
                value={value}
                placeholder={placeholder}
                type="text"/>
        </div>
    );
};
