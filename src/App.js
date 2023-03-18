import './App.css';
import Nav from './components/Nav'
import Form from './components/MemeForm';
import Meme from './components/Meme';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Form/>
      <Meme/>
    </div>
  );
}

export default App;
