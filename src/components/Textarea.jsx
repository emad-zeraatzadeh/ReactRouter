import React from 'react';

export const Textarea = ({placeholder, onChange, value}) => {

    return (
        <textarea value={value} placeholder={placeholder} onChange={onChange} className="form__input"></textarea>
    );
};

