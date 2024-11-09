import { Hono } from 'hono'
import { PrismaClient} from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign, verify } from 'hono/jwt'
import { userRouter } from './router/user'
import { blogRouter } from './router/blog'


const app = new Hono<{
  Bindings:{
    DATABASE_URL:string,
    JWT_SECRET:string
  }
}>()
app.route("/api/v1/user",userRouter);
app.route("/api/v1/blog",blogRouter);
//----Middleware---
app.use('api/v1/blog/*',async(c,next)=>{
 //get the headers
 // verify the header
 // if the header is correct , we need can proceed
 // if not , we return the user a 403 status code
 const header = c.req.header('Authorization')||"" ;
 const token = header.split(" ")[1];
 const response = await verify(token,c.env.JWT_SECRET)
 if(response.id){
  await next()
 }else{
  return c.json({error:"unauthorized"})
 }

})
app.get('/',(C)=>{
  return C.text("hello hono")
})



export default app
