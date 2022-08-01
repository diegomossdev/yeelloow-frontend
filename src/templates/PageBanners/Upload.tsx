import React, { useState, useEffect } from 'react';
import { useSlider } from 'hooks/use-slider/use-slider.hook';

import * as S from './styles';
import { getToken } from 'helpers/access-cookie.helper';

export const Upload = () => {
  const [image, setImage] = useState<any>(null);
  const [createObjectURL, setCreateObjectURL] = useState<any>(null);

  const uploadToClient = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  const uploadToServer = async (event: any) => {
    try {
      const body = new FormData();
      body.append('file', image);

      const token = await getToken();

      await fetch(`${process.env.APP_API_URL}/api/slider`, {
        method: 'POST',
        headers: {
          'x-access-token': token,
        },
        body,
      });
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <S.Wrapper>
      <div>Upload</div>
      <div>
        <img src={createObjectURL} />
        <h4>Select Image</h4>
        <input type="file" name="myImage" onChange={uploadToClient} />
        <button
          className="btn btn-primary"
          type="submit"
          onClick={uploadToServer}
        >
          Send to server
        </button>
      </div>
    </S.Wrapper>
  );
};
