import React,{useState, useDebugValue, useEffect} from 'react';

const useDelayedMessage = (msg, delay) => {
    const [message, setMessage] = useState("");
    useEffect(() => {
      setTimeout(() => {
        setMessage(msg);
      }, delay);
    });
    useDebugValue(message ? "Message Set" : "Message not set");
    return message;
  };

const UseDebugValueExample = () => {
    const delayedMessage = useDelayedMessage("hi",2000)
    return(
        <>
        <div>
            <h1>UseDebugValueExample</h1>
        </div>
        <div>
            {delayedMessage}
        </div>
        </>
    )
}

export default UseDebugValueExample;