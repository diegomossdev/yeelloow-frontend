import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { requireAuthentication } from 'hocs/hoc-authentication';

import { Admin } from 'templates/Admin';
import { PageEventos } from 'templates/PageEventos';
import { Content } from 'components/Admin/Content';
import { PlusCircleOutlined } from '@ant-design/icons';

export const getServerSideProps = requireAuthentication((context: any) => {
  const { req } = context;

  return {
    props: {},
  };
});

export default function Eventos() {
  const buttonAction = (
    <Link href="/admin/adicionar-evento">
      <a>
        <PlusCircleOutlined />
        Adicionar evento
      </a>
    </Link>
  );

  return (
    <>
      <Head>
        <title>Eventos - Painel administrativo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Admin>
        <Content title="Eventos" buttonAction={buttonAction}>
          <PageEventos />
        </Content>
      </Admin>
    </>
  );
}
