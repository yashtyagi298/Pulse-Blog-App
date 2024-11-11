import { Link } from "react-router-dom";

export interface BlogCardProps{
    id:number;
    authorName:string;
    title:string;
    content:string;
    publishDate:string;
}
function BlogCard({
    id,
    authorName,
    title,
    content,
    publishDate
}:BlogCardProps) {

  return (
   <Link to={`blog/${id}`}>
    <div className="border-b-2 border-slate-200 py-4 px-2 cursor-pointer">
        <div className="flex gap-2 items-center mb-1">
          <Avtar size={1.5} text={"xs"} name={authorName} />
          <div className="font-extralight text-xs">{authorName}</div> 
          <div className="font-normal text-xs text-slate-500">
          {publishDate}
          </div>
        </div>
        <div className="font-bold text-xl">
            {title}
        </div>
        <div className="font-normal">
            {content.slice(0,200)+"....."}
        </div>
        
    </div>
   </Link>
  )
}

export default BlogCard


 export function Avtar({ name, size = 6, text = "xl" }: { name: string; size?: number; text?: string }) {
    return (
      <div
        className="relative inline-flex items-center justify-center overflow-hidden bg-gray-300 rounded-full"
        style={{ width: `${size}rem`, height: `${size}rem` }} // Dynamically set width and height
      >
        <span className={`font-medium text-gray-600 dark:text-gray-600 text-${text}`}>
          {name[0].toUpperCase()}
        </span>
      </div>
    );
  }

// return <div className={`relative inline-flex items-center justify-center w-${size} h-${size} overflow-hidden bg-gray-300 rounded-full`}>
// <span className={`font-medium text-gray-600 dark:text-gray-600 text-${text}`}>{name[0].toUpperCase()}</span>
// </div>