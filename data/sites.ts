import { db } from "@/lib/db";

export const getSites = async () => {
  try {
    const sites = await db.site.findMany({});

    return sites;
  } catch {
    return null;
  }
};

export const getSite = async (id: any) => {
  try {
    const sites = await db.site.findUnique({
      where: {
        id: id,
      },
    })
  

    return sites;
  } catch {
    return null;
  }
};
