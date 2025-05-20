import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Counter />
      <Message />
      {/* <Greet name='Srinivas Chowdary Sunkara' heroName='Fan Of Nandamuri'>This is Nandamuri adda <button>Jai Balayya</button></Greet>
      <Welcome name='Srinivas Chowdary Sunkara' heroName='Fan Of Nandamuri'><button>Jai NTR</button></Welcome> */}
    </div>
  );
}

export default App;
