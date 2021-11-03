import React, { useState, useEffect, useRef } from 'react';

const UseRefExample = () => {
    const [name, setName] = useState('');
    const inputRef = useRef(null);
    const previousName = useRef(null);
    const focusInput = () => {
        inputRef.current.focus()
    }
    useEffect(() => {
        previousName.current = name
    }, [name])
    // const isEmpty = () => {
    //     const a = 1;
    //     if(!a){
    //         console.log('true')
    //     }else{
    //         console.log('false')
    //     }
    // }
    return (
        <>
            <div>
                <h1>UseRefExample</h1>
                <input
                    ref={inputRef}
                    value={name}
                    placeholder="enter your name"
                    onChange={(text) => setName(text.target.value)} />
                <div>Your name is {name}</div>
                <button onClick={focusInput}>Focus input</button>
            </div>
            <p>Persisted data example</p>
            <div>your previous name is:- {previousName.current}</div>
        </>
    )
}

export default UseRefExample;