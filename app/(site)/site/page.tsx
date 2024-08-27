import BreadCrumb from '@/components/breadcrumb';
import SiteDetails from "@/components/forms/site-details";
import { ScrollArea } from '@/components/ui/scroll-area';

import { useCurrentUser } from '@/hooks/use-current-user'
import { getAuthUserDetails, verifyAndAcceptInvitation } from '@/lib/queries'
import { Plan } from '@prisma/client'
import { redirect } from 'next/navigation'
import React from 'react'

const Page = async ({
  searchParams,
}: {
  searchParams: { plan: Plan; state: string; code: string }
}) => {
 /*  const siteId = await verifyAndAcceptInvitation()
 */

  //get the users details
 /*  const user = await getAuthUserDetails()
  if (siteId) {
    if (user?.role === 'HUB_GUEST' || user?.role === 'HUB_USER') {
      return redirect('/hub')
    } else if (user?.role === 'SITE_MANAGER' || user?.role === 'SITE_ADMIN' || user?.role === 'SITE_MODERATOR') {
      if (searchParams.plan) {
        return redirect(`/site/${siteId}/billing?plan=${searchParams.plan}`)
      }
      if (searchParams.state) {
        const statePath = searchParams.state.split('___')[0]
        const statesiteId = searchParams.state.split('___')[1]
        if (!statesiteId) return <div>Not authorized</div>
        return redirect(
          `/site/${statesiteId}/${statePath}?code=${searchParams.code}`
        )
      } else return redirect(`/site/${siteId}`)
    } else {
      return <div>Not authorized</div>
    }
  } */
 /*  const authUser = useCurrentUser() */
  return (
    <ScrollArea className="h-full">
    <div className="flex-1 space-y-4 p-5">
    <div className="flex justify-center items-center mt-4">
      <div className="max-w-[850px] border-[1px] p-4 rounded-xl">

      <h1 className="text-4xl mb-5">Créer nouveau site donilab</h1>
      <SiteDetails/>
      </div>
      </div>
      </div>
      </ScrollArea>
  )
}

export default Page