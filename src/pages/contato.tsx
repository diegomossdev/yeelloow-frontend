import type { GetStaticPropsResult } from 'next';
import Head from 'next/head';
import { GetContactPage } from 'services/getContactPage';

import { Base } from 'templates/Front/Base';
import { ContatoPage } from 'templates/Front/ContatoPage';

export async function getStaticProps(): Promise<GetStaticPropsResult<any>> {
  const { data } = await GetContactPage();

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
        <title>{`+AH Festas e Eventos - Contato`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Base informations={props.page.informations}>
        <ContatoPage data={props.page} />
      </Base>
    </>
  );
}
