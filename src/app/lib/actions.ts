// 'use server';

import { send } from '@emailjs/browser';
import { z } from 'zod';

const ContactInformation = z.object({
	name: z.string().trim().min(1, "errors.missing-name"),
	email: z.string().email("errors.missing-email"),
	message: z.string().trim().min(1, "errors.missing-message")
})

type ContactInformation = z.infer<typeof ContactInformation>

export type State = {
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
    emailjs?: string;
  };
  message?: string | null;
  success?: boolean | null;
};

export async function sendContactInformation(prevState: State, formData: FormData) {
	
  const validatedFields = ContactInformation.safeParse({
		name: formData.get('name'),
		email: formData.get('email'),
		message: formData.get('message'),        
	})
  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to send contact information.',
      success: false
    } as State;
  }

  const { name, email, message } = validatedFields.data;

  const response = await send(
    'default_service',
    'template_contact',
    {name, email, message},
    {
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    })
  .then(() => {
    return { message: 'Success', success: true }
  })
  .catch((error) => {
    const errorMessage = error.text as string;
    console.error(errorMessage);
    return {
      errors: {emailjs: "errors.emailjs"},
      message: errorMessage,
      success: false
    }
  })

  return response as State
}