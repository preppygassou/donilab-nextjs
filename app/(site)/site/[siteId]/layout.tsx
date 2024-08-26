import BlurPage from '@/components/global/blur-page'
import InfoBar from '@/components/global/infobar'
import Sidebar from '@/components/sidebar'
import Unauthorized from '@/components/unauthorized'
import { currentUser } from '@/lib/auth'
import {
  getNotificationAndUser,
  verifyAndAcceptInvitation,
} from '@/lib/queries'

import { redirect } from 'next/navigation'
import React from 'react'

type Props = {
  children: React.ReactNode
  params: { siteId: string }
}

const layout = async ({ children, params }: Props) => {
  //const siteId = await verifyAndAcceptInvitation()
  const user = await currentUser()

  if (!user) {
    return redirect('/auth/login')
  }

 /*  if (!siteId) {
    return redirect('/site')
  } */

  /* if (
    user.role !== 'ADMIN' || 'SITE_ADMIN'
  )
    return <Unauthorized /> */

  let allNoti: any = []
  const notifications = await getNotificationAndUser(params.siteId)
  if (notifications) allNoti = notifications

 

  return (
    <div className="h-screen overflow-hidden">
      <Sidebar
        id={params.siteId}
        type="site"
      />
      <div className="md:pl-[300px]">
        <InfoBar
          notifications={allNoti}
          role={allNoti.User?.role}
        />
        <div className="relative">
          <BlurPage>{children}</BlurPage>
        </div>
      </div>
    </div>
  )
}

export default layout