
import './App.css';
import {Route,Routes} from 'react-router-dom'
import  BatteryXrHitModelContainer from './components/battery/BatteryXrHitModelContainer'

function App() {
  return (
    <Routes>
      <Route path="/" element={<BatteryXrHitModelContainer />} />
     
   
    </Routes>
    
   
   
  )
  
}

export default App;