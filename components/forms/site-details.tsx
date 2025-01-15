'use client'
import { Site } from '@prisma/client'
import { useForm } from 'react-hook-form'
import React, { useEffect, useState } from 'react'
import { SiteSchema } from "@/schemas";
import { useRouter } from 'next/navigation'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../ui/alert-dialog'
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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { useToast } from '../ui/use-toast'

import * as z from 'zod'
import FileUpload from '../global/file-uploader'
import { Input } from '../ui/input'

import {
  deleteSite,
  upsertSite,
} from '@/lib/queries'
import { Button } from '../ui/button'
import Loading from '../global/loading'

type Props = {
  data?: Partial<Site>
}


const SiteDetails = ({ data }: Props) => {
  const { toast } = useToast()
  const router = useRouter()
  const [deletingSite, setDeletingSite] = useState(false)
  const form = useForm<z.infer<typeof SiteSchema>>({
    mode: 'onChange',
    resolver: zodResolver(SiteSchema),
    defaultValues: {
      name: {
        fr:data?.name.fr||""
      },
      email: data?.email,
      phone: data?.phone,
      address: data?.address,
      city: data?.city,
      zipCode: data?.zipCode,
      state: data?.state,
      country: data?.country,
      logo: {
        url:data?.logo?.url||"/assets/logo192.png"
      },
    },
  })
  const isLoading = form.formState.isSubmitting

  useEffect(() => {
    if (data) {
      form.reset(data)
    }
  }, [data])

  const handleSubmit = async (values: z.infer<typeof SiteSchema>) => {
    try {
      let genId= data?.id ? data.id :values.id;
      const response = await upsertSite({
        id:genId,
        address: values.address,
        logo: values.logo,
        city: values.city,
        phone: values.phone,
        country: values.country,
        name: values.name,
        state: values.state,
        zipCode: values.zipCode,
        createdAt: new Date(),
        updatedAt: new Date(),
        email: values.email,
        description: null,
        slogan: null,
        featured_media: null,
        additionalPhone: '',
        postalCode: '',
        data: null,
        expertise: null,
        services: null,
        impact: null,
        status: 'ACTIVE'
      })

      if(response){
        toast({
          title: 'Site créé',
        })
        if (data?.id) return router.refresh();
          router.push(`/dashboard/sites/${genId}`)
      }
      /* toast({
        variant: 'destructive',
        title: 'Oppse!',
        description: 'impossible de créer votre site',
      }) */
      
    } catch (error) {
      console.log("error",error)
      toast({
        variant: 'destructive',
        title: 'Oppse!',
        description: 'impossible de créer votre site',
      })
    }
  }
  const handleDeleteSite = async () => {
    if (!data?.id) return
    setDeletingSite(true)

    try {
      const response = await deleteSite(data.id)
      toast({
        title: 'Site supprimé',
        description: 'Supprimé le site et tous les hubs',
      })
      router.push(`/dashboard/sites`);
    } catch (error) {
      console.log(error)
      toast({
        variant: 'destructive',
        title: 'Oppse!',
        description: 'impossible de supprimer votre site',
      })
    }
    setDeletingSite(false)
  }

  return (
    <AlertDialog>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Information du Site</CardTitle>
          <CardDescription>
          Créons un site pour un pays spécifique. Vous pouvez modifier les paramètres du site ultérieurement à partir de l'onglet Paramètres du site.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-4"
            >
              <FormField
                disabled={isLoading}
                control={form.control}
                name="logo.url"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Logo du site</FormLabel>
                    <FormControl>
                      <FileUpload
                        apiEndpoint="logo"
                        onChange={field.onChange}
                        value={field.value}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex md:flex-row gap-4">
                <FormField
                  disabled={isLoading}
                  control={form.control}
                  name="id"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Id du site </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Id du site (ex: Donilab Mali=>dml)"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
               
              </div>
              <div className="flex md:flex-row gap-4">
                <FormField
                  disabled={isLoading}
                  control={form.control}
                  name="name.fr"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Nom du site</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Nom du site"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Site Email</FormLabel>
                      <FormControl>
                        <Input
                         /*  readOnly */
                          placeholder="Email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex md:flex-row gap-4">
                <FormField
                  disabled={isLoading}
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Numéro de téléphone du site</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Numéro de téléphone"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                disabled={isLoading}
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Adresse</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="123 Ham..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex md:flex-row gap-4">
                <FormField
                  disabled={isLoading}
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Ville</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Ville"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  disabled={isLoading}
                  control={form.control}
                  name="state"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Region ou Etats</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Region ou Etats"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  disabled={isLoading}
                  control={form.control}
                  name="zipCode"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>code postal</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="code postal"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                disabled={isLoading}
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Pays</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Pays"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* {data?.id && (
                <div className="flex flex-col gap-2">
                  <FormLabel>Create A Goal</FormLabel>
                  <FormDescription>
                    ✨ Create a goal for your site. As your business grows
                    your goals grow too so dont forget to set the bar higher!
                  </FormDescription>
                  <NumberInput
                    defaultValue={data?.goal}
                    onValueChange={async (val) => {
                      if (!data?.id) return
                      await updateSiteDetails(data.id, { goal: val })
                      await saveActivityLogsNotification({
                        siteId: data.id,
                        description: `Updated the site goal to | ${val} Hub`,
                        hubId: undefined,
                      })
                      router.refresh()
                    }}
                    min={1}
                    className="bg-background !border !border-input"
                    placeholder="Hub Goal"
                  />
                </div>
              )} */}
              <Button
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? <Loading /> : 'Enregistrer les informations du site'}
              </Button>
            </form>
          </Form>

          {data?.id && (
            <div className="flex flex-row items-center justify-between rounded-lg border border-destructive gap-4 p-4 mt-4">
              <div>
                <div>Zone dangereuse</div> 
              </div>
              <div className="text-muted-foreground">
              La suppression de site ne peut pas être annulée. Cela supprimera également tous les hubs et toutes les données liées à leurs hubs. Les hubs n'auront plus accès aux entonnoirs, aux contacts, etc.
              </div>
              <AlertDialogTrigger
                disabled={isLoading || deletingSite}
                className="text-red-600 p-2 text-center mt-2 rounded-md hover:bg-red-600 hover:text-white whitespace-nowrap"
              >
                {deletingSite ? 'Suppression...' : 'Supprimer le site'}
              </AlertDialogTrigger>
            </div>
          )}
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-left">
              Êtes-vous absolument sûr ?
              </AlertDialogTitle>
              <AlertDialogDescription className="text-left">
              Cette action ne peut pas être annulée. Cela supprimera définitivement le
              compte du site et tous les hubs associés.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className="flex items-center">
              <AlertDialogCancel className="mb-2">Annuler</AlertDialogCancel>
              <AlertDialogAction
                disabled={deletingSite}
                className="bg-destructive hover:bg-destructive"
                onClick={handleDeleteSite}
              >
                Supprimer
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </CardContent>
      </Card>
    </AlertDialog>
  )
}

export default SiteDetails