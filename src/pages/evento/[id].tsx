import type { GetStaticPropsResult, NextPageContext } from 'next';
import Head from 'next/head';
import { GetEventPage } from 'services/getEventPage';

import { Base } from 'templates/Front/Base';
import { EventPage } from 'templates/Front/EventPage';

interface Context extends NextPageContext {
  params: {
    id: string;
  };
}

export async function getServerSideProps(
  context: Context
): Promise<GetStaticPropsResult<any>> {
  const { id } = context.query;
  const { data } = await GetEventPage(id);

  const telefoneInfo = data?.informations?.find(
    (info: any) => info.key === 'telefone'
  );

  return {
    props: {
      page: data,
      whatsapp: telefoneInfo?.value,
    },
  };
}

export default function Index(props: any) {
  return (
    <>
      <Head>
        <title>{`+AH Festas e Eventos - Evento`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Base informations={props.page.informations}>
        <EventPage data={props.page.event} whatsapp={props.whatsapp} />
      </Base>
    </>
  );
}
