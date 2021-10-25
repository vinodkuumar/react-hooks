import React, { useState, useEffect } from 'react';
import Post from './post';

function App({ initialCount }) {
  const [state, setState] = useState({
    count: initialCount,
    user: 'vinod'
  });

  const [posts, setPosts] = useState([
    {
      name: 'super awesome hooks',
      body: 'Everything is awesome when u are part of a team'
    }
  ])
  // const addOne = () => {
  //   setState(prevCount => {
  //     return prevCount + 1
  //   })
  // }
  // const restOne = () => {
  //   setState(prevCount => {
  //     return prevCount - 1
  //   })
  // }

  const addOnePost = () => {
    let newPost = {
      name: 'super awesome hooks',
      body: 'Everything is awesome when u are part of a team'
    }
    setPosts([
      ...posts,
      newPost
    ])
  }
  // useEffect(() => {
  //   console.log('useeffect')
  // })
  const removePost = () => {
    setPosts([])
  }
  return (
    <>
      <div>
        <h1>{state.user}</h1>
        <h3>Count: {state.count}</h3>
        <button onClick={() => setState({ count: state.count + 1 })}>Add one +</button>
        <button onClick={() => setState({ count: state.count - 1 })}>Rest one -</button>
        <button onClick={() => setState({ count: initialCount })}>Reset</button>
      </div>
      <br />
      {posts.map((item, i) => (
        <Post item={item} key={i}/>
      ))}
      <br />
      <button onClick={addOnePost}>Add Post</button>
      <button onClick={removePost}>Remove Posts</button>
    </>
  );
}

export default App;
