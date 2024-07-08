import { Montserrat_Alternates } from 'next/font/google'
import { ThemeProvider } from '@/providers/theme-provider'
import ModalProvider from '@/providers/modal-provider'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as SonnarToaster } from '@/components/ui/sonner'
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
import { i18n, type Locale } from "@/i18n-config";

import { cn } from "@/lib/utils"
import "@/styles/globals.css"

import StyledJsxRegistry from './registry'
import { Metadata } from 'next'


const montserrat_Alternates = Montserrat_Alternates({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900", "100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-montserrat-alternates',
})

/* export const metadata: Metadata = {
  title: 'Donilab',
  description: 'Incubateur | Coworking | FabLab',
}


export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}
 */

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
          <StyledJsxRegistry>{children}</StyledJsxRegistry>
          <Toaster />
          <SonnarToaster position="bottom-left" />
          </ModalProvider>
        </ThemeProvider>
         
          </body>
        </html>
        </SessionProvider>
  )
}


