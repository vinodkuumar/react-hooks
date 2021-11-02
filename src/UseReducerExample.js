// import React,{useReducer} from 'react';

// const ACTIONS = {
//     INCREMENT: 'increment',
//     DECREMENT: 'decrement'
// }

// function reducer(state,action){
//     switch(action.type){
//         case ACTIONS.INCREMENT:
//             return {
//                 count: state.count + 1
//             }
//         case ACTIONS.DECREMENT: 
//         return {
//             count: state.count - 1
//         }
//         default:
//             return state
//     }
// }

// const UseReducerExample = () => {
//     const [state,dispatch] = useReducer(reducer, {count: 0})
//     function increment() {
//         dispatch({type: ACTIONS.INCREMENT})
//     }
//     function decrement() {
//         dispatch({type: ACTIONS.DECREMENT})
//     }
//     return(
//         <>
//         <div>
//             <h1>UseReducerExample</h1>
//         </div>
//         <div>
//             <button onClick={increment}>+</button>
//             <span>{state.count}</span>
//             <button onClick={decrement}>-</button>
//         </div>
//         </>
//     )
// }

// export default UseReducerExample;

import React, { useReducer, useState } from 'react';
import Todo from './Todo';

export const ACTIONS = {
    ADD_TODO: 'ADD_TODO',
    TOGGLE_TODO: 'TOGGLE_TODO',
    DELETE_TODO: 'DELETE_TODO'
}

function reducer(todos, action) {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [
                ...todos,
                newTodo(action.payload.name)
            ]
        case ACTIONS.TOGGLE_TODO:
            return todos.map(todo => {
                if(todo.id === action.payload.id){
                    return {...todo, complete: !todo.complete}
                }
                return todo
            })
        case ACTIONS.DELETE_TODO:
                return todos.filter((todo) => todo.id !== action.payload.id)
        default:
            return todos
    }
}

function newTodo(name) {
    return {
        id: Date.now(),
        name: name,
        complete: false
    }
}



const UseReducerExample = () => {
    const [name, setName] = useState('');
    const [todos, dispatch] = useReducer(reducer, []);

    function handleSubmit(e) {
        e.preventDefault()
        dispatch({
            type: ACTIONS.ADD_TODO,
            payload: { name: name }
        })
        setName('')
    }
    return (
        <>
            <div>
                <h1>UseReducerExample</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        placeholder="Add todo"
                    />
                </form>
            {todos.map((todo) => {
                return (
                    <Todo 
                        todo={todo}
                        dispatch={dispatch}/>
                )
            })}
            </div>
        </>
    )
}

export default UseReducerExample;