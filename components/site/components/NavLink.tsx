import { useRouter,usePathname } from 'next/navigation';
import Link from "next/link";
import React from "react";
import { i18n } from '@/i18n-config';



const NavLink = ({ href, exact, children, ...props }) =>{
  const pathname = usePathname();
  const pathnameWithoutLocale = pathname.split('/').slice(2).join('/') || '/';
  const hrefWithoutLocale = href;
  
  const isActive =
    pathnameWithoutLocale.startsWith(href.toString());

 /*  if (isActive) {
    props.className = `${props.className ? props.className : ''} active`.trim();
  } */

 function normalizePath(path) {
    const segments = path.split('/').filter(segment => segment);
    if (segments.length > 0 && i18n.locales.includes(segments[0])) {
      segments.shift();
    }
    return `/${segments.join('/')}`;
  }
  
 function isActiveLink(pathname, href) {
    const normalizedPathname = normalizePath(pathname);
    const normalizedHref = normalizePath(href);
  
    
  // Skip adding active class for home and contact pages
  if (normalizedHref === '/' || normalizedHref === '/contact') {
    return false;
  }
  
    return normalizedPathname.startsWith(normalizedHref);
  }

  const active = isActiveLink(pathname, href);

  if (active) {
    props.className = `${props.className ? props.className : ''} active`.trim();
  }
  return (
      <Link href={href} {...props}>
        {children}
      </Link>
  );
}

export default NavLink