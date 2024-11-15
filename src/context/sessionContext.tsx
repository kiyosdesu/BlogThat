import useSession, { UseSession } from "@/components/hooks/useSession";
import React, { createContext, useContext } from "react";

const SessionContext = createContext<UseSession | null>(null);

export const SessionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const session = useSession();

  return (
    <SessionContext.Provider value={session}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSessionContext = () => {
  return useContext(SessionContext);
};
