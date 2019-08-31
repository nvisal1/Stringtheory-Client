import React, { ChangeEvent, FocusEvent } from 'react';
import './input.css';
import { EventOrValueHandler } from 'redux-form';

interface InputProps {
    placeholder: string;
    value?: string;
    onChange?: EventOrValueHandler<ChangeEvent<any>>;
    onFocus?: EventOrValueHandler<FocusEvent<any>>;
}

const Input: React.FC<InputProps> = props => {
    return (
        <div className='input'>
            <input 
                className='input__element'
                type='text'
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                onFocus={props.onFocus}
            />
        </div>
    );
}

export default Input;