import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // Redirect to the homepage
  const res = NextResponse.redirect(new URL('/', request.url));

  // Delete the session cookie by setting it with an expired date
  res.cookies.set('session', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    expires: new Date(0), // Set the cookie to expire in the past
    path: '/',            // Ensure the path matches the one used when setting the cookie
  });

  return res;
}
