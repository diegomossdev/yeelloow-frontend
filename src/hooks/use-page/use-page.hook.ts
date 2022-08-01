import { useRequest } from 'hooks/use-request/use-request.hook';

type EditPageProps = {
  id: number;
  page: {
    title: string;
    description: string;
  };
};

type EditTextAndImageProps = {
  id: number;
  formData: any;
};

export const usePage = () => {
  const { errors, setErrors, post, get, put, del } = useRequest('/api');

  const getPageHome = async () => {
    const { data } = await get(`page-home/1`);

    return data;
  };

  const updateTextAndImage = async ({
    id,
    formData,
  }: EditTextAndImageProps) => {
    const { data } = await put(`textandimage/${id}`, formData);

    return data;
  };

  const getPageCompany = async () => {
    const { data } = await get(`page-company/2`);

    return data;
  };

  const editPage = async ({ id, page }: EditPageProps) => {
    const { data } = await put(`page/${id}`, page);

    return data;
  };

  const uploadCompanyImages = async (images: any) => {
    const { data } = await post(`companyimage`, images);

    return data;
  };

  const deleteCompanyImages = async (id: number) => {
    const { data } = await del(`companyimage/${id}`);

    return data;
  };

  return {
    errors,
    setErrors,
    getPageHome,
    updateTextAndImage,
    getPageCompany,
    editPage,
    uploadCompanyImages,
    deleteCompanyImages,
  };
};
