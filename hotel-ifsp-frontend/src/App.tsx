import {BrowserRouter} from 'react-router-dom'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { BookingContextProvider } from './contexts/BookingContext'
import { AuthContextProvider } from './contexts/Auth/AuthContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      
        <BrowserRouter>
          <GlobalStyle/>
          <AuthContextProvider>
            <BookingContextProvider>
              <Router/>
            </BookingContextProvider>
          </AuthContextProvider>
        </BrowserRouter>
    </ThemeProvider>
  )
}
