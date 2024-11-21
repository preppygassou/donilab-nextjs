"use client";
import { Button } from '@/components/ui/button';
import React, { useState, useTransition } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Loading from '@/components/global/loading';
import ReactQuill from "react-quill";
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { postFormSchema } from '@/schemas';
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";



const Page = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  
  const [imageLoading, setImageLoading] = useState<boolean>(false);
  const { data: session } = useSession();
  const router = useRouter();

  async function handleBlogImageChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    /* if (!event.target.files) return;
    setImageLoading(true);
    const saveImageToFirebase: any = await handleImageSaveToFireBase(
      event.target.files[0]
    );

    if (saveImageToFirebase !== "") {
      setImageLoading(false);
      console.log(saveImageToFirebase, "saveImageToFirebase");
      setFormData({
        ...formData,
        image: saveImageToFirebase,
      });
    } */
  }

  async function handleSaveBlogPost() {
    /* console.log(formData);

    const res = await fetch("/api/blog-post/add-post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        userid: session?.user?.name,
        userimage: session?.user?.image,
        comments: [],
      }),
    });

    const data = await res.json();

    console.log(data, "data123");

    if (data && data.success) {
      setFormData(initialBlogFormData)
      router.push("/blogs");
    } */
  }

  const form = useForm<z.infer<typeof postFormSchema>>({
    resolver: zodResolver(postFormSchema),
    defaultValues: {
      /*  password: undefined,
       newPassword: undefined,
       name: user?.name || undefined,
       email: user?.email || undefined,
       role: user?.role || undefined,
       isTwoFactorEnabled: user?.isTwoFactorEnabled || undefined, */
    },
  });

  const onSubmit = (values: z.infer<typeof postFormSchema>) => {
    startTransition(() => {
      /* settings(values)
        .then((data) => {
          if (data.error) {
            setError(data.error);
          }

          if (data.success) {
            update();
            setSuccess(data.success);
          }
        })
        .catch(() => setError("Une erreur s'est produite !")); */
    });
  };

  return (
    <ScrollArea className="h-full">
      <Card className="lg:w-[1000px] mx-auto sm:container bg-primary/[3%] dark:bg-dark">
        <CardHeader>
          <p className="text-2xl font-semibold text-center">Ajouter une nouvelle programme</p>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="space-y-4">
                <FormItem>
                  <div className={`w-1/2`}>
                    <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                      Définir le logo
                    </label>

                    <div className="flex items-center justify-center w-full">
                      <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                          </svg>
                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input
                          id="dropzone-file"
                          accept="image/*"
                          max={1000000}
                          onChange={handleBlogImageChange}
                          type="file" className="hidden"
                        />
                      </label>
                    </div>
                  </div>
                  {imageLoading ? (
                    <div className="w-1/2">
                      <Loading />
                    </div>
                  ) : null}
                </FormItem>
                <FormField
                  control={form.control}
                  name="title.fr"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Titre en Fr</FormLabel>
                      <FormControl>
                        <Input
                          className="bg-white w-full mb-8 rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                          {...field}
                          placeholder="John Doe"
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="title.en"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Titre en En</FormLabel>
                      <FormControl>
                        <Input
                          className="bg-white w-full mb-8 rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                          {...field}
                          placeholder="John Doe"
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="content.fr"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Decription en Fr</FormLabel>
                      <FormControl>
                        {/* <Input
                       className="bg-white w-full mb-8 rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        {...field}
                        placeholder="John Doe"
                        disabled={isPending}
                      /> */}
                        <ReactQuill

                          className="bg-white rounded-md border border-input w-full text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"

                          value={field.value}
                          onChange={field.onChange}
                          placeholder="Decription en Fr..."
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="content.en"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Decription en EN</FormLabel>
                      <FormControl>
                        {/* <Input
                       className="bg-white w-full mb-8 rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        {...field}
                        placeholder="John Doe"
                        disabled={isPending}
                      /> */}
                        <ReactQuill

                          className="bg-white rounded-md border border-input w-full text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"

                          value={field.value}
                          onChange={field.onChange}
                          placeholder="Decription en EN..."
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="types"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>les types</FormLabel>
                      <Select

                        disabled={isPending}
                        onValueChange={field.onChange}
                      /* defaultValue={field.value} */
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-white">
                          {/* <SelectItem value={UserRole.ADMIN}>Admin</SelectItem>
                        <SelectItem value={UserRole.USER}>User</SelectItem>
                        <SelectItem value={UserRole.SITE_MANAGER}>Manager Donilab</SelectItem>
                        <SelectItem value={UserRole.HUB_MANAGER}>Hub Manager</SelectItem> */}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="hub"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Le hub organisataire</FormLabel>
                      <Select

                        disabled={isPending}
                        onValueChange={field.onChange}
                      /* defaultValue={field.value} */
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-white">
                          {/* <SelectItem value={UserRole.ADMIN}>Admin</SelectItem>
                        <SelectItem value={UserRole.USER}>User</SelectItem>
                        <SelectItem value={UserRole.SITE_MANAGER}>Manager Donilab</SelectItem>
                        <SelectItem value={UserRole.HUB_MANAGER}>Hub Manager</SelectItem> */}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="excerpt.fr"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Resumer en FR</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Resumer" {...field} className="bg-white w-full resize-none rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="excerpt.en"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Resumer en EN</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Resumer" {...field} className="bg-white w-full resize-none rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

              </div>
              <FormError message={error} />
              <FormSuccess message={success} />
              <div className="flex flex-row justify-between" role="group">
                <Button disabled={isPending} type="submit">
                  Publier
                </Button>
              </div>

            </form>
          </Form>
        </CardContent>

      </Card>
    </ScrollArea>
  )
}

export default Page