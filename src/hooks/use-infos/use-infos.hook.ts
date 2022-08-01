import { useRequest } from 'hooks/use-request/use-request.hook';

export const useInfos = () => {
  const { errors, setErrors, get, put } = useRequest('/api');

  const getInformations = async () => {
    const { data } = await get(`informations`);

    return data;
  };

  type UpdateInfoProps = {
    id: number;
    info: any;
  };

  const updateInformation = async ({ id, info }: UpdateInfoProps) => {
    const { data } = await put(`information/${id}`, { value: info });

    return data;
  };

  type UpdateImageProps = {
    id: number;
    image: any;
  };

  const updateLogo = async ({ id, image }: UpdateImageProps) => {
    const { data } = await put(`information/logo/${id}`, image);

    return data;
  };

  return {
    errors,
    setErrors,
    getInformations,
    updateInformation,
    updateLogo,
  };
};
