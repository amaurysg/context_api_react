import React from 'react'
import posts from '../data/posts'
import {useParams, Redirect} from 'react-router-dom'


const Post = () => {
  const {id} = useParams()
/*   console.log(id)
  console.log("test",posts[id-1]) */
  return (
    <div>
          { posts[id-1] ?
            <div>
              <h1>{posts[id-1].titulo} </h1>
              <p>{posts[id-1].texto} </p>
            </div>
            
            :
           <Redirect to="/"></Redirect>
          }

    </div>
  )
}

export default Post
