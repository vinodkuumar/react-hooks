import React,{useState} from 'react';
import useLocalStorage from './useLocalStorage';
import useUpdateLogger from './useUpdateLogger';

const CustomHookExample = () => {
    const [name,setName] = useLocalStorage('name', '');
    useUpdateLogger(name)
    return(
        <>
        <div>
            <h1>CustomHookExample</h1>
            <input 
                value={name}
                placeholder={"enter your name"}
                type="text"
                onChange={(e) => setName(e.target.value)}
                />
        </div>
        </>
    )
}

export default CustomHookExample;