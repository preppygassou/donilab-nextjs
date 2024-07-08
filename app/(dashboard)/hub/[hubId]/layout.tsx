import InfoBar from '@/components/global/infobar'
import Sidebar from '@/components/sidebar'
import Unauthorized from '@/components/unauthorized'
import { currentUser } from '@/lib/auth'
import {
  getAuthUserDetails,
  getNotificationAndUser,
  verifyAndAcceptInvitation,
} from '@/lib/queries'

import { UserRole } from '@prisma/client'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {
  children: React.ReactNode
  params: { hubId: string }
}

const HubLayout = async ({ children, params }: Props) => {
  /* const siteId = await verifyAndAcceptInvitation()
  if (!siteId) return <Unauthorized /> */
  const user = await currentUser()
  if (!user) {
    return redirect('/')
  }

  let notifications: any = []

 /*  if (!user.role) {
    return <Unauthorized />
  } else {
    const allPermissions = await getAuthUserDetails()
    const hasPermission = allPermissions?.Permissions.find(
      (permissions) =>
        permissions.access && permissions.hubId === params.hubId
    )
    if (!hasPermission) {
      return <Unauthorized />
    }

    const allNotifications = await getNotificationAndUser(siteId)

    if (
      user.role === 'ADMIN' ||
      user.role === 'SITE_ADMIN'
    ) {
      notifications = allNotifications
    } else {
      const filteredNoti = allNotifications?.filter(
        (item) => item.hubId === params.hubId
      )
      if (filteredNoti) notifications = filteredNoti
    }
  }
 */
  return (
    <div className="h-screen overflow-hidden">
      <Sidebar
        id={params.hubId}
        type="hub"
      />

      <div className="md:pl-[300px]">
        <InfoBar
          notifications={notifications}
          role={user.role as UserRole}
          hubId={params.hubId as string}
        />
        <div className="relative">{children}</div>
      </div>
    </div>
  )
} 

export default HubLayout