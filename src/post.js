import React,{useEffect} from 'react';

const Post = (props) => {
    const {item, i} = props;
    useEffect(() => {
        console.log('post created');

        return () => {
            console.log('component exited/unmounted')
        }
    },[])
    return(
        <div key={i}>
          <div>Name: {item.name}</div>
          <div>Body: {item.body}</div>
          <br />
        </div>
    )
}

export default Post;
