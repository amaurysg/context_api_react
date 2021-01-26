import React /*  {useContext}  */ from 'react'
//ademas de react, importamos el hooks useContext
import posts from '../data/posts'
import {Link} from 'react-router-dom'
import Controles from './Controles'
/* import {ContextoTema} from '../contextos/contextoTema' */

//Acabamos de importat ContextoTema de contextoTema.js


const Blog = () => {

  //Creamos una const con el useContext y asignamos ContextoTema
/*   const namehola = useContext(ContextoTema)
  console.log(namehola) */
  
  return (
       <div>
          <h2>Blog</h2>
          <ul>
              {posts.map((post)=>{
                  return (<li key={post.id}>
                              <Link to={`/post/${post.id}`}>{post.titulo}</Link>
                          </li>)
              })}
          </ul>   
          <Controles></Controles>
       </div>
  )
}

export default Blog
