import './App.css';
import Create from './Contents/Create';
import Delete from './Contents/Delete';
import Read from './Contents/Read';
import Update from './Contents/Update';

function App() {
  return (
    <div className="App">
      <div className="item"><Create></Create></div>
      <div className="item"><Read></Read></div>
      <div className="item"><Update></Update></div>
      <div className="item"><Delete></Delete></div>
    </div>
  );
}

export default App;
