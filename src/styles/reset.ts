import { createGlobalStyle } from 'styled-components'
import { defaultTheme } from '../common/theme/theme'

export const ResetCSS = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    overflow-x: hidden;
    background: #ffffff;
    margin: 0;
    padding: 0;
    position: relative;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%
    }
  }

  @media (max-width: 1080px) {
    html {
      font-size: 87.5%
    }
  }

  body, input, textarea, select, button {
    font: 400 1rem ${({ theme }) => theme.fonts.ubuntu};
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`
