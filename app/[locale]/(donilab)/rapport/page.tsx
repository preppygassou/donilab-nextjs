import Rapport from '@/components/site/pages/rapport';


export default async function Page({ params: { locale } }:{params: { locale:string }}) {
  
  return (
    <>
      <Rapport/>
    </>
  )
}