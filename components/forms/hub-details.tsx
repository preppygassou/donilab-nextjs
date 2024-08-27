'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { v4 } from 'uuid'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { useRouter } from 'next/navigation'

import { Input } from '@/components/ui/input'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'

import FileUpload from '../global/file-upload'
import { Site,Hub } from '@prisma/client'
import { useToast } from '../ui/use-toast'
import { saveActivityLogsNotification, upsertHub } from '@/lib/queries'
import { useEffect } from 'react'
import Loading from '../global/loading'
import { useModal } from '@/providers/modal-provider'

const formSchema = z.object({
  title:z.object({fr:z.string().min(2, { message: 'Le nom du site doit comporter au moins 2 caractères.' })}),
  email: z.string(),
  phone: z.string().min(1),
  address: z.string(),
  city: z.string(),
  logo: z.any().optional(),
  zipCode: z.string(),
  state: z.string(),
  country: z.string(),
})

//CHALLENGE Give access for Hub Guest they should see a different view maybe a form that allows them to create tickets

//CHALLENGE layout.tsx oonly runs once as a result if you remove permissions for someone and they keep navigating the layout.tsx wont fire again. solution- save the data inside metadata for current user.

interface HubDetailsProps {
  //To add the hub to the site
  siteDetails: Site
  details?: Partial<Hub>
  userId: string
  userName: string
}

const HubDetails: React.FC<HubDetailsProps> = ({
  details,
  siteDetails,
  userId,
  userName,
}) => {
  const { toast } = useToast()
  const { setClose } = useModal()
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title:{
        fr:details?.title.fr||""
      },
      email: details?.email,
      phone: details?.phone,
      address: details?.address,
      city: details?.city,
      zipCode: details?.zipCode,
      state: details?.state,
      country: details?.country,
      logo: {
        url:details?.logo?.url||"/assets/logo192.png"
      },
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await upsertHub({
        id: details?.id ? details.id : v4(),
        address: values.address,
        logo: values.logo,
        city: values.city,
        phone: values.phone,
        country: values.country,
        title: values.title,
        state: values.state,
        zipCode: values.zipCode,
        createdAt: new Date(),
        updatedAt: new Date(),
        email: values.email,
        siteId: siteDetails.id,
        description: null,
        featured_media: null,
        galerie: null,
        summary: null,
        specificities: null,
        services: null,
        data: null,
        slug: '',
        additionalPhone: '',
        postalCode: '',
        status: 'ACTIVE'
      })
      if (!response) throw new Error('Aucune réponse du serveur')
      await saveActivityLogsNotification({
        siteId: response.siteId,
        description: `${userName} | hub mis à jour | ${response.name}`,
        hubId: response.id,
      })

      toast({
        title: 'Détails du hub enregistrés',
        description: 'Les détails de votre hub ont été enregistrés avec succès.',
      })

      setClose()
      router.refresh()
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Oppse!',
        description: "Impossible d'enregistrer les détails du hub.",
      })
    }
  }

  useEffect(() => {
    if (details) {
      form.reset(details)
    }
  }, [details])

  const isLoading = form.formState.isSubmitting
  //CHALLENGE Create this form.
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Informations sur le hub</CardTitle>
        <CardDescription>Veuillez saisir les détails du Hub</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <FormField
              disabled={isLoading}
              control={form.control}
              name="logo.url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Logo du Hub</FormLabel>
                  <FormControl>
                    <FileUpload
                      apiEndpoint="logo"
                      value={field.value}
                      onChange={field.onChange}
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
                name="title.fr"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Le Nom du Hub en Francais</FormLabel>
                    <FormControl>
                      <Input
                        required
                        placeholder="Le Nom du Hub"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* <FormField
                disabled={isLoading}
                control={form.control}
                name="name.en"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Le Nom du Hub en Anglais</FormLabel>
                    <FormControl>
                      <Input
                        required
                        placeholder="Le Nom du Hub"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}
              <FormField
                disabled={isLoading}
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
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
                    <FormLabel>Numéro de téléphone du hub</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Phone"
                        required
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
                      required
                      placeholder="123 st..."
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
                        required
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
                    <FormLabel>État ou Region</FormLabel>
                    <FormControl>
                      <Input
                        required
                        placeholder="État"
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
                    <FormLabel>Code postal</FormLabel>
                    <FormControl>
                      <Input
                        required
                        placeholder="Code postal"
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
                      required
                      placeholder="Pays"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? <Loading /> : 'Sauvegarder les Informations du Hub'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default HubDetails