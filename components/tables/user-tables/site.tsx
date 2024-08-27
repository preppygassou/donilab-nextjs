'use client';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { Site } from '@/constants/data';
import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { siteColumns } from './columns';

interface SiteProps {
  data: Site[];
}

export const SiteClient: React.FC<SiteProps> = ({ data }) => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Sites (${data.length})`}
          description="Gérer les sites"
        />
        <Button
          className="text-xs md:text-sm"
          onClick={() => router.push(`/dashboard/sites/new`)}
        >
          <Plus className="mr-2 h-4 w-4" /> Ajouter un nouveau
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={siteColumns} data={data} />
    </>
  );
};
