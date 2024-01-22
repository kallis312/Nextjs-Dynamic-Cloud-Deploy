import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';

// export function generateStaticParams() {
//   return [
//     { auth0: 'login' },
//     { auth0: 'signup' },
//     { auth0: 'callback' },
//     { auth0: 'me' }
//   ]
// }
// //here is dynamic test.
// export const dynamic = 'force-dynamic'

// export const runtime = 'edge'

export const GET = handleAuth({
  login: handleLogin({
    returnTo: '/'
  })
});