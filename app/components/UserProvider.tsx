// app/components/UserProvider.tsx
import UserProviderClient from "./UserProviderClient";

export function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <UserProviderClient>{children}</UserProviderClient>;
}
