import { BrowserRouter as Router } from 'react-router-dom';
import ShowRoutes from './routes/ShowRoutes';



function App() {

  return (
    <>
      <Router>
        <ShowRoutes/>
      </Router>
    </>
  )
}

export default App
