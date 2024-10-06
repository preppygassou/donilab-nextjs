import BreadCrumb from '@/components/breadcrumb';
import { SiteClient } from '@/components/tables/user-tables/site';
import { getSites } from '@/data/sites';
import { cookies } from 'next/headers'

const breadcrumbItems = [{ title: 'Sites', link: '/dashboard/sites' }];
export default async function Page() {
  const cookieStore = cookies()
  const locale = cookieStore.get('NEXT_LOCALE')?.value || "fr"

  const sitesData = await getSites();
  const sites = sitesData?.map((site)=>{
    const localName = site.name[locale] 
    return{
      id: site.id,
      name:localName,
      description: site.description,
      status: site.status,
      country: site.country,
    }
  });


  return (
    <>
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
        <BreadCrumb items={breadcrumbItems} />
        <SiteClient data={sites} />
      </div>
    </>
  );
}
