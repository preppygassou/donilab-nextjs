'use server'

import { db } from './db'
import { redirect } from 'next/navigation'
import {
  Site,
  Lane,
  Plan,
  Prisma,
  UserRole,
  Hub,
  Tag,
  Ticket,
  User,
} from '@prisma/client'
import { v4 } from 'uuid'
import {
  CreateFunnelFormSchema,
  CreateMediaType,
  UpsertFunnelPage,
} from './types'
import { z } from 'zod'
import { revalidatePath } from 'next/cache'
import { currentUser } from './auth'
import { CreateCategoryParams, CreateEventParams, DeleteEventParams, GetAllEventsParams, GetRelatedEventsByCategoryParams } from '@/types'
import { handleError } from './utils'

export const getUserPermissions =async()=>{

}
export const getAuthUserDetails = async () => {
  const user = await currentUser()
  if (!user) {
    return
  }

  const userData = await db.user.findUnique({
    where: {
      email: user.email,
    },
   /*  include: {
      Site: {
        include: {
          sidebarOptions: true,
          sites: {
            include: {
              sidebarOptions: true,
            },
          },
        },
      },
      Permissions: true,
    }, */
  })

  return userData
}

export const getSiteDetails = async (siteId: any) => {
  const user = await currentUser()
  if (!user) {
    return
  }

  const siteData = await db.site.findUnique({
    where: {
      id: siteId,
    },
    include: {
      sidebarOptions: true,
      hubs: {
        include: {
          sidebarOptions: true,
        },
      },
    },
  })

  return siteData
}

export const saveActivityLogsNotification = async ({
  siteId,
  description,
  hubId,
}: {
  siteId?: string
  description: string
  hubId?: string
}) => {
  const authUser = await currentUser()
  let userData
  if (!authUser) {
    const response = await db.user.findFirst({
      where: {
        Site: {
          Hub: {
            some: { id: hubId },
          },
        },
      },
    })
    if (response) {
      userData = response
    }
  } else {
    userData = await db.user.findUnique({
      where: { email: authUser?.email },
    })
  }

  if (!userData) {
    console.log('Could not find a user')
    return
  }

  let foundSiteId = siteId
  if (!foundSiteId) {
    if (!hubId) {
      throw new Error(
        'You need to provide atleast an site Id or hub Id'
      )
    }
    const response = await db.hub.findUnique({
      where: { id: hubId },
    })
    if (response) foundSiteId = response.siteId
  }
  if (hubId) {
    await db.notification.create({
      data: {
        notification: `${userData.name} | ${description}`,
        User: {
          connect: {
            id: userData.id,
          },
        },
        Site: {
          connect: {
            id: foundSiteId,
          },
        },
        Hub: {
          connect: { id: hubId },
        },
      },
    })
  } else {
    await db.notification.create({
      data: {
        notification: `${userData.name} | ${description}`,
        User: {
          connect: {
            id: userData.id,
          },
        },
        Site: {
          connect: {
            id: foundSiteId,
          },
        },
      },
    })
  }
}

export const createTeamUser = async (siteId: string, user: User) => {
  if (user.role === 'HUB_MANAGER') return null
  const response = await db.user.create({ data: { ...user } })
  return response
}

export const verifyAndAcceptInvitation = async () => {
  const user = await currentUser()
  if (!user) return redirect('/auth/login')
 /*  const invitationExists = await db.invitation.findUnique({
    where: {
      email: user.email,
      status: 'PENDING',
    },
  })

  if (invitationExists) {
    const userDetails = await createTeamUser(invitationExists.siteId, {
      email: invitationExists.email,
      siteId: invitationExists.siteId,
      avatarUrl: user?.imageUrl,
      id: user.id,
      name: `${user.firstName} ${user.lastName}`,
      role: invitationExists.role,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    await saveActivityLogsNotification({
      siteId: invitationExists?.siteId,
      description: `Joined`,
      hubId: undefined,
    })

    if (userDetails) {
  
      await db.invitation.delete({
        where: { email: userDetails.email },
      })

      return userDetails.siteId
    } else return null
  } else {
    const site = await db.user.findUnique({
      where: {
        email: user.emailAddresses[0].emailAddress,
      },
    })
    return site ? site.siteId : null
  } */
}

