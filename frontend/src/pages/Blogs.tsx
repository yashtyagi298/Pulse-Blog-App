import Appbar from "../components/Appbar"
import BlogCard from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../components/hooks";



function Blogs() {
    const {loading , blogs}=useBlogs();
    if(loading){
        return <div>
           <BlogSkeleton/>
           <BlogSkeleton/>
           <BlogSkeleton/>
           <BlogSkeleton/>
           <BlogSkeleton/>
           <BlogSkeleton/>
           
        </div>
    }

      // Sorting blogs by id in descending order
      const sortedBlogs = blogs.sort((a, b) => b.id - a.id);
   
  return (
    <>
    <Appbar/>
    <div className="flex justify-center  ">
    <div className="md:w-auto max-w-4xl" >
       
    {sortedBlogs.map(blog => (
                        <BlogCard
                            key={blog.id}
                            id={blog.id}
                            authorName={blog.author.name || "Anonymous"}
                            title={blog.title}
                            content={blog.content}
                            publishDate="published"
                        />
                    ))}
        
    </div>
    </div>
    </>
  )
}

export default Blogs