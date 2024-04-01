
import './App.css';
import { AmazonTshirtJSON } from './compnents/Data';
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from './compnents/HomePage/HomePage';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Details from './compnents/Details/Details';
function App() {
  const data=AmazonTshirtJSON
  // console.log(data)
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage data={data} />} />
          <Route path="/Details" element={<Details />} />
        </Routes>
        {/* <HomePage data={data} /> */}
      </Router>
    </div>
  );
}

export default App;
