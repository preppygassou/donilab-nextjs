import Unauthorized from '@/components/unauthorized'
import { getAuthUserDetails, verifyAndAcceptInvitation } from '@/lib/queries'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {
  searchParams: { state: string; code: string }
}

const HubMainPage = async ({ searchParams }: Props) => {
/*   const siteId = await verifyAndAcceptInvitation()

  if (!siteId) {
    return <Unauthorized />
  } */

  const user = await getAuthUserDetails()
  if (!user) return

  const getFirstHubWithAccess = user.Permissions.find(
    (permission) => permission.access === true
  )

  if (searchParams.state) {
    const statePath = searchParams.state.split('___')[0]
    const statehubId = searchParams.state.split('___')[1]
    if (!statehubId) return <Unauthorized />
    return redirect(
      `/hub/${statehubId}/${statePath}?code=${searchParams.code}`
    )
  }

  if (getFirstHubWithAccess) {
    return redirect(`/hub/${getFirstHubWithAccess.hubId}`)
  }

  return <Unauthorized />
}

export default HubMainPage