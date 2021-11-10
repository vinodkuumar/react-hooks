import React,{useLayoutEffect,useState, useEffect} from 'react';

const UseLayoutEffectExample = () => {
    const [value,setValue] = useState(0);
    useLayoutEffect(() => {
        if(value === 0){
            setValue(10 + Math.random() * 100)
        }
    },[value]) 
    return(
        <div>
            <h1>UseLayoutEffectExample</h1>
            <div onClick={() => setValue(0)}>value:- {value}</div>
        </div>
    )
}

export default UseLayoutEffectExample;