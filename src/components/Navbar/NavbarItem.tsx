import Link from 'next/link';
import React from 'react';

interface NavbarItemProps {
  href: string;
  name: string;
}

function NavbarItem({ href, name }: NavbarItemProps) {
  return (
    <li className="drop-shadow-2xl">
      <Link href={href}>
        <a className="mx-3 flex items-center border-b border-gray-100 py-2 text-xs font-bold uppercase leading-snug text-slate-50 hover:opacity-75">
          <span>{name}</span>
        </a>
      </Link>
    </li>
  );
}

export default NavbarItem;
