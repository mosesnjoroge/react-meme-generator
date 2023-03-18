import './App.css';
import Nav from './components/Nav'
import Form from './components/MemeForm';
import Meme from './components/MemeDisplay';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  function handleClick(){
    console.log('i was clicked')
  }
  return (
    <div className="App">
      <Nav/>
      <Form/>
      <Meme/>
    </div>
  );
}

export default App;
