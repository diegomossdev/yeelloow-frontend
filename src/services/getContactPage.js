import { general as Api } from 'hooks/use-request/http';

export const GetContactPage = async () => {
  try {
    const { data } = await Api.get('api/page-contact/4', {
      headers: {},
    });
    return data;
  } catch (error) {
    return error.response;
  }
};
