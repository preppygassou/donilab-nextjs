import * as z from "zod";
import { UserRole } from "@prisma/client";
import { url } from "inspector";

export const SettingsSchema = z
  .object({
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      }

      return true;
    },
    {
      message: "New password is required!",
      path: ["newPassword"],
    }
  )
  .refine(
    (data) => {
      if (data.newPassword && !data.password) {
        return false;
      }

      return true;
    },
    {
      message: "Pas  sword is required!",
      path: ["password"],
    }
  );

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
  code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
});


export const SiteSchema = z.object({
  id: z.string().min(2),
  name: z.object({fr:z.string().min(2, { message: 'Le nom du site doit comporter au moins 2 caractères.' })}),
  email: z.string().min(1),
  phone: z.string().min(1),
  address: z.string().min(1),
  city: z.string().min(1),
  zipCode: z.string().min(1),
  state: z.string().min(1),
  country: z.string().min(1),
  logo: z.any().optional(),
})

export const eventFormSchema = z.object({
  title:z.object({
    fr: z.string().min(3, 'Title must be at least 3 characters'),
    en: z.string().min(3, 'Title must be at least 3 characters'),
    
  }),
  description: z.object({
    fr: z.string().min(3, 'Description must be at least 3 characters').max(400, 'Description must be less than 400 characters'),
    en: z.string().min(3, 'Description must be at least 3 characters').max(400, 'Description must be less than 400 characters'),
  }) ,
  location: z.string().min(3, 'Location must be at least 3 characters').max(400, 'Location must be less than 400 characters'),
  imageUrl:z.object({}),
  startDateTime: z.date(),
  endDateTime: z.date(),
  categoryId: z.string(),
  price: z.string(),
  isFree: z.boolean(),
  url: z.string().url()
})

export const postFormSchema = z.object({
  title:z.object({
    fr: z.string().min(3, 'Title must be at least 3 characters'),
    en: z.string().min(3, 'Title must be at least 3 characters'),
    
  }),
  content: z.object({
    fr: z.string().min(3, 'Description must be at least 3 characters').max(400, 'Description must be less than 400 characters'),
    en: z.string().min(3, 'Description must be at least 3 characters').max(400, 'Description must be less than 400 characters'),
  }) ,
  excerpt: z.object({
    fr: z.string().min(3, 'Description must be at least 3 characters').max(400, 'Description must be less than 400 characters'),
    en: z.string().min(3, 'Description must be at least 3 characters').max(400, 'Description must be less than 400 characters'),
  }),
  featured_media: z.object({
    fr: z.string().min(3, "l'image de couverture en FR obligatoire"),
    en: z.string().optional(),
  }),
  categories: z.array(z.number()),
  tags: z.array(z.number()).optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  slug: z.string(),
  status: z.boolean(),
  link: z.string().url()
})