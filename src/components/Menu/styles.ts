import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;

  @media (max-width: 992px) {
    height: 100%;
    align-items: center;
  }

  @media (min-width: 993px) {
    height: 100%;
    align-items: center;
  }
`;

export const Content = styled.div<{ open: boolean }>`
  @media (min-width: 993px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ul {
      display: flex;
      border: none;

      li {
        margin-top: 0 !important;
        margin-bottom: 0 !important;

        a {
          color: ${(props) => props.theme.colors.primary};
          font-weight: ${(props) => props.theme.font.medium};
        }
      }
    }
  }

  @media (max-width: 992px) {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.primary};
    z-index: 2;

    ul {
      position: relative;
      height: calc(100% - 60px);

      li {
        a {
          color: ${(props) => props.theme.colors.primary};
          font-weight: ${(props) => props.theme.font.medium};
        }
      }
    }

    opacity: ${(props) => (props.open ? '1;' : '0;')};
    visibility: ${(props) => (props.open ? 'visible;' : 'hidden;')};
    transition: all 0.25s ease 0s;
  }
`;

export const ButtonMobile = styled.button`
  @media (min-width: 993px) {
    display: none;
  }

  @media (max-width: 992px) {
    display: block;
    border: none;
    background: transparent;
    font-size: 22px;
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const TitleMobile = styled.div`
  @media (min-width: 993px) {
    display: none;
  }

  @media (max-width: 992px) {
    display: block;
    height: 102.14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;

    h1 {
      font-size: 24px;
      color: ${(props) => props.theme.colors.white};
      font-weight: ${(props) => props.theme.font.medium};
      margin: 0;
    }

    button {
      background: transparent;
      border: none;
      font-size: 22px;
      color: ${(props) => props.theme.colors.white};
    }
  }
`;
