'use client'

import {
  Site,
  SiteSidebarOption,
  Hub,
  HubSidebarOption,
} from '@prisma/client'
import React, { useEffect, useMemo, useState } from 'react'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '../ui/sheet'
import { Button } from '../ui/button'
import { ChevronsUpDown, Compass, Menu, PlusCircleIcon } from 'lucide-react'
import clsx from 'clsx'
import { AspectRatio } from '../ui/aspect-ratio'
import Image from 'next/image'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '../ui/command'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { useModal } from '@/providers/modal-provider'
import CustomModal from '../global/custom-modal'
import HubDetails from '../forms/hub-details'
import { Separator } from '../ui/separator'
import { icons } from '@/lib/constants'
import { usePathname } from 'next/navigation'

type Props = {
  defaultOpen?: boolean
  hubs: Hub[]
  sidebarOpt: SiteSidebarOption[] | HubSidebarOption[]
  sidebarLogo: string
  details: any
  user: any
  id: string
}

const MenuOptions = ({
  details,
  id,
  sidebarLogo,
  sidebarOpt,
  hubs,
  user,
  defaultOpen,
}: Props) => {
  const { setOpen } = useModal()
  const [isMounted, setIsMounted] = useState(false)
  const pathname = usePathname();
  const openState = useMemo(
    () => (defaultOpen ? { open: true } : {}),
    [defaultOpen]
  )

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return

  function isActive(sidebarOptions) {
    // Check if the item itself matches the path
    if (sidebarOptions.link === pathname) {
      return true;
    }
    
    /* // If item has children, recursively check each child
    if (item.children) {
      return item.children.some(subItem => isActive(subItem));
    }
   */
    // Return false if no matches were found
    return false;
  }

  return (
    <Sheet
      modal={false}
      {...openState}
    >
      <SheetTrigger
        asChild
        className="absolute left-4 top-4 z-[100] md:!hidden felx"
      >
        <Button
          variant="outline"
          size={'icon'}
        >
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent
        showX={!defaultOpen}
        side={'left'}
        className={clsx(
          'bg-background/80 backdrop-blur-xl fixed top-0 border-r-[1px] p-6',
          {
            'hidden md:inline-block z-0 w-[300px]': defaultOpen,
            'inline-block md:hidden z-[100] w-full': !defaultOpen,
          }
        )}
      >
        <div>
          <AspectRatio ratio={16 / 5}>
            <Image
              src={sidebarLogo?.url}
              alt="Sidebar Logo"
              fill
              className="rounded-md object-contain"
            />
          </AspectRatio>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="w-full my-4 flex items-center justify-between py-8"
                variant="ghost"
              >
                <div className="flex items-center text-left gap-2">
                  <Compass />
                  <div className="flex flex-col">
                    {details?.name?.fr}
                    <span className="text-muted-foreground">
                      {details.address}
                    </span>
                  </div>
                </div>
                <div>
                  <ChevronsUpDown
                    size={16}
                    className="text-muted-foreground"
                  />
                </div>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 h-80 mt-4 z-[200]">
              <Command className="rounded-lg">
                <CommandInput placeholder="Recherche de Hubs..." />
                <CommandList className="pb-16">
                  <CommandEmpty>Aucun résultat trouvé</CommandEmpty>
                  {(user?.role === 'SITE_MANAGER' ||
                    user?.role === 'SITE_ADMIN') &&
                    user?.Site && (
                      <CommandGroup heading="Site">
                        <CommandItem className="!bg-transparent my-2 text-primary broder-[1px] border-border p-2 rounded-md hover:!bg-muted cursor-pointer transition-all">
                          {defaultOpen ? (
                            <Link
                              href={`/site/${user?.Site?.id}`}
                              className="flex gap-4 w-full h-full"
                            >
                              <div className="relative w-16">
                                <Image
                                  src={user?.Site?.logo}
                                  alt="Site Logo"
                                  fill
                                  className="rounded-md object-contain"
                                />
                              </div>
                              <div className="flex flex-col flex-1">
                                {user?.Site?.name}
                                <span className="text-muted-foreground">
                                  {user?.Site?.address}
                                </span>
                              </div>
                            </Link>
                          ) : (
                            <SheetClose asChild>
                              <Link
                                href={`/site/${user?.Site?.id}`}
                                className="flex gap-4 w-full h-full"
                              >
                                <div className="relative w-16">
                                  <Image
                                    src={user?.Site?.logo}
                                    alt="Site Logo"
                                    fill
                                    className="rounded-md object-contain"
                                  />
                                </div>
                                <div className="flex flex-col flex-1">
                                  {user?.Site?.name}
                                  <span className="text-muted-foreground">
                                    {user?.Site?.address}
                                  </span>
                                </div>
                              </Link>
                            </SheetClose>
                          )}
                        </CommandItem>
                      </CommandGroup>
                    )}
                  <CommandGroup heading="Hubs">
                    {!!hubs
                      ? hubs.map((hub) => (
                          <CommandItem key={hub.id}>
                            {defaultOpen ? (
                              <a
                                href={`/hub/${hub.id}`}
                                className="flex gap-4 w-full h-full"
                              >
                                <div className="relative w-16">
                                  <Image
                                    src={hub?.logo?.url}
                                    alt="hub Logo"
                                    fill
                                    className="rounded-md object-contain"
                                  />
                                </div>
                                <div className="flex flex-col flex-1">
                                  {/* {hub.title&&hub.title.fr&&hub.title.fr} */}
                                  <span className="text-muted-foreground">
                                    {hub.address}
                                  </span>
                                </div>
                              </a>
                            ) : (
                              <SheetClose asChild>
                                <a
                                  href={`/hub/${hub.id}`}
                                  className="flex gap-4 w-full h-full"
                                >
                                  <div className="relative w-16">
                                    <Image
                                      src={hub?.logo?.url}
                                      alt="hub Logo"
                                      fill
                                      className="rounded-md object-contain"
                                    />
                                  </div>
                                  <div className="flex flex-col flex-1">
                                    {hub.name}
                                    <span className="text-muted-foreground">
                                      {hub.address}
                                    </span>
                                  </div>
                                </a>
                              </SheetClose>
                            )}
                          </CommandItem>
                        ))
                      : 'Pas de hubs'}
                  </CommandGroup>
                </CommandList>
                {(user?.role === 'SITE_MANAGER' ||
                  user?.role === 'SITE_ADMIN') && (
                  <SheetClose>
                    <Button
                      className="w-full flex gap-2"
                      onClick={() => {
                        setOpen(
                          <CustomModal
                            title="Créer un hub"
                            subheading="Vous pouvez basculer entre votre compte de site et le hub à partir de la barre latérale"
                          >
                            <HubDetails
                              siteDetails={user?.Site as Site}
                              userId={user?.id as string}
                              userName={user?.name}
                            />
                          </CustomModal>
                        )
                      }}
                    >
                      <PlusCircleIcon size={15} />
                      Créer un hub
                    </Button>
                  </SheetClose>
                )}
              </Command>
            </PopoverContent>
          </Popover>
          <p className="text-muted-foreground text-xs mb-2">LIENS DU MENU</p>
          <Separator className="mb-4" />
          <nav className="relative">
            <Command className="rounded-lg overflow-visible bg-transparent">
              <CommandInput placeholder="Recherche..." />
              <CommandList className="py-4 overflow-visible">
                <CommandEmpty>Aucun résultat trouvé</CommandEmpty>
                <CommandGroup className="overflow-visible">
                  {sidebarOpt.map((sidebarOptions) => {
                    let val
                    const result = icons.find(
                      (icon) => icon.value === sidebarOptions.icon
                    )
                    if (result) {
                      val = <result.path />
                    }
                    return (
                      <CommandItem
                        key={sidebarOptions.id}
                        className="md:w-[320px] w-full"
                      >
                        <a
                          href={sidebarOptions.link}
                          className={`flex items-center gap-2 hover:bg-transparent rounded-md transition-all md:w-full w-[320px] ${isActive(sidebarOptions) ?"bg-transparent":""}`}
                        >
                          {val}
                          <span>{sidebarOptions.name}</span>
                        </a>
                      </CommandItem>
                    )
                  })}
                </CommandGroup>
              </CommandList>
            </Command>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MenuOptions