export const updateSiteDetails = async (
  siteId: string,
  siteDetails: Partial<Site>
) => {
  const response = await db.site.update({
    where: { id: siteId },
    data: { ...siteDetails },
  })
  return response
}

export const deleteSite = async (siteId: string) => {
  const response = await db.site.delete({ where: { id: siteId } })
  return response
}

export const initUser = async (newUser: Partial<User>) => {
  const user = await currentUser()
  if (!user) return

  const userData = await db.user.upsert({
    where: {
      email: user.emailAddresses[0].emailAddress,
    },
    update: newUser,
    create: {
      id: user.id,
      avatarUrl: user.imageUrl,
      email: user.emailAddresses[0].emailAddress,
      name: `${user.firstName} ${user.lastName}`,
      role: newUser.role || 'HUB_USER',
    },
  })

  await db.user.update({
    where: { id: user.id },
    data: {
      role: newUser.role || 'HUB_USER',
    },
  });


  return userData
}

export const upsertSite = async (site: Site) => {
  
  try {
    const siteDetails = await db.site.upsert({
      where: {
        id: site.id,
      },
      update: site,
      create: {
        ...site,
        sidebarOptions: {
          create: [
            {
              name: 'Tableau de bord',
              icon: 'category',
              link: `/site/${site.id}`,
            },
            {
              name: 'Launchpad',
              icon: 'clipboardIcon',
              link: `/site/${site.id}/launchpad`,
            },
            {
              name: 'Articles',
              icon: 'blog',
              link: `/site/${site.id}/posts`,
            },
            {
              name: 'Hubs',
              icon: 'hub',
              link: `/site/${site.id}/hubs`,
            },
            {
              name: 'Programmes',
              icon: 'program',
              link: `/site/${site.id}/programs`,
            },
            {
              name: 'Expertises',
              icon: 'expertise',
              link: `/site/${site.id}/expertises`,
            },
            {
              name: 'Services',
              icon: 'service',
              link: `/site/${site.id}/services`,
            },
            {
              name: 'Impact',
              icon: 'impact',
              link: `/site/${site.id}/impact`,
            },
            {
              name: 'Evénements',
              icon: 'event',
              link: `/site/${site.id}/events`,
            },
            {
              name: 'Partenaires',
              icon: 'partner',
              link: `/site/${site.id}/partners`,
            },
            {
              name: 'Rapport annuel',
              icon: 'report',
              link: `/site/${site.id}/report`,
            },
            {
              name: 'Équipe',
              icon: 'shield',
              link: `/site/${site.id}/team`,
            },
            {
              name: 'Paramètres',
              icon: 'settings',
              link: `/site/${site.id}/settings`,
            },
          ],
        },
      },
    })
    return siteDetails
  } catch (error) {
    throw error
  }
}

export const getNotificationAndUser = async (siteId: string) => {
  try {
    const response = await db.notification.findMany({
      where: { siteId },
      include: { User: true },
      orderBy: {
        createdAt: 'desc',
      },
    })
    return response
  } catch (error) {
    console.log(error)
  }
}

