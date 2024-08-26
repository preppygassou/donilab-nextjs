import AgencyDetails from '@/components/forms/site-details'
import UserDetails from '@/components/forms/user-details'
import { currentUser } from '@/lib/auth'
import { db } from '@/lib/db'
import React from 'react'

type Props = {
  params: { siteId: string }
}

const SettingsPage = async ({ params }: Props) => {
 /*  const authUser = await currentUser()
  if (!authUser) return null

  const userDetails = await db.user.findUnique({
    where: {
      email: authUser.email,
    },
  })

  if (!userDetails) return null */
  const siteDetails = await db.site.findUnique({
    where: {
      id: params.siteId,
    },
    include: {
      hubs: true,
    },
  })

  if (!siteDetails) return null

  const Hubs = siteDetails.hubs

  return (
    <div className="flex lg:!flex-row flex-col gap-4">
      <AgencyDetails data={siteDetails} />
      {/* <UserDetails
        type="site"
        id={params.siteId}
        Hubs={Hubs}
        userData={userDetails}
      /> */}
    </div>
  )
}

export default SettingsPage