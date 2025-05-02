import { ActionError, defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { Resend } from 'resend';
import { RESEND_API_KEY } from "astro:env/server";

const resend = new Resend(RESEND_API_KEY);
export const server = {
  contact: defineAction({
    accept: 'form',
    input: z.object({
      name: z.string().min(1).max(50),
      message: z.string().min(1).max(500),
    }),
    handler: async ({name, message}) => {

      const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: 'adolforosa.dev@gmail.com',
        subject: `Mensaje de ${name} desde el portafolio`,
        html: `<p>${message}</p>`,
      });

      if (error) {
        console.error(error)
        throw new ActionError({
          code: 'BAD_REQUEST',
          message: error.message,
        });
      }
      return data;
    },
  }),
};