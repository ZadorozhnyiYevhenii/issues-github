import { Header } from './components/Header/Header'
import { CurrentRepository } from './components/CurrentRepository/CurrentRepository'
import { KanbanDashboard } from './components/KanbanDashboard/KanbanDashboard'
import './App.scss'

function App() {
  return (
    <main>
     <Header />
     <CurrentRepository />
     <KanbanDashboard />
    </main>
  )
}

export default App
