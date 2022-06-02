import logo from './logo.svg';
import './App.css';
import { Search } from './Components/Search Page/Search';
import { Profile } from './Components/Profile Page/Profile';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">

    <Routes>
      <Route path='/' element={<Search />} />
      <Route path='/profile/:id' element={<Profile />} />
      {/* <Route path='*' element={<NotFound />} /> */}

    </Routes>

    </div>
  );
}

export default App;
