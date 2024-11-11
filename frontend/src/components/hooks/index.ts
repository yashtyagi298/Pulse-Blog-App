import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../../config";



export interface Blog{
    "content":string;
    "title":string;
    "id":number;
    "author":{
        "name":string;
    }
}
export const useBlogs = () =>{
    const [loading , setLoading] = useState(true);
    const [blogs ,setBlogs]= useState<Blog[]>([]);
 
    useEffect(()=>{
            axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
                headers:{
                    Authorization:`Bearer ${localStorage.getItem("token")}`
                }
            })
              .then(response =>{
                 setBlogs(response.data.allPost);
                 setLoading(false);
              })
    },[])

    return {
        loading,
        blogs
    }

}


export const useSingleBlog=({id}:{id:string})=>{
        const [loading,setLoading] = useState(true);
        const [singleBlog , setSingleBlog]=useState<Blog>();;

        useEffect(()=>{
            axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
                headers:{
                    Authorization:`Bearer ${localStorage.getItem("token")}`
                }
            })
                .then(response =>{
                    setSingleBlog(response.data.onePost);
                    setLoading(false);
                })
        },[id])
        return {
            loading,
            singleBlog
        }
}