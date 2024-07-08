'use client';
import { AlertModal } from '@/components/modal/alert-modal';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { useToast } from '@/components/ui/use-toast';
import { User ,Site} from '@/constants/data';
import { deleteSite, deleteUser } from '@/lib/queries';
import { Edit, MoreHorizontal, Trash,EyeIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface CellActionProps {
  data: User | Site;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { toast } = useToast()



  const onConfirm = async () => {
    setLoading(true)

    try {
      const response = await deleteUser(data.id)
      toast({
        title: 'Utilisateur supprimé',
        description: 'Supprimé Utilisateur',
      })
     
    } catch (error) {
      console.log(error)
      toast({
        variant: 'destructive',
        title: 'Oppse!',
        description: 'impossible de supprimer votre site',
      })
    }
    setLoading(false)
  };

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onConfirm}
        loading={loading}
      />
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Ouvrir le menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>

          <DropdownMenuItem
            onClick={() =>router.push(`/dashboard/${data.isSite?"sites/"+data.id:"users/"+data.id}`)}
          >
            <Edit className="mr-2 h-4 w-4" /> Modifier
          </DropdownMenuItem>
          {
            data.isSite?"":<DropdownMenuItem onClick={() => setOpen(true)}>
            <Trash className="mr-2 h-4 w-4" /> Supprimer
          </DropdownMenuItem>
          }
          {
            data.isSite&&<DropdownMenuItem onClick={() =>router.push(`/site/${data.id}`)}>
            <EyeIcon className="mr-2 h-4 w-4" /> Voir le site
          </DropdownMenuItem>
          }
          
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
