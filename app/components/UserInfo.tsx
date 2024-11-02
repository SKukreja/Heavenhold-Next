'use client';

import React, { useEffect } from 'react';

interface UserInfoProps {
  user: any;
}

export default function UserInfo({ user }: UserInfoProps): JSX.Element {
  useEffect(() => {
    console.log('User data on client side:', user);
  }, [user]);

  return <></>;
}
