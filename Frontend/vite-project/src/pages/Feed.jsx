import React from 'react'
import {useState,useEffect} from "react";
import axios from "axios";

const Feed = () => {

     const [posts,setPosts]=useState([{
        _id:"01",
        image:"https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
        caption:"Random image da"
    
      }]);

      useEffect(()=>{
        axios.get("http://localhost:3000/posts").then((res)=>{
        setPosts(res.data.posts)})
      },[]);


  return (
    <div className="bg-green-700 h-[100%] mx-auto max-w-[360px] flex flex-col gap-2 justify-start items-center  ">

        <h1 className="font-bold text-xl ">POSTS:</h1>

        {posts.length>0? ( 
            posts.map((post)=>(
                <div key={post.id} className="w-[90%] flex flex-col justify-center py-3 px-3 items-center mx-auto bg-green-300  gap-1  ">
                    <img className="h-50 w-full object-cover" src={post.image} alt="img"/>
                    <p>{post.caption}</p>

                </div>
            ))
        ):(<h1>No Posts Available</h1>)}
    </div>
  )
}

export default Feed