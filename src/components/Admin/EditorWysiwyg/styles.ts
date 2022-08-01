import styled from 'styled-components';

export const WrapperEditor = styled.div`
  height: 500px;
  background-color: ${(props) => props.theme.colors.white};

  .toolbarEditor {
    margin: 0;

    span {
      color: ${(props) => props.theme.colors.black};
    }
  }
  .wrapperEditor {
    background-color: ${(props) => props.theme.colors.white};
    height: 100%;
  }
  .editorEditor {
    background-color: ${(props) => props.theme.colors.admin.gray[100]};
    padding: 10px;
    border: 1px solid #f1f1f1;
    margin-top: -1px;
    height: calc(100% - 44px);
  }
`;
