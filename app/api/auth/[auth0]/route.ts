import { handleAuth, handleLogin, handleCallback } from '@auth0/nextjs-auth0/edge';

const redirectUri = `https://truepartner312.pages.dev/api/auth/callback`;

export const GET = handleAuth({
  login: handleLogin({
    authorizationParams: { redirect_uri: redirectUri }
  }),
  callback: handleCallback({ redirectUri }),
  onError(req: Request, error: Error) {
    console.error(error);
  }
});

export const runtime = 'edge';
//https://github.com/vercel/next.js/issues/51642
export const fetchCache = 'force-no-store';
