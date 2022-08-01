import { useRequest } from 'hooks/use-request/use-request.hook';
import { general as Api } from 'hooks/use-request/http';

import Cookies from 'universal-cookie';
import {
  accessCookieHelper,
  deleteAccessCookieHelper,
} from 'helpers/access-cookie.helper';

type LoginData = {
  username: string;
  password: string;
};

export const useAuth = () => {
  const { errors, setErrors, post, get } = useRequest('/api/auth');
  const cookies = new Cookies();

  const signIn = async (body: LoginData) => {
    const { data } = await post('signin', {
      username: body.username,
      password: body.password,
    });

    accessCookieHelper(data);
    window.localStorage.setItem('@yeelloowSessionEmail', data.email);
  };

  const logoutUser = async () => {
    cookies.remove('@yeelloowSession', { path: 'path=/' });
    cookies.remove('@yeelloowSessionRoles', { path: 'path=/' });

    await deleteAccessCookieHelper();
    window.localStorage.removeItem('@yeelloowSessionEmail');
  };

  const isUserAuth = () => {
    const allCookies = cookies.getAll();
    const cookieAuth = allCookies['@yeelloowSession'];

    if (cookieAuth) {
      return true;
    } else {
      return false;
    }
  };

  const isAdminUser = async () => {
    const allCookies = cookies.getAll();
    const cookieAuth = allCookies['@yeelloowSession'];

    // test/admin
    const data = await get('test/admin');

    if (data.data === 'Admin Content.') {
      return true;
    } else {
      return false;
    }
  };

  return {
    errors,
    setErrors,
    signIn,
    logoutUser,
    isUserAuth,
    isAdminUser,
  };
};
