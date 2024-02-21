// we are creating it because Form is for creating user data

import * as z from 'zod';

export const UserValidation = z.object({
    profile_photo: z.string().url(),
    name: z.string().min(3).max(30),
    username: z.string().min(3).max(30),
    bio: z.string().min(3).max(1000),
})

//z.object --> chatGPT/google