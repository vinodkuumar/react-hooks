import React, { useState, useEffect } from 'react';
import Post from './post';

function App({ initialCount }) {
  const [count, setCount] = useState(initialCount)

  const [posts, setPosts] = useState([
    {
      name: 'super awesome hooks',
      body: 'Everything is awesome when u are part of a team'
    }
  ])
  const addOne = () => {
    setCount(prevCount => {
      return prevCount + 1
    })
  }
  const restOne = () => {
    setCount(prevCount => {
      return prevCount - 1
    })
  }
  const resetCount = () => {
    setCount(prevCount => {
      return initialCount
    })
  }

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
        
        <h3>Count: {count}</h3>
        <button onClick={addOne}>Add one +</button>
        <button onClick={restOne}>Rest one -</button>
        <button onClick={resetCount}>Reset</button>
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
