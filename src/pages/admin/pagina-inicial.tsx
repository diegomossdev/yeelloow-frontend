import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { requireAuthentication } from 'hocs/hoc-authentication';

import { Admin } from 'templates/Admin';
import { PageHome } from 'templates/PageHome';
import { Content } from 'components/Admin/Content';
import { PlusCircleOutlined } from '@ant-design/icons';

export const getServerSideProps = requireAuthentication((context: any) => {
  const { req } = context;

  return {
    props: {},
  };
});

const PaginaInicial = () => {
  const buttonAction = (
    <Link href="/dashboard">
      <a>
        <PlusCircleOutlined />
        Voltar
      </a>
    </Link>
  );

  return (
    <>
      <Head>
        <title>Página Inicial - Painel administrativo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Admin>
        <Content title="Página inicial" buttonAction={buttonAction}>
          <PageHome />
        </Content>
      </Admin>
    </>
  );
};

export default PaginaInicial;
