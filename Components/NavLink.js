import { useRouter } from 'next/router';
import Link from "next/link";
import {withRouter} from "next/router";
import {Children} from "react";
import React from "react";



const NavLink = ({ href, exact, children, ...props }) =>{
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href && href !==  "/contact": pathname.startsWith(href);
  const isContact = exact ? pathname === "contact" : pathname.startsWith(href);

  if (isActive) {
      props.className += ' active';
  }


  return (
      <Link href={href}>
          <a {...props}>
              {children}
          </a>
      </Link>
  );
}

export default NavLink