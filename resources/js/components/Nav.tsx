import React from 'react';
import { Link, usePage } from '@inertiajs/inertia-react';
import Auth from './Auth';
import NavLink from './NavLink';

const Nav = () => {
  const {
    props: { authenticated },
  } = usePage();

  return (
    <nav className="flex justify-end gap-2 bg-gray-700 p-4 text-white">
      <Auth isVisible={!authenticated}>
        <NavLink to="/auth/login">Login</NavLink>
        <NavLink to="/auth/register">Create an account</NavLink>
      </Auth>

      <Auth isVisible={authenticated}>
        <Link
          href="/auth/logout"
          as="button"
          type="button"
          method="delete"
          className="rounded-md py-2 px-4 bg-red-500"
        >
          Logout
        </Link>
      </Auth>
    </nav>
  );
};

export default Nav;
