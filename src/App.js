
import { useRef } from 'react';
import './App.css';
import ReactPrint from 'react-to-print'
import Challan from './components/Challan';

function App() {
  const ref = useRef()
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main >
        <div ref={ref}>
          <Challan />
          <div className='border-2 border-white border-dashed border-b-black'></div>
          <Challan />
        </div>
        <div className='flex justify-center'>
          <ReactPrint
            trigger={() => <button className='border-2 border-blue-500 bg-blue-400 text-white  font-bold py-2  px-4 rounded'>Print</button>}
            content={() => ref.current}
          />
        </div>
        
      </main>
    </div>
  );
}

export default App;
