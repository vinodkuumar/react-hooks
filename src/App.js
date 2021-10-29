import React, { useState, useEffect } from 'react';
import randomColor from 'randomcolor';
import Post from './post';
import UseMemoExample from './UseMemoExample';
import UsecallbackExample from './UsecallbackExample';

function App({ initialCount }) {
  const [count, setCount] = useState(initialCount)
  const [color, setColor] = useState("")
  //componentdid mount
  useEffect(() => {
   const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1)
    }, 2000)
    //component will unmount
     return (() => clearInterval(intervalId))
  }, [])
  // componentdidupdate
  useEffect(() => {
    setColor(randomColor())

  }, [count])

  const [posts, setPosts] = useState([
    {
      name: 'super awesome hooks',
      body: 'Everything is awesome when u are part of a team'
    }
  ])
  // const addOne = () => {
  //   setCount(prevCount => {
  //     return prevCount + 1
  //   })
  // }
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
        <h1 style={{ color: color }}>Count: {count}</h1>
        {/* <button onClick={addOne}>Add one +</button> */}
        <button onClick={restOne}>Rest one -</button>
        <button onClick={resetCount}>Reset</button>
      </div>
      <br />
      {posts.map((item, i) => (
        <Post item={item} key={i} />
      ))}
      <br />
      <button onClick={addOnePost}>Add Post</button>
      <button onClick={removePost}>Remove Posts</button>
      <div>
      <UseMemoExample />
      </div>
      <div>
        <UsecallbackExample />
      </div>
    </>
  );
}

export default App;
