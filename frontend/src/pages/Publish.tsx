import axios from "axios"
import Appbar from "../components/Appbar"
import { BACKEND_URL } from "../config"
import { ChangeEvent, ChangeEventHandler, EventHandler, useState } from "react"
import { useNavigate } from "react-router-dom";


function Publish() {
    const [title,setTitle] =useState("");
    const [content,setContent] = useState("");
    const navigate = useNavigate();
    const [loader , setLoader] = useState(false);
  return (
    <div>
        <Appbar/>
  
    <div className="flex justify-center ">
  
        <div className="max-w-screen-lg w-full px-6 pt-6" >
     
     <input onChange={(e)=>{
            setTitle(e.target.value)
     }} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="Title..."/>
    </div>
    </div>
<div className="px-6 pt-4"><TextEditor onChange ={(e)=>{
    setContent(e.target.value)
}}/>
<button disabled={loader} onClick={async ()=>{
    setLoader(true);
   const response= await axios.post(`${BACKEND_URL}/api/v1/blog`,{
        title,
        content,
      
    },{
        headers:{
           Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
    setLoader(false);
    navigate('/blogs')
    // navigate(`/blogs/blog/${response.data.id}`)
   }} type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white rounded-lg bg-gray-800 hover:bg-gray-950 ">
      {loader ? "Please wait.... " : "Publish Post"}
   </button>
</div>
    </div>
  )
}

export default Publish

function TextEditor({onChange}:{onChange:(e:ChangeEvent<HTMLTextAreaElement>)=>void}){
   return ( 
<div>
   <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50  ">
   
       <div className=" rounded-b-lg ">
       
           <textarea onChange={onChange} id="editor" rows={15} className="block w-full  text-xl text-gray-800 bg-gray-50 border-0 px-3 py-3 " placeholder="Write your article..." required ></textarea>
       </div>
   </div>
   
</div>
   )

}