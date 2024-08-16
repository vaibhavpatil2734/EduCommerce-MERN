const {z} = require("zod")

const signupSchema = z.object({
    username:z
    .string({required_error:"Name is required"})
    .trim()
    .min(3,{message:"Name must be at lest of 3 chars."})
    .max(255,{message:"Name must not be more than 255 characters"}),

    email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .max(255, { message: "Email must not be more than 255 characters" }),

    phone: z
    .string({ required_error: "Phone number is required" })
    .trim()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .max(15, { message: "Phone number must not be more than 15 digits" })
    .regex(/^\d+$/, { message: "Phone number must contain only digits" }),

    password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(8, { message: "Password must be at least 8 characters" })
    .max(128, { message: "Password must not be more than 128 characters" })
    .regex(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/, {
        message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
    })

})

module.exports = signupSchema;