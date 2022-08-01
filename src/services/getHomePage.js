import { general as Api } from 'hooks/use-request/http';

export const GetHomePage = async () => {
  try {
    const { data } = await Api.get('api/page-home/1', {
      headers: {},
    });
    return data;
  } catch (error) {
    return error.response;
  }
};
