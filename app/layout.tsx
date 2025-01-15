import { Montserrat_Alternates } from 'next/font/google'
import { ThemeProvider } from '@/providers/theme-provider'
import ModalProvider from '@/providers/modal-provider'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as SonnarToaster } from '@/components/ui/sonner'
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
import 'react-quill/dist/quill.snow.css';

import { cn } from "@/lib/utils"
import "@/styles/globals.css"
import "@/public/fonts/font-awesome/css/all.min.css"

import StyledJsxRegistry from './registry'
import { Metadata } from 'next'
import { Providers } from '@/providers/query-provider'


const montserrat_Alternates = Montserrat_Alternates({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900", "100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-montserrat-alternates',
})

export const metadata: Metadata = {
  title: 'Donilab',
  description: 'Incubateur | Coworking | FabLab',
}


export default async function RootLayout({
  children,
 
}: {
  children: React.ReactNode,

}) {
  const session = await auth();

  return (
   <SessionProvider session={session}>
        <html suppressHydrationWarning>
          <body 
           className={cn(
            montserrat_Alternates.variable,
          )}>
        
        <ThemeProvider
          attribute="class"
          defaultTheme="ligth"
          enableSystem
          disableTransitionOnChange
        >
          <ModalProvider>
          <Providers>
          <StyledJsxRegistry>
            {children}
          </StyledJsxRegistry>
          <Toaster />
          <SonnarToaster position="bottom-left" />
            </Providers>
          </ModalProvider>
        </ThemeProvider>
         
          </body>
        </html>
        </SessionProvider>
  )
}


