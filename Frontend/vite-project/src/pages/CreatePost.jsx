import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault()

        const formData = new FormData(e.target)

        axios.post("http://localhost:3000/create-post",formData).then((res)=>{
          navigate("/feed");
        })
        .catch((err)=>{
            console.log(err)
            alert("ERROR CREATING POST")
        })
    }

  return (
    <div className="h-screen w-screen flex items-center justify-center ">
      <section className="bg-blue-400 rounded-xl border-2 ">
        <h1 className="text-center font-bold text-xl ">Create Post:</h1>

        <form className="flex flex-col rounded-xl  p-2 gap-2   " onSubmit={handleSubmit}>
          <input className="bg-blue-50  h-20 border-1  " type="file" name="image" accept="image/*" required />
          <input className="bg-blue-50 border-1  h-10" type="text" name="caption" placeholder="Caption" required />
          <button className=" bg-yellow-300  inline-block w-30 rounded-xl mx-auto  px-[20px] py-[10px]" type="submit">SUBMIT</button>
        </form>
      </section>
    </div>
  );
};

export default CreatePost;
