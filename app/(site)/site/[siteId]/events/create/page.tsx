import EventForm from '@/components/forms/EventForm'
import { currentUser } from '@/lib/auth'
import React from 'react'
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
const Page = async () => {
  const user = await currentUser()
  return (
    <ScrollArea className="h-full">
      <Card className="lg:w-[1000px] mx-auto sm:container bg-primary/[3%] dark:bg-dark">
        <CardHeader>
          <p className="text-2xl font-semibold text-center">Ajouter une nouvelle Evénement</p>
        </CardHeader>
        <CardContent>
        <EventForm userId={user?.id} type="Create" />
      </CardContent>

      </Card>
    </ScrollArea>
  )
}

export default Page