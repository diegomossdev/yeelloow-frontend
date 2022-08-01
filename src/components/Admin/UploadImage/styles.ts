import styled from 'styled-components';

export const Wrapper = styled.div``;

export const WrapperUpload = styled.div`
  .ant-upload-picture-card-wrapper {
    position: relative;
    transition: all 0.5s;

    .ant-upload-list {
      display: flex;
      flex-direction: column-reverse;
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
