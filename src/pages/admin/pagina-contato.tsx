import Head from 'next/head';
import React from 'react';

import { Admin } from 'templates/Admin';

const PaginaContato = () => {
  return (
    <>
      <Head>
        <title>Pagina Contato - Painel administrativo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Admin>
        <div>Pagina Contato</div>
      </Admin>
    </>
  );
};

export default PaginaContato;
