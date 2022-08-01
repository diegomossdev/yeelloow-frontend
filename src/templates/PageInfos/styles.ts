import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

export const WrapperUpload = styled.div`
  .ant-upload-picture-card-wrapper {
    position: relative;
    transition: all 0.5s;

    .ant-upload-list {
      display: flex;
      flex-direction: column-reverse;
      width: 90px;
    }
  }

  .ant-upload.ant-upload-select-picture-card {
    width: 220px;
  }

  .ant-upload-list-picture-card-container {
    width: 100%;
    height: 100%;
    position: relative;
  }
`;

export const Label = styled.label`
  width: 100%;
  font-size: 12px;
`;

export const BoxImg = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 10px;

  img {
    width: 100%;
  }
`;

export const LogoBox = styled.div`
  width: 90px;
`;
