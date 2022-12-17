import React from 'react'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './theme'

interface ThemeProps {
  children?: React.ReactNode
}

export const Theme = ({ children }: ThemeProps) => {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
}
