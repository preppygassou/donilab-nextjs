import { Metadata } from 'next';
import Hubs from "@/components/site/pages/hubs/page";

export const metadata: Metadata = {
  title: 'Donilab | Hubs',
  description: 'Les Hubs',
}

export default async function Page({ params: { locale } }:{params: { locale:string }}) {

  return (
      <Hubs/>
  )
}