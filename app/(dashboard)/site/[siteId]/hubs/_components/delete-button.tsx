'use client'
import {
  deleteHub,
  getHubDetails,
  saveActivityLogsNotification,
} from '@/lib/queries'
import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {
  hubId: string
}

const DeleteButton = ({ hubId }: Props) => {
  const router = useRouter()

  return (
    <div
      className="text-white"
      onClick={async () => {
        const response = await getHubDetails(hubId)
        await saveActivityLogsNotification({
          siteId: undefined,
          description: `Deleted a Hub | ${response?.name}`,
          hubId,
        })
        await deleteHub(hubId)
        router.refresh()
      }}
    >
      Supprimer le Hub
    </div>
  )
}

export default DeleteButton