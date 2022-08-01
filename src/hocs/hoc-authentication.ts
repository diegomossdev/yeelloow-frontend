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

export function requireAuthentication(gssp: any) {
  return async (context: any) => {
    const { req, resolvedUrl } = context;
    const token = await getUserToken(req.headers.cookie); // Add logic to extract token from `req.headers.cookie`

    if (!token) {
      // Redirect to login page
      return {
        redirect: {
          destination: `/admin/login`,

          statusCode: 302,
        },
      };
    }

    return await gssp(context);
  };
}
