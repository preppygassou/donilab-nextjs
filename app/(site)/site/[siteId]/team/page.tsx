import { db } from '@/lib/db'
import React from 'react'
import DataTable from './data-table'
import { Plus } from 'lucide-react'
import { columns } from './columns'
import SendInvitation from '@/components/forms/send-invitation'
import { currentUser } from '@/lib/auth'

type Props = {
  params: { siteId: string }
}

const TeamPage = async ({ params }: Props) => {
  const authUser = await currentUser()
  const teamMembers = await db.user.findMany({
    /* where: {
      Site: {
        id: params.siteId,
      },
    },
    include: {
      Site: { include: { Hub: true } },
      Permissions: { include: { Hub: true } },
    }, */
  })

  if (!authUser) return null
  const siteDetails = await db.site.findUnique({
    where: {
      id: params.siteId,
    },
    /* include: {
      Hub: true,
    }, */
  })

  if (!siteDetails) return

  return (
    <DataTable
      actionButtonText={
        <>
          <Plus size={15} />
          Ajouter
        </>
      }
      modalChildren={<SendInvitation siteId={siteDetails.id} />}
      filterValue="name"
      columns={columns}
      data={teamMembers}
    ></DataTable>
  )
}

export default TeamPage