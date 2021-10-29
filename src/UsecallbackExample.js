import React,{useState, useCallback} from 'react';
import List from './List';

const UsecallbackExample = () => {
    const [number,setNumber] = useState(1);
    const [dark,setDark] = useState(false);
    const theme = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    }
    const getItems = useCallback(() => {
        return [number, number + 1, number + 2] 
    },[number])
    return(
        <>
        <div>
            <h1>UseCallback Example</h1>
        </div>
        <div style={theme}>
            <input 
                type="number"
                value={number}
                onChange={(e) => setNumber((e.target.value))} />
            <button
                onClick={() => setDark(prevDark => !prevDark)}>Change theme</button>
            <List getItems={getItems}/>
        </div>
        </>
    )
}

export default UsecallbackExample;