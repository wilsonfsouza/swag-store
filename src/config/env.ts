import z from 'zod';

const envSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.url().default('http://localhost:3000'),
  APP_URL: z.url().default('http://localhost:3000'),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error(
    `Invalid environment variables: ${z.treeifyError(parsedEnv.error).errors}`
  );

  throw new Error('Invalid environment variables.');
}

export const env = parsedEnv.data;
