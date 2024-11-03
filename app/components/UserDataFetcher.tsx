// app/components/UserDataFetcher.tsx
import { cookies } from 'next/headers';

export const getUserData = () => {
  const cookieStore = cookies();
  const sessionCookie = cookieStore.get('session');

  if (sessionCookie) {
    try {
      const userData = JSON.parse(sessionCookie.value);
      return userData;
    } catch (e) {
      console.error('Failed to parse session cookie:', e);
      return null;
    }
  }

  return null;
};
