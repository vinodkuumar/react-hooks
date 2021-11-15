import {useEffect} from 'react';

export const useDocumentTitle = (count) => {
    useEffect(() => {
        document.title = `count ${count}`
    },[count])
}
