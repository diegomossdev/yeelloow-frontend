import { Content } from 'components/Admin/Content';
import { requireAuthentication } from 'hocs/hoc-authentication';
import Head from 'next/head';
import React from 'react';

import { Admin } from 'templates/Admin';
import { AddBanner } from 'templates/PageBanners/AddBanner';

export const getServerSideProps = requireAuthentication((context: any) => {
  const { req } = context;

  return {
    props: {},
  };
});

export default function AdicionarBanner() {
  return (
    <>
      <Head>
        <title>Adicionar Banner - Painel administrativo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Admin>
        <Content title="Adicionar banner">
          <AddBanner />
        </Content>
      </Admin>
    </>
  );
}
