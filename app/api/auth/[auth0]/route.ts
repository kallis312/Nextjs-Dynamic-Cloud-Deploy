import { handleAuth, handleLogin, handleCallback } from '@auth0/nextjs-auth0/edge';

// const redirectUri = `/api/auth/callback`;

export const GET = handleAuth();

export const runtime = 'edge';
//https://github.com/vercel/next.js/issues/51642
// export const fetchCache = 'force-no-store';
