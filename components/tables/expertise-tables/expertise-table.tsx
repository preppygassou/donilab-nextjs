'use client';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { Post } from '@/constants/data';
import { Plus } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { columns } from './columns';

interface PostProps {
  data: Post[];
}

export const ExpertiseTableView: React.FC<PostProps> =({data})=> {
  const router = useRouter();
  const params = useParams();
  const siteId = params.siteId


  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Les expertises (${data.length})`}
          description="Gérer les expertises"
        />
        <Button
          className="text-xs md:text-sm"
          onClick={() => router.push(`/site/${siteId}/expertises/add`)}
        >
          <Plus className="mr-2 h-4 w-4" /> Ajouter un nouveau
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="title" columns={columns} data={data} />
    </>
  );
}
