import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
 
function App() {
  return (
    <>
    <Navbar title="WORD COUNTER" />
    <div className="container my-3">
    <TextForm heading="Enter the Data"/>
    </div>
    </> 
  );
}

export default App;