export const upsertHub = async (hub: Hub) => {
  if (!hub.email) return null
  /* const siteOwner = await db.user.findFirst({
    where: {
      Site: {
        id: hub.siteId,
      },
      role: 'HUB_MANAGER'||"ADMIN"||'SITE_ADMIN'||'SITE_EDITOR',
    },
  })
  if (!siteOwner) return console.log('🔴Erreur, impossible de créer le hub') */
  /* const permissionId = v4() */
  const response = await db.hub.upsert({
    where: { id: hub.id },
    update: hub,
    create: {
      ...hub,
      sidebarOptions: {
        create: [
          {
            name: 'Tableau de bord',
            icon: 'category',
            link: `/hub/${hub.id}`,
          },
          {
            name: 'Launchpad',
            icon: 'clipboardIcon',
            link: `/hub/${hub.id}/launchpad`,
          },
          
          {
            name: 'Programmes',
            icon: 'program',
            link: `/hub/${hub.id}/programs`,
          },
          {
            name: 'Evénements',
            icon: 'event',
            link: `/hub/${hub.id}/events`,
          },
          {
            name: 'Galerie',
            icon: 'database',
            link: `/hub/${hub.id}/galerie`,
          },
          {
            name: 'Clients',
            icon: 'person',
            link: `/hub/${hub.id}/contacts`,
          },
          {
            name: 'Paramètres',
            icon: 'settings',
            link: `/hub/${hub.id}/settings`,
          },
          
        ],
      },
    },
  })
  return response
}

export const getUserSitePermissions = async (userId: string) => {
  const response = await db.user.findUnique({
    where: { id: userId },
    select: { SitePermissions: { include: { Site: true } } },
  })

  return response
}

export const getUserHubPermissions = async (userId: string) => {
  const response = await db.user.findUnique({
    where: { id: userId },
    select: { HubPermissions: { include: { Hub: true } } },
  })

  return response
}

export const updateUser = async (user: Partial<User>) => {
  const response = await db.user.update({
    where: { email: user.email},
    data: { ...user,role: user.role || 'HUB_USER'
     },
  })

/*   await useClerk.users.updateUserMetadata(response.id, {
    privateMetadata: {
      role: user.role || 'HUB_USER',
    },
  })
 */
 /*  await db.user.update({
    where: { id: response.id },
    data: {
      role: user.role || 'HUB_USER',
    },
  });
 */
  return response
}

export const changeUserPermissions = async (
  permissionId: string | undefined,
  userEmail: string,
  hubId: string,
  permission: boolean
) => {
  try {
    const response = await db.permissions.upsert({
      where: { id: permissionId },
      update: { access: permission },
      create: {
        access: permission,
        email: userEmail,
        hubId: hubId,
      },
    })
    return response
  } catch (error) {
    console.log('🔴Could not change persmission', error)
  }
}

export const getHubDetails = async (hubId: string) => {
  const response = await db.hub.findUnique({
    where: {
      id: hubId,
    },
    include: {
      sidebarOptions: true,
    },
  })
  return response
}

export const deleteHub = async (hubId: string) => {
  const response = await db.hub.delete({
    where: {
      id: hubId,
    },
  })
  return response
}

export const deleteUser = async (userId: string) => {
  /* await useClerk.users.updateUserMetadata(userId, {
    privateMetadata: {
      role: undefined,
    },
  }) */
  const deletedUser = await db.user.delete({ where: { id: userId } })

  return deletedUser
}

export const getUser = async (id: string) => {
  const user = await db.user.findUnique({
    where: {
      id,
    },
  })

  return user
}

export const sendInvitation = async (
  role: UserRole,
  email: string,
  siteId: string
) => {
  const resposne = await db.invitation.create({
    data: { email, siteId, role },
  })

  try {
    /* const invitation = await db.invitation.create({
      emailAddress: email,
      redirectUrl: process.env.NEXT_PUBLIC_URL,
      publicMetadata: {
        throughInvitation: true,
        role,
      },
    }) */
  } catch (error) {
    console.log(error)
    throw error
  }

  return resposne
}

export const getMedia = async (hubId: string) => {
  const mediafiles = await db.hub.findUnique({
    where: {
      id: hubId,
    },
    include: { Media: true },
  })
  return mediafiles
}

export const createMedia = async (
  hubId: string,
  mediaFile: CreateMediaType
) => {
  const response = await db.media.create({
    data: {
      link: mediaFile.link,
      name: mediaFile.name,
      hubId: hubId,
    },
  })

  return response
}

export const deleteMedia = async (mediaId: string) => {
  const response = await db.media.delete({
    where: {
      id: mediaId,
    },
  })
  return response
}

