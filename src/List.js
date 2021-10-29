import React, {useState,useEffect} from 'react';

const List = ({getItems}) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        setItems(getItems())
        console.log('items updated')
    },[getItems])
    return(
        items.map((item) => <div>{item}</div>)
    )
}

export default List;