import Navbar from './navbar';
import Home from './home';
import CreateBlog from './CreateBlog';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {

  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className='content'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/create' element={<CreateBlog/>}/>
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
