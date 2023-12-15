import './App.css'
import { AppContainer } from '../shared'
import { FirstOption } from '../shared/layout/FirstOption'
import { Header } from '../shared/layout/Header'
import { Main } from '../shared/layout/Main'
import { Footer } from '../shared/layout/Footer'

const App = () => {

  return (
    <AppContainer>
      <FirstOption />
      <Header />
      <Main />
      <Footer />
    </AppContainer>
  )
}

export default App
