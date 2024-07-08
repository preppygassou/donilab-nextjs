import BreadCrumb from '@/components/breadcrumb';
import SiteDetails from "@/components/forms/site-details";
import { ScrollArea } from '@/components/ui/scroll-area';
import { getSite } from '@/data/sites';


const Page = async ({
  params,
}: {
  params: { siteId: string }
  searchParams: { code: string }
}) => {
  const breadcrumbItems = [
    { title: 'Sites', link: '/dashboard/sites' },
    { title: 'Modifier', link: '/dashboard/sites/new' }
  ];
  const site = await getSite(params.siteId);
  if (!site) return
  return (
    <ScrollArea className="h-full">
    <div className="flex-1 space-y-4 p-5">
      <BreadCrumb items={breadcrumbItems} />
    <div className="flex justify-center items-center mt-4">
      <div className="max-w-[850px] border-[1px] p-4 rounded-xl">

      <h1 className="text-4xl mb-5">Modifier le site</h1>
      <SiteDetails data={site}/>
      </div>
      </div>
      </div>
      </ScrollArea>
  );
}
export default Page