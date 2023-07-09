import React, {useState} from 'react';
import {Input} from "./Input.jsx";
import {Textarea} from "./Textarea.jsx";

export const Form = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [text, setText] = useState();

    const submitHandler = (e) => {
        e.preventDefault();
        setName("");
        setEmail("");
    }

    const nameHandler = (e) => {
        setName(e.target.value);
    }

    const emailHandler = (e) => {
        setEmail(e.target.value);
    }

    const textHandler = (e) => {
        setText(e.target.value);
    }


    return (
        <div>
            <form onSubmit={submitHandler} className="elements__form">
                <Input
                    value={name}
                    placeholder="Your name"
                    onChange={nameHandler}
                />
                <Input
                    value={email}
                    placeholder="Your email"
                    onChange={emailHandler}
                />
                <Textarea
                    value={text}
                    placeholder="Your message"
                    onChange={textHandler}
                />
                <button className="form__btn" type="submit">Send</button>
            </form>
        </div>
    );
};