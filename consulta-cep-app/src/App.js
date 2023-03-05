import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';

function App() {
  return (
    <div className="w-screen h-screen bg-yellow-400 flex flex-wrap justify-center items-center">
        <Header/>
        <Main/>
    </div>
  );
}

export default App;
