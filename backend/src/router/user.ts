import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";
import { signinInput,signupInput } from "@yashtyagi097/pulse-common";
import { comparepass, hashpass } from "../hashing/passwordHash";

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string
        JWT_SECRET: string
    }
}>();

//----------Signup-----------
userRouter.post('/signup', async (c) => {
    // C here is for context  - req,res and 10 differet things
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
try{
    const body = await c.req.json();
    const {success}=signupInput.safeParse(body);
    if(!success){
        c.status(411);
        return c.json({
            message:"Incorrect Inputs"
        })
    }
    const finduser = await prisma.user.findFirst({
        where:{
            username:body.username
        }
    })
    if(finduser){
        c.status(411);
        return c.json({message:"User already exists"})
    }
    const userPassword = await hashpass(body.password)
        const user = await prisma.user.create({
            data: {
                username: body.username,
                name: body.name,
                password: userPassword,

            }
        });
        const token = await sign({ id: user.id, }, c.env.JWT_SECRET)
        return c.json({
            jwt: token
        })

    } catch (error) {
        console.log("error", error);
        c.status(500);
        return c.json({ error: "error while signing up " })
    }

    // return c.text('Signup route')
});

userRouter.get('/users', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())
    try {
        // Query all users from the database
        const users = await prisma.user.findMany();

        // Respond with the users' data in JSON format
        return c.json(users);
    } catch (error) {
        console.error("Error fetching users:", error);

        // Send a 500 status with an error message if something goes wrong
        c.status(500)
        return c.json({ error: "Failed to fetch users" });
    }
});

//---------SignIn----------
userRouter.post('/signin', async (c) => {
 
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate());
        try {
        const body = await c.req.json();
        const {success} = signinInput.safeParse(body);
        if(!success){
            c.status(411);
            return c.json({
                message:"Incorrect Inputs"
            })
        }
        const user = await prisma.user.findFirst({
            where:{
                username:body.username
            }
        })
        if(!user){
            c.status(411);
            return c.json({message:'User does not exists'})
        }
        const checkUser = await comparepass(body.password,user.password);
        if(!checkUser){
            c.status(403)
            return c.json({message:"Invalid Password"})
        }
        const {password,...rest}=user;
        const token = await sign({ id: user.id }, c.env.JWT_SECRET);
        return c.json({ jwt: token })

    } catch (error) {
        console.log("error", error)
        c.status(500);
        return c.json({error:"Error during signin"});
    }
})
