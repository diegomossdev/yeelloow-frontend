import axios from 'axios';

axios.defaults.headers.common['Content-Type'] =
  'application/json;charset=UTF-8';

const parseCookie = (str: any) =>
  str
    .split(';')
    .map((v: any) => v.split('='))
    .reduce((acc: any, v: any) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      return acc;
    }, {});

const getUserToken = (reqCookies: any) => {
  const parsedCookies = parseCookie(reqCookies);

  const authToken = parsedCookies['@yeelloowSession'];

  return authToken;
};

const isAdminUser = async (token: any) => {
  const config = {
    headers: {
      'x-access-token': `${token}`,
      'Accept-Language': 'pt-BR,pt;q=0.9',
    },
  };

  const data = await axios.get(
    `${process.env.APP_API_URL}/api/auth/test/admin`,
    config
  );

  if (data.data === 'Admin Content.') {
    return true;
  } else {
    return false;
  }
};

export function hocLogin(gssp: any) {
  return async (context: any) => {
    const { req, resolvedUrl } = context;
    const token = await getUserToken(req.headers.cookie); // Add logic to extract token from `req.headers.cookie`

    if (token) {
      const isAdmin = await isAdminUser(token);

      if (isAdmin) {
        return {
          redirect: {
            destination: `/admin/dashboard`,

            statusCode: 302,
          },
        };
      }
    }

    return await gssp(context);
  };
}
