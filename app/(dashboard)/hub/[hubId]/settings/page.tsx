import HubDetails from '@/components/forms/hub-details'
import UserDetails from '@/components/forms/user-details'
import BlurPage from '@/components/global/blur-page'
import { currentUser } from '@/lib/auth'
import { db } from '@/lib/db'
import React from 'react'

type Props = {
  params: { hubId: string }
}

const HubSettingPage = async ({ params }: Props) => {
  const authUser = await currentUser()
  if (!authUser) return
  const userDetails = await db.user.findUnique({
    where: {
      email: authUser.email,
    },
  })
  if (!userDetails) return

  const Hub = await db.hub.findUnique({
    where: { id: params.hubId },
  })
  if (!Hub) return

  const siteDetails = await db.site.findUnique({
    where: { id: Hub.siteId },
    include: { Hub: true },
  })

  if (!siteDetails) return
  const Hubs = siteDetails.Hub

  return (
    <BlurPage>
      <div className="flex lg:!flex-row flex-col gap-4">
        <HubDetails
          siteDetails={siteDetails}
          details={Hub}
          userId={userDetails.id}
          userName={userDetails.name}
        />
        {/* <UserDetails
          type="hub"
          id={params.hubId}
          Hubs={Hubs}
          userData={userDetails}
        /> */}
      </div>
    </BlurPage>
  )
}

export default HubSettingPage