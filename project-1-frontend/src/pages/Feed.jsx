import React,{useState,useEffect} from 'react'
 import axios from 'axios'

const Feed = () => {

  const [posts, setPosts] = useState([
    {
      _id:"1",
      image:"https://images.unsplash.com/photo-1773332585815-f106a5d6ed6c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
      caption:"Beautiful Scenery"
    }
  ])

  useEffect(()=> {
    axios.get("http://localhost:3000/posts")
    .then((res)=>{
      console.log(res.data)
     setPosts(res.data.posts)
    })
  },[])

  return (
    <section>
      {
        posts.length > 0 ? (
          posts.map((post)=>(
            <div key={post._id} className='w-100 h-auto p-3 rounded-2xl border m-2 bg-amber-100'>
              <img src={post.image} alt={post.caption} className='rounded-2xl' />
              <p className='p-2'> {post.caption}</p>
            </div>
          ))
        ) : (
          <h1>no posts available here</h1>
        )
      }
    </section>
  )
}

export default Feed