export const getPipelineDetails = async (pipelineId: string) => {
  const response = await db.pipeline.findUnique({
    where: {
      id: pipelineId,
    },
  })
  return response
}

export const getLanesWithTicketAndTags = async (pipelineId: string) => {
  const response = await db.lane.findMany({
    where: {
      pipelineId,
    },
    orderBy: { order: 'asc' },
    include: {
      Tickets: {
        orderBy: {
          order: 'asc',
        },
        include: {
          Tags: true,
          Assigned: true,
          Customer: true,
        },
      },
    },
  })
  return response
}

export const upsertFunnel = async (
  hubId: string,
  funnel: z.infer<typeof CreateFunnelFormSchema> & { liveProducts: string },
  funnelId: string
) => {
  const response = await db.funnel.upsert({
    where: { id: funnelId },
    update: funnel,
    create: {
      ...funnel,
      id: funnelId || v4(),
      hubId: hubId,
    },
  })

  return response
}

export const upsertPipeline = async (
  pipeline: Prisma.PipelineUncheckedCreateWithoutLaneInput
) => {
  const response = await db.pipeline.upsert({
    where: { id: pipeline.id || v4() },
    update: pipeline,
    create: pipeline,
  })

  return response
}

export const deletePipeline = async (pipelineId: string) => {
  const response = await db.pipeline.delete({
    where: { id: pipelineId },
  })
  return response
}

export const updateLanesOrder = async (lanes: Lane[]) => {
  try {
    const updateTrans = lanes.map((lane) =>
      db.lane.update({
        where: {
          id: lane.id,
        },
        data: {
          order: lane.order,
        },
      })
    )

    await db.$transaction(updateTrans)
    console.log('🟢 Done reordered 🟢')
  } catch (error) {
    console.log(error, 'ERROR UPDATE LANES ORDER')
  }
}

export const updateTicketsOrder = async (tickets: Ticket[]) => {
  try {
    const updateTrans = tickets.map((ticket) =>
      db.ticket.update({
        where: {
          id: ticket.id,
        },
        data: {
          order: ticket.order,
          laneId: ticket.laneId,
        },
      })
    )

    await db.$transaction(updateTrans)
    console.log('🟢 Done reordered 🟢')
  } catch (error) {
    console.log(error, '🔴 ERROR UPDATE TICKET ORDER')
  }
}

export const upsertLane = async (lane: Prisma.LaneUncheckedCreateInput) => {
  let order: number

  if (!lane.order) {
    const lanes = await db.lane.findMany({
      where: {
        pipelineId: lane.pipelineId,
      },
    })

    order = lanes.length
  } else {
    order = lane.order
  }

  const response = await db.lane.upsert({
    where: { id: lane.id || v4() },
    update: lane,
    create: { ...lane, order },
  })

  return response
}

export const deleteLane = async (laneId: string) => {
  const resposne = await db.lane.delete({ where: { id: laneId } })
  return resposne
}

export const getTicketsWithTags = async (pipelineId: string) => {
  const response = await db.ticket.findMany({
    where: {
      Lane: {
        pipelineId,
      },
    },
    include: { Tags: true, Assigned: true, Customer: true },
  })
  return response
}

export const _getTicketsWithAllRelations = async (laneId: string) => {
  const response = await db.ticket.findMany({
    where: { laneId: laneId },
    include: {
      Assigned: true,
      Customer: true,
      Lane: true,
      Tags: true,
    },
  })
  return response
}

export const getHubTeamMembers = async (hubId: string) => {
  const hubUsersWithAccess = await db.user.findMany({
    where: {
      Site: {
        Hub: {
          some: {
            id: hubId,
          },
        },
      },
      role: 'HUB_USER',
      Permissions: {
        some: {
          hubId: hubId,
          access: true,
        },
      },
    },
  })
  return hubUsersWithAccess
}

export const searchContacts = async (searchTerms: string) => {
  const response = await db.contact.findMany({
    where: {
      name: {
        contains: searchTerms,
      },
    },
  })
  return response
}

