import { useSession } from "next-auth/react";

export const useCurrentSite = () => {
  const session = useSession();

  return session.data?.user?.role;
};
