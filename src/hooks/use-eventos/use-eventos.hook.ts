import queryString from 'query-string';
import { useRequest } from 'hooks/use-request/use-request.hook';
import { RcFile } from 'antd/lib/upload';

type EventosGetProps = {
  limit?: number;
  offset?: number;
};

type EventByIdProps = {
  id: number;
};

type EventEditProps = {
  id: number;
  event: {
    title: string;
    subtitle: string;
    description: string;
  };
};

type EventEditCover = {
  id: number;
  img: any;
};

type EventAddImages = {
  id: number;
  imgs: any;
};

export const useEventos = () => {
  const { errors, setErrors, post, get, put, del } = useRequest('/api');

  const getEventos = async ({ limit, offset }: EventosGetProps) => {
    const params = {
      limit,
      offset,
    };

    const searchParams = queryString.stringify(params);

    const url = searchParams ? `events?${searchParams}` : 'events';

    const { data } = await get(url);

    return data;
  };

  const getEventById = async ({ id }: EventByIdProps) => {
    const { data } = await get(`event/${id}`);

    return data;
  };

  const editEvent = async ({ id, event }: EventEditProps) => {
    const { data } = await put(`event/${id}`, event);

    return data;
  };

  const editCoverImgEvent = async ({ id, img }: EventEditCover) => {
    const formData = new FormData();
    formData.append('file', img);

    const { data } = await put(`event/cover-img/${id}`, formData);

    return data;
  };

  const addImages = async ({ id, imgs }: EventAddImages) => {
    const formData = new FormData();
    if (imgs.length) {
      imgs.forEach((image: any) => formData.append('files', image as RcFile));
    }

    const { data } = await post(`event/add-images/${id}`, formData);

    return data;
  };

  const deleteEvent = async (id: number) => {
    const { data } = await del(`event/${id}`);

    return data;
  };

  const deleteImageEvent = async (id: number) => {
    const { data } = await del(`event/image/${id}`);

    return data;
  };

  return {
    errors,
    setErrors,
    getEventos,
    getEventById,
    editEvent,
    editCoverImgEvent,
    addImages,
    deleteEvent,
    deleteImageEvent,
  };
};