export const upsertTicket = async (
  ticket: Prisma.TicketUncheckedCreateInput,
  tags: Tag[]
) => {
  let order: number
  if (!ticket.order) {
    const tickets = await db.ticket.findMany({
      where: { laneId: ticket.laneId },
    })
    order = tickets.length
  } else {
    order = ticket.order
  }

  const response = await db.ticket.upsert({
    where: {
      id: ticket.id || v4(),
    },
    update: { ...ticket, Tags: { set: tags } },
    create: { ...ticket, Tags: { connect: tags }, order },
    include: {
      Assigned: true,
      Customer: true,
      Tags: true,
      Lane: true,
    },
  })

  return response
}

export const deleteTicket = async (ticketId: string) => {
  const response = await db.ticket.delete({
    where: {
      id: ticketId,
    },
  })

  return response
}

export const upsertTag = async (
  hubId: string,
  tag: Prisma.TagUncheckedCreateInput
) => {
  const response = await db.tag.upsert({
    where: { id: tag.id || v4(), hubId: hubId },
    update: tag,
    create: { ...tag, hubId: hubId },
  })

  return response
}

export const getTagsForHub = async (hubId: string) => {
  const response = await db.hub.findUnique({
    where: { id: hubId },
    select: { Tags: true },
  })
  return response
}

export const deleteTag = async (tagId: string) => {
  const response = await db.tag.delete({ where: { id: tagId } })
  return response
}

export const upsertContact = async (
  contact: Prisma.ContactUncheckedCreateInput
) => {
  const response = await db.contact.upsert({
    where: { id: contact.id || v4() },
    update: contact,
    create: contact,
  })
  return response
}

export const getFunnels = async (subacountId: string) => {
  const funnels = await db.funnel.findMany({
    where: { hubId: subacountId },
    include: { FunnelPages: true },
  })

  return funnels
}

export const getFunnel = async (funnelId: string) => {
  const funnel = await db.funnel.findUnique({
    where: { id: funnelId },
    include: {
      FunnelPages: {
        orderBy: {
          order: 'asc',
        },
      },
    },
  })

  return funnel
}

export const updateFunnelProducts = async (
  products: string,
  funnelId: string
) => {
  const data = await db.funnel.update({
    where: { id: funnelId },
    data: { liveProducts: products },
  })
  return data
}

export const upsertFunnelPage = async (
  hubId: string,
  funnelPage: UpsertFunnelPage,
  funnelId: string
) => {
  if (!hubId || !funnelId) return
  const response = await db.funnelPage.upsert({
    where: { id: funnelPage.id || '' },
    update: { ...funnelPage },
    create: {
      ...funnelPage,
      content: funnelPage.content
        ? funnelPage.content
        : JSON.stringify([
            {
              content: [],
              id: '__body',
              name: 'Body',
              styles: { backgroundColor: 'white' },
              type: '__body',
            },
          ]),
      funnelId,
    },
  })

  revalidatePath(`/hub/${hubId}/funnels/${funnelId}`, 'page')
  return response
}

export const deleteFunnelePage = async (funnelPageId: string) => {
  const response = await db.funnelPage.delete({ where: { id: funnelPageId } })

  return response
}

export const getFunnelPageDetails = async (funnelPageId: string) => {
  const response = await db.funnelPage.findUnique({
    where: {
      id: funnelPageId,
    },
  })

  return response
}

export const getDomainContent = async (subDomainName: string) => {
  const response = await db.funnel.findUnique({
    where: {
      subDomainName,
    },
    include: { FunnelPages: true },
  })
  return response
}

export const getPipelines = async (hubId: string) => {
  const response = await db.pipeline.findMany({
    where: { hubId: hubId },
    include: {
      Lane: {
        include: { Tickets: true },
      },
    },
  })
  return response
}

const getCategoryByName = async (name: string) => {
  return db.category.findUnique({ 
    where: {
    name:name
  } 
})
}

