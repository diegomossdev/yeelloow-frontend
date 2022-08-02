import type { GetStaticPropsResult } from 'next';
import Head from 'next/head';
import { GetHomePage } from 'services/getHomePage.js';

import { Base } from 'templates/Front/Base';
import { Home as HomePage } from 'templates/Front/Home';

export async function getStaticProps(): Promise<GetStaticPropsResult<any>> {
  const { data } = await GetHomePage();

  return {
    props: {
      page: data,
    },
    revalidate: 180,
  };
}

export default function Index(props: any) {
  return (
    <>
      <Head>
        <title>{`+AH Festas e Eventos - Página inicial`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Base informations={props.page.informations}>
        <HomePage data={props.page} />
      </Base>
    </>
  );
}
