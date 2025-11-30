'use client';

import { createContext, ReactNode, useMemo, useState } from 'react';

export const UserContext = createContext<{
  currentUser: { id: string; name: string } | null;
  changeCurrentUser: (user: { id: string; name: string } | null) => void;
}>({ currentUser: null, changeCurrentUser: () => {} });

export default function UserProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<{
    id: string;
    name: string;
  } | null>(null);
  const changeCurrentUser = (user: { id: string; name: string } | null) => {
    setCurrentUser(user);
  };

  const providerValue = useMemo(
    () => ({ currentUser, changeCurrentUser }),
    [currentUser]
  );

  return (
    <UserContext.Provider value={providerValue}>
      {children}
    </UserContext.Provider>
  );
}
