'use client'
import HubDetails from '@/components/forms/hub-details'
import CustomModal from '@/components/global/custom-modal'
import { Button } from '@/components/ui/button'
import { useCurrentUser } from '@/hooks/use-current-user'
import { useModal } from '@/providers/modal-provider'
import { Site, SiteSidebarOption, Hub, User } from '@prisma/client'
import { PlusCircleIcon } from 'lucide-react'
import React from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  /* user: User & {
    Site:
      | (
          | Site
          | (null & {
              Hub: Hub[]
              SideBarOption: SiteSidebarOption[]
            })
        )
      | null
  } */
  site: Site
  className: string
}

const CreateHubButton = ({ className, site}: Props) => {
  const { setOpen } = useModal()
  const siteDetails =site
  const user =useCurrentUser()

  if (!siteDetails) return

  return (
    <Button
      className={twMerge('w-full flex gap-4', className)}
      onClick={() => {
        setOpen(
          <CustomModal
            title="Créer un hub"
            subheading="Vous pouvez basculer entre"
          >
            <HubDetails
              siteDetails={siteDetails}
              userId={user.id}
              userName={user.name}
            />
          </CustomModal>
        )
      }}
    >
      <PlusCircleIcon size={15} />
      Créer un hub
    </Button>
  )
}

export default CreateHubButton