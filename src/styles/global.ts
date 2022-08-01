import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent,
} from 'styled-components';

type GlobalStylesProps = {};

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  ${({ theme }) => css`
    html {
      min-height: 100%;
      height: auto;
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family.base};
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.regular};
      min-height: 100%;
      height: auto;
      background: ${theme.colors.admin.gray[100]};
    }

    #__next {
      min-height: 100%;
      height: auto;
    }

    input {
      font-family: ${theme.font.family.base};
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.regular};
    }

    button {
      font-family: ${theme.font.family.base};
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.regular};
    }
  `}

`;

export default GlobalStyles;
