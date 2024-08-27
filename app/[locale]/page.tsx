import Home from '@/components/site/pages/home';

export default async function Page({ params: { locale } }:{params: { locale:string }}) {
 
  return (
    <>
      <Home/>
    </>
  )
}

