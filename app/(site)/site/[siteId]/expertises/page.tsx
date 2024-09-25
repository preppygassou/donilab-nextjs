import React from 'react'
import { PostTableView } from '@/components/tables/post-tables/post-table';

const Page = (params: { siteId: string }) => {
  const data= [{title:"fkf"}]
  return (
    <>
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
        <PostTableView data={data} />
      </div>
    </>
  )
}

export default Page