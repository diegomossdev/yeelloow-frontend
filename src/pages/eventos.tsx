import type { GetStaticPropsResult } from 'next';
import Head from 'next/head';
import { GetEvents } from 'services/getEventPage';
import { EventsPage } from 'templates/Front/EventPage/events';

import { Base } from 'templates/Front/Base';

export async function getStaticProps(): Promise<GetStaticPropsResult<any>> {
  const { data } = await GetEvents();

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
        <title>{`+AH Festas e Eventos - Eventos`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Base informations={props.page.informations}>
        <EventsPage data={props.page.events} />
      </Base>
    </>
  );
}
