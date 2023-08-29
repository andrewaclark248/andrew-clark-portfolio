import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/NavBar'
function App() {
  return (
    <div className='container-fluid bg-light' style={{height: "100vh"}}>
      <div className='row'>
        <NavBar />
      </div>
      <div className="row pt-4">
        <div className='col'>
          <h1 className="display-6">Andrew Clark Portfolio</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          Column
        </div>
        <div className="col">
          Column
        </div>
        <div className="col">
          Column
        </div>
      </div>
    </div>
  );
}

export default App;