const populateEvent = (query: any) => {
  /* return query
    .populate({ path: 'organizer', model: User, select: '_id firstName lastName' })
    .populate({ path: 'category', model: Category, select: '_id name' }) */
}

// CREATE
export async function createEvent({ userId, event, path }: CreateEventParams) {
  try {

    const organizer = await db.user.findUnique({
      where:{
        id:userId
      }
    })
    if (!organizer) throw new Error('Organizer not found')

    const newEvent = await db.event.create({ data:{...event, category: event.categoryId, organizer: userId }})
    revalidatePath(path)

    return JSON.parse(JSON.stringify(newEvent))
  } catch (error) {
    handleError(error)
  }
}

// GET ONE EVENT BY ID
export async function getEventById(eventId: string) {
  try {

    const event = await db.event.findUnique({
      where:{
        id:eventId
      }
    }) 
    //const event = await populateEvent(Event.findById(eventId))

    if (!event) throw new Error('Event not found')

    return JSON.parse(JSON.stringify(event))
  } catch (error) {
    handleError(error)
  }
}

// UPDATE
export async function updateEvent({ userId, event, path }: UpdateEventParams) {
  try {

    const eventToUpdate = await db.event.findUnique({
      where:{
        id:event._id
      }
    })
    /* if (!eventToUpdate || eventToUpdate.organizer.toHexString() !== userId) {
      throw new Error('Unauthorized or event not found')
    } */

    const updatedEvent = await db.event.update(
      {
       where: { id: event._id },
       data: { ...event, category: event.categoryId },
      }
    )
    revalidatePath(path)

    return JSON.parse(JSON.stringify(updatedEvent))
  } catch (error) {
    handleError(error)
  }
}

// DELETE
export async function deleteEvent({ eventId, path }: DeleteEventParams) {
  try {

    const deletedEvent = await db.event.delete({ where: { id: eventId } })
    if (deletedEvent) revalidatePath(path)
  } catch (error) {
    handleError(error)
  }
}

// GET ALL EVENTS
export async function getAllEvents({ query, limit = 6, page, category }: GetAllEventsParams) {
  try {
    const titleCondition = query ? { title: { contains: query, mode: 'insensitive' } } : {}
    let categoryCondition: any = {}

    if (category) {
      const categoryData = await db.category.findUnique({
        where: { name: category }
      })
      if (categoryData) {
        categoryCondition = { categoryId: categoryData.id }
      } else {
        categoryCondition = { categoryId: null } // No matching category found
      }
    }

    const conditions = {
      AND: [titleCondition, categoryCondition],
    }

    const skipAmount = (Number(page) - 1) * limit

    const events = await db.event.findMany({
      where: conditions,
      orderBy: { createdAt: 'desc' },
      skip: skipAmount,
      take: limit,
      include: {
        organizer: {
          select: { id: true, firstName: true, lastName: true },
        },
        category: {
          select: { id: true, name: true },
        },
      },
    })

    const eventsCount = await db.event.count({ where: conditions })

    return {
      data: events,
      totalPages: Math.ceil(eventsCount / limit),
    }
  } catch (error) {
    console.error(error)
    handleError(error)
  }
}

// CREATE
export async function createPost({ userId, event, path }: CreateEventParams) {
  try {

    const organizer = await db.user.findUnique({
      where:{
        id:userId
      }
    })
    if (!organizer) throw new Error('Organizer not found')

    const newPost = await db.event.create({ data:{...event, category: event.categoryId, organizer: userId }})
    revalidatePath(path)

    return JSON.parse(JSON.stringify(newPost))
  } catch (error) {
    handleError(error)
  }
}

// GET ONE EVENT BY ID
export async function getPostById(eventId: string) {
  try {

    const event = await db.event.findUnique({
      where:{
        id:eventId
      }
    }) 
    //const event = await populatePost(Post.findById(eventId))

    if (!event) throw new Error('Post not found')

    return JSON.parse(JSON.stringify(event))
  } catch (error) {
    handleError(error)
  }
}

