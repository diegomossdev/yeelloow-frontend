import { general as Api } from 'hooks/use-request/http';

export const GetEvents = async () => {
  try {
    const { data } = await Api.get(`api/events`, {
      headers: {},
    });
    return data;
  } catch (error) {
    return error.response;
  }
};

export const GetEventPage = async (id) => {
  try {
    const { data } = await Api.get(`api/event/${id}`, {
      headers: {},
    });
    return data;
  } catch (error) {
    return error.response;
  }
};
