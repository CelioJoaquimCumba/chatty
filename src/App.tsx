import './App.css'
import { AuthUserProvider } from './firebase/auth'
import { Main } from './pages/Main'
import { ThemeProvider } from './providers/theme-provider'

function App() {

  return (
    <ThemeProvider>
      <AuthUserProvider>
        <Main/>
      </AuthUserProvider>
    </ThemeProvider>
  )
}

export default App
