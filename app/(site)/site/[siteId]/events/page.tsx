import React from 'react'
import { EventTableView } from '@/components/tables/event-tables/event-table';
import { getAllPosts } from '@/lib/queries';

const Page =async (params: { siteId: string }) => {
  const data= await getAllPosts({query:""})
  console.log("data",data)
  return (
    <>
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
        <EventTableView data={[]} />
      </div>
    </>
  )
}

export default Page