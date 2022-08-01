import Cookies from 'universal-cookie';

export const accessCookieHelper = (data: any) => {
  const cookies = new Cookies();

  // const expires = new Date(getCookieExpirationDate());

  cookies.set('@yeelloowSession', data.accessToken, {
    path: '/',
    // expires
  });
  cookies.set('@yeelloowSessionRoles', data.roles, {
    path: '/',
    // expires
  });
};

export const deleteAccessCookieHelper = async () => {
  const cookies = new Cookies();

  cookies.remove('@yeelloowSession', { path: '/' });
  cookies.remove('@yeelloowSessionRoles', { path: '/' });
};

export const getToken = async () => {
  const cookies = new Cookies();

  const allCookies = cookies.getAll();
  const cookieAuth = allCookies['@yeelloowSession'];

  return cookieAuth;
};

export const isUserSigned = async () => {
  const accountAuthCookie = await getToken();

  if (accountAuthCookie) {
    return {
      signed: true,
      token: accountAuthCookie,
    };
  } else {
    return {
      signed: false,
      token: null,
    };
  }
};
