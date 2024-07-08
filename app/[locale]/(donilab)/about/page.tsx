import { Metadata } from 'next';
import About from '@/components/site/pages/about';


export const metadata: Metadata = {
  title: 'Donilab | About',
  description: 'A propos de Donilab',
}

export default async function Page({ params: { locale } }:{params: { locale:string }}) {
  
  return (
      <About/>
  )
}