// UPDATE
export async function updatePost({ userId, event, path }: {}) {
  try {

    const eventToUpdate = await db.event.findUnique({
      where:{
        id:event._id
      }
    })
    /* if (!eventToUpdate || eventToUpdate.organizer.toHexString() !== userId) {
      throw new Error('Unauthorized or event not found')
    } */

    const updatedPost = await db.event.update(
      {
       where: { id: event._id },
       data: { ...event, category: event.categoryId },
      }
    )
    revalidatePath(path)

    return JSON.parse(JSON.stringify(updatedPost))
  } catch (error) {
    handleError(error)
  }
}

// DELETE
export async function deletePost({ eventId, path }: {}) {
  try {

    const deletedPost = await db.event.delete({ where: { id: eventId } })
    if (deletedPost) revalidatePath(path)
  } catch (error) {
    handleError(error)
  }
}

// GET ALL EVENTS
export async function getAllPosts({ query="", limit = 6, page, category }: GetAllEventsParams) {
  try {
    const titleCondition = query ? { title: { contains: query, mode: 'insensitive' } } : {}
    let categoryCondition: any = {}

    if (category) {
      const categoryData = await db.category.findUnique({
        where: { name: category }
      })
      if (categoryData) {
        categoryCondition = { categoryId: categoryData.id }
      } else {
        categoryCondition = { categoryId: null } // No matching category found
      }
    }

    const conditions = {
      AND: [titleCondition, categoryCondition],
    }

    //const skipAmount = (Number(page) - 1) * limit

    const posts = await db.post.findMany({
      where: conditions,
      orderBy: { createdAt: 'desc' },
      /* skip: skipAmount,
      take: limit, */
      include: {
        author: {
          select: { id: true, name: true},
        },
        categories: {
          select: { categoryId: true },
        },
      },
    })

    const postsCount = await db.post.count({ where: conditions })

    return {
      data: posts,
      totalPages: Math.ceil(postsCount / limit),
    }
  } catch (error) {
    console.error(error)
    handleError(error)
  }
}

// GET EVENTS BY ORGANIZER
/* export async function getEventsByUser({ userId, limit = 6, page }: GetEventsByUserParams) {
  try {

    const conditions = { organizer: userId }
    const skipAmount = (page - 1) * limit

    const eventsQuery = Event.find(conditions)
      .sort({ createdAt: 'desc' })
      .skip(skipAmount)
      .limit(limit)

    const events = await populateEvent(eventsQuery)
    const eventsCount = await Event.countDocuments(conditions)

    return { data: JSON.parse(JSON.stringify(events)), totalPages: Math.ceil(eventsCount / limit) }
  } catch (error) {
    handleError(error)
  }
} */

// GET RELATED EVENTS: EVENTS WITH SAME CATEGORY
export async function getRelatedEventsByCategory({
  categoryId,
  eventId,
  limit = 3,
  page = 1,
}: GetRelatedEventsByCategoryParams) {
  try {
    const skipAmount = (Number(page) - 1) * limit

    const conditions = {
      AND: [
        { categoryId: categoryId },
        { id: { not: eventId } },
      ],
    }

    const events = await db.event.findMany({
      where: conditions,
      orderBy: { createdAt: 'desc' },
      skip: skipAmount,
      take: limit,
      include: {
        organizer: {
          select: { id: true, firstName: true, lastName: true },
        },
        category: {
          select: { id: true, name: true },
        },
      },
    })

    const eventsCount = await db.event.count({ where: conditions })

    return { data: events, totalPages: Math.ceil(eventsCount / limit) }
  } catch (error) {
    console.error(error)
    handleError(error)
  }
}

export const createCategory = async ({ categoryName }: CreateCategoryParams) => {
  try {

    const newCategory = await db.category.create({data: {name: categoryName} });

    return JSON.parse(JSON.stringify(newCategory));
  } catch (error) {
    handleError(error)
  }
}

export const getAllCategories = async () => {
  try {

    const categories = await db.category.findMany({});

    return JSON.parse(JSON.stringify(categories));
  } catch (error) {
    handleError(error)
  }
}