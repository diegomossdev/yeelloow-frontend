import Head from 'next/head';
import React from 'react';
import { requireAuthentication } from 'hocs/hoc-authentication';

import { Admin } from 'templates/Admin';
import { AddEvento } from 'templates/PageEventos/AddEvento';
import { Content } from 'components/Admin/Content';

export const getServerSideProps = requireAuthentication((context: any) => {
  const { req } = context;

  return {
    props: {},
  };
});

export default function AdicionarEvento() {
  return (
    <>
      <Head>
        <title>Adicionar evento - Painel administrativo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Admin>
        <Content title="Adicionar evento">
          <AddEvento />
        </Content>
      </Admin>
    </>
  );
}
