import { getAuthUserDetails, getHubDetails, getSiteDetails } from '@/lib/queries'
import { off } from 'process'
import React from 'react'
import MenuOptions from './menu-options'
import { currentUser } from '@/lib/auth'

type Props = {
  id: string
  type: 'site' | 'hub'|'admin'
}

const Sidebar = async ({ id, type }: Props) => {
  const site = type === 'site'
  ? await getSiteDetails(id):await getHubDetails(id)
  if (type === 'site' && !site) return null
  const user = await currentUser()


  const details =
    type === 'site'
      ? site
      : site


  if (!details) return

  let sideBarLogo = site.logo || '/assets/plura-logo.svg'


  const sidebarOpt =
    type === 'site'
      ? site.sidebarOptions || []
      : site.sidebarOptions || []
 /*  const sidebarOpt =
    type === 'site'
      ? site.SidebarOption || []
      : site.Hub.find((hub) => hub.id === id)
          ?.SidebarOption || [] */

  const hubs = site.hubs
 /*  const hubs = site.Hub.filter((hub) =>
    user.Permissions.find(
      (permission) =>
        permission.hubId === hub.id && permission.access
    )
  ) */

  return (
    <>
      <MenuOptions
        defaultOpen={true}
        details={details}
        id={id}
        sidebarLogo={sideBarLogo}
        sidebarOpt={sidebarOpt}
        hubs={hubs}
        user={user}
      />
      <MenuOptions
        details={details}
        id={id}
        sidebarLogo={sideBarLogo}
        sidebarOpt={sidebarOpt}
        hubs={hubs}
        user={user}
      />
    </>
  )
}

export default Sidebar