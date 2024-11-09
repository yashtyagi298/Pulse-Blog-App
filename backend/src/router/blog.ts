
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { jwt, verify } from "hono/jwt";
import { tryDecode } from "hono/utils/url";
import { number } from "zod";
import { createBlogInput,updateBlogInput } from "@yashtyagi097/pulse-common";


export const blogRouter = new Hono<{
    Bindings:{
        DATABASE_URL:string
        JWT_SECRET:string
    },
    Variables:{
        jwtPayload:string
    }
}>();
//----Middleware for blog router---------
blogRouter.use('/*',async (c,next)=>{
    // extract the user Id 
    // pass it down to the route handler 
    const header = c.req.header("Authorization") || "";
    const token = header.split(" ")[1];
    try{
    const response= await verify(token,c.env.JWT_SECRET);
    if(response){
        c.set("jwtPayload",response.id);
        await next();
    }
}catch(error){
       // console.error(error);
       c.status(403);
       return c.json({ message: 'UnAuthorized' });
    
}
  

})
//---------blog
blogRouter.post('/', async (c) => {
  
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate());
try {
    const authorId = c.get("jwtPayload");
    const body = await c.req.json();
    const {success} = createBlogInput.safeParse(body);
    if(!success){
      c.status(411)
      return c.json({
        message:"Incorrect Inputs"
      })
    }
    const post = await prisma.post.create({
        data:{
            title:body.title,
            content:body.content,
            authorId:Number(authorId) // parseInt or Number both of them are fine...
        }
     })
     return c.json({id:post.id})
} catch (error) {
    console.error("error",error);
    c.status(500)
    return c.json({error:"failed to create post"})
}
})

//------- Put a Blog-----------
blogRouter.put('/', async (c) => {
 
  const prisma = new PrismaClient({
    datasourceUrl:c.env.DATABASE_URL
  }).$extends(withAccelerate())
  try {
    const body = await c.req.json();
    const {success} = updateBlogInput.safeParse(body);
    if(!success){
      c.status(411)
      return c.json({message:"Incorrect Inputs"})
    }
    const updatePost = await prisma.post.update({
        where: {
          id: body.id
        },
        data: {
          title: body.title,
          content: body.content
        }
      });
      return c.json(updatePost);
  } catch (error) {
    console.error("error updating post",error)
    c.status(500)
    return c.json({error:"failed to update post"})
  }
})
// todo : add paginaton 
blogRouter.get('/bulk', async (c) => {
    //    const body = await c.req.json();
       const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
       }).$extends(withAccelerate())
       try {
        const allPost = await prisma.post.findMany();
        return c.json({allPost})
       } catch (error) {
        c.status(411);
        c.json({message:"error while fetching blog post"})
       }
    })

//---------Getting a Blog---------
blogRouter.get('/:id', async (c) => {
  const params =  c.req.param("id");
  const prisma = new PrismaClient({
    datasourceUrl:c.env.DATABASE_URL
  }).$extends(withAccelerate())
  try {
    const findPost = await prisma.post.findFirst({
        where:{
            id:Number(params)
        }
      })
      return c.json({findPost})
  } catch (error) {
    c.status(411);
    c.json({message:"error while fetching blog post"})
  }
})

// delete blog post
blogRouter.delete('/:id',async (c)=>{
  const prisma =  new PrismaClient({
    datasourceUrl:c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  try {
    const params = c.req.param("id")
   const blogpost = await prisma.post.findUnique({
    where:{
      id:Number(params)
    }
   })
   if(!blogpost){
    c.status(404)
    return c.json({message:"blog post not found"})
   }
   
   await prisma.post.delete({
    where:{id:Number(params)}
   })
   return c.json({message:"Deleted Successfully!"})
  } catch(err){
     c.status(500)
     return c.json({message:"error while deleting blog post"})
  }
})
