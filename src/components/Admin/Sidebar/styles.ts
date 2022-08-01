import styled from 'styled-components';

export const List = styled.ul`
  padding: 15px;
  li {
    list-style: none;

    :not(:first-child) {
      margin-top: 0.75rem;
    }
  }
`;

export const NameCategory = styled.div`
  padding: 15px 30px 2px 0;
  margin-bottom: 0.5rem;
  white-space: nowrap;
  position: relative;

  h3 {
    margin-bottom: 0;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-size: ${(props) => props.theme.font.sizes.xxsmall};
    font-weight: 500;
    color: ${(props) => props.theme.colors.admin.gray[200]};
  }
`;

export const Label = styled.div<{ active?: boolean }>`
  display: flex;
  margin-bottom: ${(props) => props.theme.spacings.xxxsmall};

  a {
    display: flex;
    width: 100%;
    padding: ${(props) => props.theme.spacings.xxxsmall} 0;
    font-size: ${(props) => props.theme.font.sizes.small};
    color: ${(props) => props.theme.colors.admin.gray[400]};

    :hover {
      color: ${(props) => props.theme.colors.yeelloow};
      font-weight: ${(props) => props.theme.font.medium};
      transition: all 0.2s;
      padding-left: ${(props) => props.theme.spacings.xxsmall};
    }

    ${(props) =>
      props.active ? `color: ${props.theme.colors.yeelloow};` : null};
  }
`;

export const Icon = styled.div`
  margin-right: ${(props) => props.theme.spacings.xxxsmall};
  display: flex;
  align-items: center;

  span {
    color: ${(props) => props.theme.colors.yeelloow};
  }
`;
