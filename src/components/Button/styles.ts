import styled from 'styled-components';
import { Button } from 'antd';

type ButtonTypesStyle = {
  fullWidth: boolean;
};

const ButtonStyled = styled(Button)<ButtonTypesStyle>`
  ${(props) => (props.fullWidth ? 'width: 100%;' : 'width: auto;')};

  background: ${(props) => props.theme.colors.primary};
  border-color: ${(props) => props.theme.colors.primary};
  border-radius: 6px;

  :hover,
  focus {
    background: ${(props) => props.theme.colors.primary};
    border-color: ${(props) => props.theme.colors.primary};
  }
`;

export { ButtonStyled as Button };
