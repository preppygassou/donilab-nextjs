'use client'
import {
  AuthUserWithSiteSigebarOptionsHubs,
  UserWithPermissionsAndHubs,
} from '@/lib/types'
import { useModal } from '@/providers/modal-provider'
import { Hub, User } from '@prisma/client'
import React, { useEffect, useState } from 'react'
import { useToast } from '../ui/use-toast'
import { useRouter } from 'next/navigation'
import {
  changeUserPermissions,
  getAuthUserDetails,
  getUserPermissions,
  saveActivityLogsNotification,
  updateUser,
} from '@/lib/queries'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import FileUpload from '../global/file-uploader'
import { Input } from '../ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { Button } from '../ui/button'
import Loading from '../global/loading'
import { Separator } from '../ui/separator'
import { Switch } from '../ui/switch'
import { v4 } from 'uuid'

type Props = {
  id: string | null
  type: 'site' | 'hub'
  userData?: Partial<User>
  Hubs?: Hub[]
}

const UserDetails = ({ id, type, Hubs, userData }: Props) => {
  const [HubPermissions, setHubsPermissions] =
    useState<UserWithPermissionsAndHubs | null>(null)

  const { data, setClose } = useModal()
  const [roleState, setRoleState] = useState('')
  const [loadingPermissions, setLoadingPermissions] = useState(false)
  const [authUserData, setAuthUserData] =
    useState<AuthUserWithSiteSigebarOptionsHubs | null>(null)
  const { toast } = useToast()
  const router = useRouter()

  //Get authUSerDtails

  useEffect(() => {
    if (data.user) {
      const fetchDetails = async () => {
        const response = await getAuthUserDetails()
        if (response) setAuthUserData(response)
      }
      fetchDetails()
    }
  }, [data])

  const userDataSchema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    avatarUrl: z.string(),
    role: z.enum([
      'SITE_MANAGER',
      'SITE_ADMIN',
      'HUB_USER',
      'HUB_GUEST',
    ]),
  })

  const form = useForm<z.infer<typeof userDataSchema>>({
    resolver: zodResolver(userDataSchema),
    mode: 'onChange',
    defaultValues: {
      name: userData ? userData.name : data?.user?.name,
      email: userData ? userData.email : data?.user?.email,
      avatarUrl: userData ? userData.avatarUrl : data?.user?.avatarUrl,
      role: userData ? userData.role : data?.user?.role,
    },
  })

  useEffect(() => {
    if (!data.user) return
    const getPermissions = async () => {
      if (!data.user) return
      const permission = await getUserPermissions(data.user.id)
      setHubsPermissions(permission)
    }
    getPermissions()
  }, [data, form])

  useEffect(() => {
    if (data.user) {
      form.reset(data.user)
    }
    if (userData) {
      form.reset(userData)
    }
  }, [userData, data])

  const onChangePermission = async (
    hubId: string,
    val: boolean,
    permissionsId: string | undefined
  ) => {
    if (!data.user?.email) return
    setLoadingPermissions(true)
    const response = await changeUserPermissions(
      permissionsId ? permissionsId : v4(),
      data.user.email,
      hubId,
      val
    )
    if (type === 'site') {
      await saveActivityLogsNotification({
        siteId: authUserData?.Site?.id,
        description: `Gave ${userData?.name} access to | ${
          HubPermissions?.Permissions.find(
            (p) => p.hubId === hubId
          )?.Hub.name
        } `,
        hubId: HubPermissions?.Permissions.find(
          (p) => p.hubId === hubId
        )?.Hub.id,
      })
    }

    if (response) {
      toast({
        title: 'Success',
        description: 'The request was successfull',
      })
      if (HubPermissions) {
        HubPermissions.Permissions.find((perm) => {
          if (perm.hubId === hubId) {
            return { ...perm, access: !perm.access }
          }
          return perm
        })
      }
    } else {
      toast({
        variant: 'destructive',
        title: 'Failed',
        description: 'Could not update permissions',
      })
    }
    router.refresh()
    setLoadingPermissions(false)
  }

  const onSubmit = async (values: z.infer<typeof userDataSchema>) => {
    if (!id) return
    if (userData || data?.user) {
      const updatedUser = await updateUser(values)
      authUserData?.Site?.Hub.filter((hub) =>
        authUserData.Permissions.find(
          (p) => p.hubId === hub.id && p.access
        )
      ).forEach(async (Hub) => {
        await saveActivityLogsNotification({
          siteId: undefined,
          description: `Updated ${userData?.name} information`,
          hubId: Hub.id,
        })
      })

      if (updatedUser) {
        toast({
          title: 'Success',
          description: 'Update User Information',
        })
        setClose()
        router.refresh()
      } else {
        toast({
          variant: 'destructive',
          title: 'Oppse!',
          description: 'Could not update user information',
        })
      }
    } else {
      console.log('Error could not submit')
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>User Details</CardTitle>
        <CardDescription>Add or update your information</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <FormField
              disabled={form.formState.isSubmitting}
              control={form.control}
              name="avatarUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Profile picture</FormLabel>
                  <FormControl>
                    <FileUpload
                      apiEndpoint="avatar"
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              disabled={form.formState.isSubmitting}
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>User full name</FormLabel>
                  <FormControl>
                    <Input
                      required
                      placeholder="Full Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              disabled={form.formState.isSubmitting}
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      readOnly={
                        userData?.role === 'SITE_MANAGER' ||
                        form.formState.isSubmitting
                      }
                      placeholder="Email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              disabled={form.formState.isSubmitting}
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel> User Role</FormLabel>
                  <Select
                    disabled={field.value === 'SITE_MANAGER'}
                    onValueChange={(value) => {
                      if (
                        value === 'HUB_USER' ||
                        value === 'HUB_GUEST'
                      ) {
                        setRoleState(
                          'You need to have Hubs to assign Hub access to team members.'
                        )
                      } else {
                        setRoleState('')
                      }
                      field.onChange(value)
                    }}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select user role..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="SITE_ADMIN">
                        Site Admin
                      </SelectItem>
                      {(data?.user?.role === 'SITE_MANAGER' ||
                        userData?.role === 'SITE_MANAGER') && (
                        <SelectItem value="SITE_MANAGER">
                          Site Owner
                        </SelectItem>
                      )}
                      <SelectItem value="HUB_USER">
                        Sub Account User
                      </SelectItem>
                      <SelectItem value="HUB_GUEST">
                        Sub Account Guest
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-muted-foreground">{roleState}</p>
                </FormItem>
              )}
            />

            <Button
              disabled={form.formState.isSubmitting}
              type="submit"
            >
              {form.formState.isSubmitting ? <Loading /> : 'Save User Details'}
            </Button>
            {authUserData?.role === 'SITE_MANAGER' && (
              <div>
                <Separator className="my-4" />
                <FormLabel> User Permissions</FormLabel>
                <FormDescription className="mb-4">
                  You can give Sub Account access to team member by turning on
                  access control for each Sub Account. This is only visible to
                  site owners
                </FormDescription>
                <div className="flex flex-col gap-4">
                  {Hubs?.map((Hub) => {
                    const HubPermissionsDetails =
                      HubPermissions?.Permissions.find(
                        (p) => p.hubId === Hub.id
                      )
                    return (
                      <div
                        key={Hub.id}
                        className="flex items-center justify-between rounded-lg border p-4"
                      >
                        <div>
                          <p>{Hub.name}</p>
                        </div>
                        <Switch
                          disabled={loadingPermissions}
                          checked={HubPermissionsDetails?.access}
                          onCheckedChange={(permission) => {
                            onChangePermission(
                              Hub.id,
                              permission,
                              HubPermissionsDetails?.id
                            )
                          }}
                        />
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default UserDetails