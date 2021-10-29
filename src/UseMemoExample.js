import React, {useState, useMemo, useEffect} from 'react';

const UseMemoExample = () => {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);
    const doubleNumber = useMemo(() => {
        return slowFunction(number)
    },[number])
    const themeStyles = useMemo(() =>  {
        return {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
        }
    }, [dark])
    useEffect(() => {
        console.log('theme changed')
    }, [themeStyles])
    return(
        <>
        <div>
            <h1>Use Memo Example</h1>
        </div>
        <input 
            type="number"
            value={number}
            onChange={e => setNumber(parseInt(e.target.value))}/>
        <button
            onClick={() => setDark(prevDark => !prevDark)}>change theme</button>
        <div style={themeStyles}>{doubleNumber}</div>
        </>
    )
}

function slowFunction(num) {
    for(let i = 0; i <= 10000000; i++) {}
    return num * 2
}

export default UseMemoExample;