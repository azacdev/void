import * as z from "zod";

export const magicLinkSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

export type MagicLinkFormValues = z.infer<typeof magicLinkSchema>;

export const CheckoutSchema = z.object({
  contact: z.string().min(1, "Contact is required"),
  country: z.string().min(1, "Country is required"),
  name: z.string().min(3, "Firstname required"),
  address: z.string().min(1, "Address is required"),
  apartment: z.string().min(1, "Minimum 3 characters required").optional(),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  zipcode: z.string().regex(/^\d{5}(-\d{4})?$/, "Invalid ZIP Code"),
});
