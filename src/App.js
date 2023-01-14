
import './App.css';
import DiaEd from './component/Dias/DiaEd';
import HeaderEd from './component/Header/HeaderEd';
import HorariosEd from './component/Horarios/HorariosEd';
import InformacionEd from './component/Info/InformacionEd';



function App() {
  return (
    <>
    <div className="App">
    <HeaderEd />
        <DiaEd/>
      <HorariosEd />
      <InformacionEd />
    </div>
    </>
  );
}

export default App;
