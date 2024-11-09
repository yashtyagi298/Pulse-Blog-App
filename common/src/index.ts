import z from 'zod';

export const signupInput = z.object({
    username:z.string().email(),
    password:z.string().min(6),
    name:z.string().optional()
})
// type infrence in zod for signin 
export type SignupInput = z.infer<typeof signupInput>

export const signinInput = z.object({
    username:z.string().email(),
    password:z.string().min(6)
})
// type infrence in zod for signin 
export type SigninInput= z.infer<typeof signinInput>

export const createBlogInput = z.object({
    title:z.string(),
    content:z.string()
})

// type infrence in zod for blog post 
export type CreateBlogInput = z.infer<typeof createBlogInput>

export const updateBlogInput = z.object({
    title:z.string(),
    content:z.string(),
    id:z.number()
})

// type infrence in zod for update a blog post 

export type UpdateBlogInput = z.infer<typeof updateBlogInput>