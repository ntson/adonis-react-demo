import React from 'react';
import { Head, usePage } from '@inertiajs/inertia-react';
import Nav from './Nav';
import Notice from './Notice';

const Layout = ({ children, title }) => {
  const {
    props: { notice },
  } = usePage();

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Nav />
      {/* @ts-ignore */}
      {notice ? <Notice type={notice.type} message={notice.message} /> : null}
      {children}
    </>
  );
};

export default Layout;
