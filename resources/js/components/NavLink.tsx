import React from 'react';
import { Link } from '@inertiajs/inertia-react';

const NavLink = ({ children, to }) => {
  return (
    <Link href={to} className="rounded-md py-2 px-4 hover:underline">
      {children}
    </Link>
  );
};

export default NavLink;
