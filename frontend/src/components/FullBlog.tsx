
import Appbar from "./Appbar"
import { Blog } from "./hooks"


export const FullBlog =({blog}:{blog:Blog})=>{
    return <div>
        
      <Appbar/>
        <div className="grid grid-cols-1 md:grid-cols-12 px-4 md:px-10 py-5 max-w-screen-2xl gap-y-4 ">
        <div className="md:col-span-8  py-4 border-b md:border-0  ">
           <div className="text-2xl md:text-3xl font-extrabold px-4">
                {blog.title}
           </div>
           <div className="text-base md:text-lg px-4">
            {blog.content}
           </div>
        </div>
        <div className="md:col-span-4 flex flex-col gap-1 mt-2 px-4 md:border-l ">
           <div className="text-sm font-semibold text-gray-500">Author . </div> <span className="text-lg font-semibold">{blog.author.name.charAt(0).toUpperCase() + blog.author.name.slice(1)}</span>
           <p className="text-sm text-gray-500">Master of mirth, purveyor of puns, and the funniest person in the kingdom</p>
        </div>
    </div>
       
   
    </div>
}

