import {ChangeEvent, useState } from "react";

type InputProps = {
    placeholder: string;
}

export const Input = (props: InputProps) => {
    const [text, setText] = useState('');
    const inputHandler = (e: ChangeEvent<HTMLInputElement>)=> {
        setText(e.target.value);
    }

    return (
        <input type="text"
               value={text}
               placeholder={props.placeholder}
               onChange={inputHandler} />
    );
};
