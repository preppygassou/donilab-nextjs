import React from 'react'
import { ImpactTableView } from '@/components/tables/impact-tables/impact-table';

const Page = (params: { siteId: string }) => {
  const data= [{title:"fkf"}]
  return (
    <>
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
        <ImpactTableView data={data} />
      </div>
    </>
  )
}

export default Page