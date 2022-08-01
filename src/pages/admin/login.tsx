import React, { useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useAuth } from 'hooks/use-auth/use-auth.hook';

import { PageLogin } from 'templates/PageLogin';
import { hocLogin } from 'hocs/hoc-login';

export const getServerSideProps = hocLogin((context: any) => {
  const { req } = context;

  return {
    props: {},
  };
});

export default function Login() {
  return (
    <>
      <Head>
        <title>Login - Entrar no painel administrativo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageLogin />
    </>
  );
}
