import { PlusCircleOutlined } from '@ant-design/icons';
import { Content } from 'components/Admin/Content';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import { Admin } from 'templates/Admin';
import { PageQuemSomos } from 'templates/PageQuemSomos';

const PaginaQuemSomos = () => {
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
        <title>Página Quem Somos - Painel administrativo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Admin>
        <Content title="Página Quem Somos" buttonAction={buttonAction}>
          <PageQuemSomos />
        </Content>
      </Admin>
    </>
  );
};

export default PaginaQuemSomos;
