import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    // Extract the token from the query parameter
    const { searchParams } = new URL(request.url);
    const token = searchParams.get('token');

    if (!token) {
      return NextResponse.redirect(new URL('/login?error=missing_token', request.url));
    }

    // Verify the token by making a request to WordPress API
    const response = await fetch('https://api.heavenhold.com/wp-json/custom/v1/validate-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    });

    if (!response.ok) {
      return NextResponse.redirect(new URL('/login?error=invalid_token', request.url));
    }

    const userData = await response.json();

    // Redirect to the homepage
    const res = NextResponse.redirect(new URL('/', request.url));

    // Set the session cookie using res.cookies.set
    res.cookies.set('session', JSON.stringify(userData), {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days in seconds
      path: '/',
    });

    return res;
  } catch (err) {
    console.error('Token verification failed:', err);
    return NextResponse.redirect(new URL('/login?error=verification_failed', request.url));
  }
}
