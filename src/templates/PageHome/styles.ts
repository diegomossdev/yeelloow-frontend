import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Strong = styled.strong`
  font-size: 14px;
  color: ${(props) => props.theme.colors.admin.gray[400]};
`;

export const WrapperPreview = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Preview = styled.div`
  height: 100%;
  background-color: ${(props) => props.theme.colors.admin.gray[100]};
  padding: 10px;
  border: 1px solid #f1f1f1;
`;

export const TitlePreview = styled.div`
  height: 44px;
  display: flex;
  align-items: center;
  font-weight: ${(props) => props.theme.font.medium};
`;

export const WrapperUpload = styled.div`
  margin-top: 42px;

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
    max-width: 300px;
  }
`;
