import { requireAuthentication } from 'hocs/hoc-authentication';
import Head from 'next/head';
import React from 'react';

import { Admin } from 'templates/Admin';

export const getServerSideProps = requireAuthentication((context: any) => {
  const { req } = context;

  return {
    props: {},
  };
});

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard - Painel administrativo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Admin>
        <div>Dashboard</div>
      </Admin>
    </>
  );
}
