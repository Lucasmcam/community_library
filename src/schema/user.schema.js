import {z} from 'zod';

const userSchema = z.object({
    username: z.string().min(3, 'Username is required'),
    email: z.string().email('Invalid Email'),
    password: z.string().min(6,'Password must be at least 6 caracters long'),
    avatar: z.string().url('Invalid URL').optional()
})

const userIdSchema = z.object({
    userId: z.number().int().positive('User must be a positive integer'),
});

export { userSchema, userIdSchema };