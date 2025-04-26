import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Applayout from './layout/Applayout';
import Homepage from './pages/Homepage/Homepage';
import Moviepage from './pages/Moviepage/Moviepage';
import Detailpage from './pages/Detailpage/Detailpage';
import Notfoundpage from './pages/Notfoundpage/Notfoundpage';
import 'bootstrap/dist/css/bootstrap.min.css';

//홈페이지
//영화 전체 보여주는 페이지
//디테일 페이지

function App() {
  return (
    <Routes>
      <Route path="/" element={<Applayout></Applayout>}>
      {/* index 라고 표시한거는 path="/" 랑 같은 의미 */}
        <Route index element={<Homepage></Homepage>}></Route> 

        {/* example of nested route (same as below) */}
        <Route path="/movies">
          <Route index element={<Moviepage></Moviepage>}></Route>
          <Route path=":id" element={<Detailpage></Detailpage>}></Route>
        </Route>

        {/* <Route path="/movies" element={<Moviepage></Moviepage>}></Route>
        <Route path="/movies/:id" element={<Detailpage></Detailpage>}></Route> */}

      </Route>

      <Route path="*" element={<Notfoundpage></Notfoundpage>}></Route>
    </Routes>
  );
}

export default App;
