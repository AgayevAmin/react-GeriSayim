import './App.css';
import { Timer } from './companents/Time';

function App() {
  return (
  <Timer 
   initialSeconds={120}
   title="Geri sayim" 
  />
  );
}

export default App;
