import React from 'react';
import Head from 'next/head';
import { requireAuthentication } from 'hocs/hoc-authentication';

import { Admin } from 'templates/Admin';
import { PageBanners } from 'templates/PageBanners';

export const getServerSideProps = requireAuthentication((context: any) => {
  const { req } = context;

  return {
    props: {},
  };
});

export default function Banners() {
  return (
    <>
      <Head>
        <title>Banners - Painel administrativo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Admin>
        <PageBanners />
      </Admin>
    </>
  );
}
