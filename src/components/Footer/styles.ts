import styled from 'styled-components';

export const Footer = styled.footer`
  margin-top: 30px;
  background-color: ${(props) => props.theme.colors.white};
  border-top: 1px solid;
  border-color: ${(props) => props.theme.colors.primary};
`;

export const ContentFooter = styled.div`
  padding: 50px 0;

  h4 {
    font-weight: ${(props) => props.theme.font.medium};
    color: ${(props) => props.theme.colors.gray[700]};
    font-size: 18px;

    @media (max-width: 992px) {
      text-align: center;
    }
  }

  ul {
    li {
      list-style: none;
      color: ${(props) => props.theme.colors.gray[500]};

      a {
        color: ${(props) => props.theme.colors.gray[500]};
      }
    }

    @media (max-width: 992px) {
      text-align: center;
    }
  }
  .first-menu {
    @media (min-width: 993px) {
      padding-right: 40px;
    }
  }
  .last-menu {
    @media (min-width: 993px) {
      padding-left: 50px;
    }
  }
`;

export const Infos = styled.div`
  padding-left: 12px;
  padding-right: 12px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  a {
    margin-top: 15px;
    background: #43bf51;
    padding: 10px 15px;
    border-radius: 10px;
    color: ${(props) => props.theme.colors.white};

    span {
      font-weight: ${(props) => props.theme.font.medium};
    }
  }
  .logo {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    margin-top: 0;
    margin-left: 0;
    background: transparent;
    padding: 0;
    border-radius: 0;
  }
`;

export const Copy = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 0 15px 0;
  background-color: ${(props) => props.theme.colors.primary};
  text-align: center;

  span {
    font-size: 12px;
    color: ${(props) => props.theme.colors.white};
    font-weight: ${(props) => props.theme.font.medium};
  }
`;

export const Yeelloow = styled.div`
  @media (min-width: 993px) {
    position: absolute;
    right: 0;
    margin-right: 20px;
    margin-top: -35px;
  }

  @media (max-width: 992px) {
    background-color: ${(props) => props.theme.colors.primary};
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-top: 20px;
  }
`;
