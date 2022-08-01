import React from 'react';
import Head from 'next/head';
import { Content } from 'components/Admin/Content';

import { Admin } from 'templates/Admin';
import { PageInfos } from 'templates/PageInfos';
import { requireAuthentication } from 'hocs/hoc-authentication';
import Link from 'next/link';
import { ArrowLeftOutlined } from '@ant-design/icons';

export const getServerSideProps = requireAuthentication((context: any) => {
  const { req } = context;

  return {
    props: {},
  };
});

export default function Eventos() {
  const buttonAction = (
    <Link href="/admin/dashboard">
      <a>
        <ArrowLeftOutlined />
        Voltar
      </a>
    </Link>
  );

  return (
    <>
      <Head>
        <title>Informacoes Gerais - Painel administrativo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Admin>
        <Content title="Informações gerais" buttonAction={buttonAction}>
          <PageInfos />
        </Content>
      </Admin>
    </>
  );
}
