import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { NextPageContext } from 'next';
import { requireAuthentication } from 'hocs/hoc-authentication';

import { Admin } from 'templates/Admin';
import { EditEvento } from 'templates/PageEventos/EditEvento';
import { Content } from 'components/Admin/Content';
import { LeftOutlined } from '@ant-design/icons';

// import * as S from "./styles";

interface Context extends NextPageContext {
  params: {
    id: number;
  };
}

type EventoProps = {
  id: number;
};

export const getServerSideProps = requireAuthentication((context: Context) => {
  const { id } = context.query;

  return {
    props: {
      id,
    },
  };
});

export default function Evento(props: EventoProps) {
  const buttonAction = (
    <Link href="/admin/eventos">
      <a>
        <LeftOutlined />
        Voltar para eventos
      </a>
    </Link>
  );

  return (
    <>
      <Head>
        <title>Editar evento - Painel administrativo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Admin>
        <Content title="Editar evento" buttonAction={buttonAction}>
          <EditEvento id={props.id} />
        </Content>
      </Admin>
    </>
  );
}
