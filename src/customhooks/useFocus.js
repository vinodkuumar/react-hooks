import React,{useState, useEffect} from 'react';

export const useFocus = (ref,initialState = false) => {
    const [state,setState] = useState(initialState);
    const onFocus = () => setState(true)
    const onBlur = () => setState(false)
    useEffect(() => {
      ref.current.addEventListener('focus', onFocus);
      ref.current.addEventListener('blur', onBlur);
      return () => {
        ref.current.removeEventListener('focus',onFocus);
        ref.current.removeEventListener('blur', onBlur);
      }
    },[])
    return state;
  }

