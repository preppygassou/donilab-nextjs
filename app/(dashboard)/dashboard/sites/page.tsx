import BreadCrumb from '@/components/breadcrumb';
import { SiteClient } from '@/components/tables/user-tables/site';
import { getSites } from '@/data/sites';

const breadcrumbItems = [{ title: 'Sites', link: '/dashboard/sites' }];
export default async function page() {
  const sites = await getSites();

  return (
    <>
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
        <BreadCrumb items={breadcrumbItems} />
        <SiteClient data={sites} />
      </div>
    </>
  );
}
