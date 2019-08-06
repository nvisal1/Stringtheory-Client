import React from 'react';
import './input.css';

interface InputProps {
    placeholder: string;
}

const Input: React.FC<InputProps> = props => {
    return (
        <div className='input'>
            <input 
                className='input__element'
                type='text'
                placeholder={props.placeholder}
            />
        </div>
    );
}

export default Input;