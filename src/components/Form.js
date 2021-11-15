import React,{useState} from 'react';
import { useInput } from '../customhooks/useInput';

const Form = () => {
    const [firstName, bindFirstName, resetFirstName] = useInput('');
    const [lastName, bindLastName, resetLastName] = useInput('');
    const submitHandler = (e) => {
        e.preventDefault();
        alert(`hello ${firstName} ${lastName}`)
        resetFirstName();
        resetLastName();
    }
    return(
        <div>
            <h2>useInput</h2>
            <form onSubmit={submitHandler}>
            <input 
                type="text"
                {...bindFirstName}
                />
            <input 
                type="text"
                {...bindLastName}
                />
            <button>submit</button>
            </form>
        </div>
    )
}

export default Form;