import { useRequest } from 'hooks/use-request/use-request.hook';

export const useSlider = () => {
  const { errors, setErrors, post, get, del } = useRequest('/api');

  const getBanners = async () => {
    const { data } = await get('sliders');

    return data;
  };

  const removeBanner = async (id: number) => {
    const { data } = await del(`slider/${id}`);

    return data;
  };

  return {
    errors,
    setErrors,
    getBanners,
    removeBanner,
  };
};
