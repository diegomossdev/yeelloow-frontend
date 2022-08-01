import { general as Api } from 'hooks/use-request/http';

export const GetCompanyPage = async () => {
  try {
    const { data } = await Api.get('api/page-company/2', {
      headers: {},
    });
    return data;
  } catch (error) {
    return error.response;
  }
};
