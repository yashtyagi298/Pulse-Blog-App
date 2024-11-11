import { useParams } from "react-router-dom";
import { FullBlog } from "../components/FullBlog";

import { BlogSkeleton } from "../components/BlogSkeleton";
import { useSingleBlog } from "../components/hooks";




function Blog() {
  const {id} =useParams();
  const {loading,singleBlog}=useSingleBlog({
    id:id|| ""
  });
  if(loading || !singleBlog){
    return <div>
    <BlogSkeleton/>
    <BlogSkeleton/>
    <BlogSkeleton/>
    <BlogSkeleton/>
    <BlogSkeleton/>
    </div>
  }

  return (
    <div>
      <FullBlog blog={singleBlog}/>
      {/* blog details.... */}
    </div>
  )
}

export default Blog