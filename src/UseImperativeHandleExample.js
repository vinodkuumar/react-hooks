import React,{useEffect, useRef, forwardRef, useImperativeHandle} from 'react';

const Input = forwardRef((props, parentRef) => {
    const childRef = useRef();
    const someMethod = () => 1;
    useImperativeHandle(parentRef, () => {
        return {
            focusAndBlur: () => {
                childRef.current.focus();
                setTimeout(() => {
                    childRef.current.blur();
                },3000)
            }
        }
    })
    return(
        <input ref={childRef}/>
    )
    })

//     useImperativeHandle(parentRef, () => ({
//         focusOnChildInput: () => childRef.current.focus(),
//         callChildMethod: someMethod,
//     }))
//     return <input ref={childRef} />
// })

    


const UseImperativeHandleExample = () => {
    const ref = useRef();
    useEffect(() => {
        if(ref){
            // ref.current?.callChildMethod?.(); // 1
            // ref.current?.focusOnChildInput?.() // it will focus input
            ref.current.focusAndBlur();
        }
    },[])
    return(
        <>
        <div>
            <h1>UseImperativeHandleExample</h1>
        </div>
        <form>
            <Input 
                ref={ref}
                />
        </form>
        </>
    )
}

export default UseImperativeHandleExample;