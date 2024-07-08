"use client";
import BreadCrumb from '@/components/breadcrumb';
import SiteDetails from "@/components/forms/site-details";
import { ScrollArea } from '@/components/ui/scroll-area';


export default function Page() {
  const breadcrumbItems = [
    { title: 'Sites', link: '/dashboard/sites' },
    { title: 'Créer', link: '/dashboard/sites/new' }
  ];

  return (
    <ScrollArea className="h-full">
    <div className="flex-1 space-y-4 p-5">
      <BreadCrumb items={breadcrumbItems} />
    <div className="flex justify-center items-center mt-4">
      <div className="max-w-[850px] border-[1px] p-4 rounded-xl">

      <h1 className="text-4xl mb-5">Créer nouveau site donilab</h1>
      <SiteDetails/>
      </div>
      </div>
      </div>
      </ScrollArea>
  );
}
