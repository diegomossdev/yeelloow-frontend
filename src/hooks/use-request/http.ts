import Axios from 'axios';
import Cookies from 'universal-cookie';

const general = Axios.create({
  baseURL: process.env.APP_API_URL,
});

const handleRequest = (request: any) => {
  const cookies = new Cookies();

  const yeelloowSession = cookies.get('@yeelloowSessionEmail');

  if (yeelloowSession) {
    request.headers['x-access-token'] = yeelloowSession;
  }

  return request;
};

general.interceptors.request.use(
  (request) => handleRequest(request),
  (error) => Promise.reject(error)
);

export { general };
