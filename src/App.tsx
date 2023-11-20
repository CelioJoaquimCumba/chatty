import './App.css'
import { Main } from './pages/Main'
import { ThemeProvider } from './providers/theme-provider'

function App() {

  return (
    <ThemeProvider>
      <Main/>
    </ThemeProvider>
  )
}

export default App
