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

export const ContentImages = styled.div`
  display: flex;
`;

export const BoxImg = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 10px;

  img {
    width: 100%;
  }
`;

export const DelPhoto = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;
  border-color: ${(props) => props.theme.colors.status.error.default};
  background: ${(props) => props.theme.colors.status.error.default};
  font-weight: ${(props) => props.theme.font.medium};
  text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
  box-shadow: 0 2px 0 rgb(0 0 0 / 5%);
  border: none;
  padding: 5px 10px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
`;
