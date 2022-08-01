import type { GetStaticPropsResult } from 'next';
import Head from 'next/head';
import { GetCompanyPage } from 'services/getCompanyPage.js';

import { Base } from 'templates/Front/Base';
import { QuemSomosPage } from 'templates/Front/QuemSomosPage';

export async function getStaticProps(): Promise<GetStaticPropsResult<any>> {
  const { data } = await GetCompanyPage();

  return {
    props: {
      page: data,
    },
    revalidate: 1800,
  };
}

export default function Index(props: any) {
  return (
    <>
      <Head>
        <title>{`+AH Festas e Eventos - Quem somos`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Base informations={props.page.informations}>
        <QuemSomosPage data={props.page} />
      </Base>
    </>
  );
}
